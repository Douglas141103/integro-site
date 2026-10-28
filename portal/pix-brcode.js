/* Pix estático: BR Code / Manual de Padrões para Iniciação do Pix (BCB).
 * Generates payment instructions only. This is never proof of receipt.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.INTEGRO_PIX = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';
  function documentValid(value) {
    if (!/^(?:\d{11}|[A-Z0-9]{12}\d{2})$/.test(value) || /^(\d)\1+$/.test(value)) return false;
    const base = value.length - 2;
    for (let n = base; n < value.length; n++) {
      let sum = 0;
      for (let i = 0; i < n; i++) sum += (value.charCodeAt(i) - 48) * (base === 9 ? n + 1 - i : (n - 1 - i) % 8 + 2);
      const digit = (sum * 10) % 11;
      if (Number(value[n]) !== (digit === 10 ? 0 : digit)) return false;
    }
    return true;
  }
  function normalizeKey(type, value) {
    let key = String(value || '').trim();
    if (type === 'cpf' || type === 'cnpj') {
      key = key.replace(/[.\-/\s]/g, '').toUpperCase();
      if (key.length !== (type === 'cpf' ? 11 : 14) || !documentValid(key)) throw Error('Confira os dígitos do CPF/CNPJ cadastrado como chave Pix.');
    } else if (type === 'phone') {
      key = key.replace(/[()\s-]/g, '');
      if (!/^\+[1-9]\d{1,14}$/.test(key)) throw Error('Informe o telefone com + e código do país. Ex.: +5592999999999.');
    } else if (type === 'email') {
      key = key.toLowerCase();
      if (key.length > 77 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/.test(key)) throw Error('Informe a chave Pix de e-mail válida, com até 77 caracteres.');
    } else if (type === 'random') {
      key = key.toLowerCase();
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(key)) throw Error('Copie a chave aleatória completa da área Pix da InfinitePay.');
    } else throw Error('Selecione o tipo da chave Pix.');
    return key;
  }
  function normalizeText(value, limit, label) {
    const text = String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().trim().replace(/\s+/g, ' ');
    if (!text || text.length > limit || !/^[A-Z0-9 $%*+\-./:]+$/.test(text)) throw Error(`${label}: use letras e números, com até ${limit} caracteres.`);
    return text;
  }
  function normalizeSettings(settings) {
    return {
      key_type: settings.key_type,
      pix_key: normalizeKey(settings.key_type, settings.pix_key),
      merchant_name: normalizeText(settings.merchant_name, 25, 'Nome do recebedor'),
      merchant_city: normalizeText(settings.merchant_city, 15, 'Cidade'),
      enabled: settings.enabled === true
    };
  }
  function crc16(value) {
    let crc = 0xffff;
    for (let i = 0; i < value.length; i++) {
      crc ^= value.charCodeAt(i) << 8;
      for (let bit = 0; bit < 8; bit++) crc = ((crc << 1) ^ ((crc & 0x8000) ? 0x1021 : 0)) & 0xffff;
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
  }
  function tlv(tag, value) {
    if (!value || value.length > 99 || /[^\x20-\x7e]/.test(value)) throw Error('Dados do Pix fora do padrão BR Code.');
    return tag + String(value.length).padStart(2, '0') + value;
  }
  function build(settings, amountCents, txid) {
    const s = normalizeSettings(settings);
    if (!s.enabled) throw Error('Ative e salve a chave Pix antes de gerar o código.');
    if (!Number.isSafeInteger(amountCents) || amountCents < 1 || amountCents > 100000000) throw Error('O valor do Pix deve ficar entre R$ 0,01 e R$ 1.000.000,00.');
    if (!/^[a-zA-Z0-9]{1,25}$/.test(txid)) throw Error('Referência da venda inválida.');
    const amount = (amountCents / 100).toFixed(2);
    const body = tlv('00', '01') + tlv('01', '11') + tlv('26', tlv('00', 'br.gov.bcb.pix') + tlv('01', s.pix_key))
      + tlv('52', '0000') + tlv('53', '986') + tlv('54', amount) + tlv('58', 'BR')
      + tlv('59', s.merchant_name) + tlv('60', s.merchant_city) + tlv('62', tlv('05', txid)) + '6304';
    return body + crc16(body);
  }
  return Object.freeze({ build, normalizeSettings, normalizeKey, crc16 });
});
