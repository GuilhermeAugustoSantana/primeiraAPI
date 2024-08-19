import frases from './dados.js'

export const retornarMensagemDoDia = (dia) => {
  return frases[dia - 1];
};

