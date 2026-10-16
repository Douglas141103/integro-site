-- The merchant's checkout accepts R$1.00; the owner approved the new price.
begin;
alter table private.intgem_orders drop constraint intgem_orders_amount_check;
-- Retain 99 only for historical orders; all newly generated gem1 orders use 100.
alter table private.intgem_orders add constraint intgem_orders_amount_check check(amount in (99,100,299,699,1099));
do $price$
declare body text;
begin
 select pg_get_functiondef('public.box_intgem_order(text,uuid)'::regprocedure) into body;
 if position('(''gem1'',1,99)' in body)>0 then
  execute replace(body,'(''gem1'',1,99)','(''gem1'',1,100)');
 elsif position('(''gem1'',1,100)' in body)=0 then
  raise exception 'Unexpected IntGem pack definition';
 end if;
end $price$;
notify pgrst, 'reload schema';
commit;
