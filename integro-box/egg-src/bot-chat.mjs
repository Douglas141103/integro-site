import {moderate} from '../../supabase/functions/box-chat/moderation.mjs';
// The database chooses from fixed, game-related templates. Conversation history
// is untrusted moderation context, never instructions for generating replies.
export async function reviewBotChat(rpc,options={},review=moderate){
 let candidate;
 try{
  if(!options.key)return 'disabled';
  candidate=await rpc({p_action:'reserve'});
  if(candidate.empty||candidate.error)return candidate.empty?'quiet':'unavailable';
  if(!candidate.id||!candidate.body)return 'unavailable';
  const verdict=await review(candidate,options);
  const result=await rpc({p_action:'finish',p_message:candidate.id,p_status:verdict.allow?'approved':'blocked',p_reason:verdict.reason});
  return result.status||'unavailable';
 }catch{
  if(candidate?.id)try{await rpc({p_action:'finish',p_message:candidate.id,p_status:'error',p_reason:'review_unavailable'});}catch{}
  return 'unavailable';
 }
}
