import { dadosGrupo } from "./dados.js";


const container = document.querySelector(".container");
// const table = document.querySelector(".tabela");
// const tabelaBody = document.querySelector(".tabela-body");


function criarTabela() {
  const tabela = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const tr = document.createElement("tr");

  tabela.classList.add("tabela");
  tbody.classList.add("tabela-body");

  for (let label in dadosGrupo[0]) {
        if (label === "Grupo") continue;
    const td = document.createElement("td");
    td.innerText = label;
    tr.append(td);
  }

  thead.appendChild(tr);
  tabela.appendChild(thead);
  tabela.appendChild(tbody);

  return tabela;
}

function inserirDadosTabela(tabela, dadosTime) {
  const tabelaBody = tabela.querySelector(".tabela-body");

  for (let time of dadosTime) {
    criarLinha(tabelaBody, time);
  }
}

function criarLinha(tabela, time) {
  const tr = document.createElement("tr");
  
  let colunaIndex = 0;

  for (let atributo in time) {
    if (atributo === "Grupo") continue;
    const td = document.createElement("td");
    td.innerText = time[atributo];
  
    
    if (colunaIndex === 1) {
      td.classList.add("bold");
    }
  
    tr.appendChild(td);
    colunaIndex++;
  }
  

  tabela.appendChild(tr);
}

function criarContainerGrupo(nome, tabela, dados) {
  const div = document.createElement("div");
  const titulo = document.createElement("h2");
  titulo.innerText = nome;

  inserirDadosTabela(tabela, dados);

  div.appendChild(titulo);
  div.appendChild(tabela);

  container.appendChild(div);
}

const tabelaA = criarTabela();
criarContainerGrupo("GRUPO A",  tabelaA, dadosGrupo.slice(0, 4))
const tabelaB = criarTabela();
criarContainerGrupo("GRUPO B",  tabelaB, dadosGrupo.slice(4, 8))
const tabelaC = criarTabela();
criarContainerGrupo("GRUPO C",  tabelaC, dadosGrupo.slice(8, 12))
const tabelaD = criarTabela();
criarContainerGrupo("GRUPO D",  tabelaD, dadosGrupo.slice(12, 16))

// body.appendChild(tabelaA);
// body.appendChild(tabelaB);
// body.appendChild(tabelaC);
// body.appendChild(tabelaD);

// inserirDadosTabela(tabelaA, dadosGrupo.slice(0, 4));
// inserirDadosTabela(tabelaB, dadosGrupo.slice(4, 8));
// inserirDadosTabela(tabelaC, dadosGrupo.slice(8, 12));
// inserirDadosTabela(tabelaD, dadosGrupo.slice(12, 16));