import express from 'express';

import { retornarMensagemDoDia } from './mensagemDoDia.js'
const app = express();

let data = new Date();

app.get('/', (req, res) => {
  let dia = data.getMonth()
  let mensagemSelecionada = retornarMensagemDoDia(dia)

  res.json({ mensagem: mensagemSelecionada })
})

app.listen(8080, () => {
  console.log('Servidor node iniciado em ' + data);
})