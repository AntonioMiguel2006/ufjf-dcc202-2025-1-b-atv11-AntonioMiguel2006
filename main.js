// main.js
import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDeLista);

btnAdicionar.addEventListener("click", () => {
  const novoItem = pEntrada.textContent;
  if (novoItem && novoItem.trim() !== "") { 
    adicionaNaLista(novoItem.trim());
    atualizarLista();
    pEntrada.textContent = "";
  }
});

function limparItensDeLista() {
  limpaLista();
  atualizarLista();
}

function atualizarLista() {
  olItens.innerHTML = "";
  let lista = getLista();
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement("li");
    li.textContent = lista[i];
    olItens.appendChild(li);
  }
}

atualizarLista();