let consultaCobranca = [
  {
    vencimento: "15/12/2020",
    nome: "João Henrique",
    valor: "1550",
    situacao: "Atrasado",
    opcoes: "",
  },
  {
    vencimento: "18/12/2020",
    nome: "Karen Christina",
    valor: "1500",
    situacao: "Pago",
    opcoes: "",
  },
  {
    vencimento: "12/12/2020",
    nome: "Érico Vinicius",
    valor: "1700",
    situacao: "Atrasado",
    opcoes: "",
  },
  {
    vencimento: "19/12/2020",
    nome: "Adriano Xavier",
    valor: "1800",
    situacao: "Pago",
    opcoes: "",
  },
  {
    vencimento: "12/06/2021",
    nome: "Laurizete Garcia",
    valor: "1100",
    situacao: "Atrasado",
    opcoes: "",
  },
  {
    vencimento: "29/07/2021",
    nome: "José Augusto",
    valor: "2000",
    situacao: "A vencer",
    opcoes: "",
  },
  {
    vencimento: "24/07/2021",
    nome: "Augusto Pollet",
    valor: "1700",
    situacao: "A vencer",
    opcoes: "",
  },
];

function getCobranca(data) {
  let table = document.getElementById("tableCobrancas");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
							<td>${data[i].vencimento}</td>
							<td>${data[i].nome}</td>
                            <td></td>
							<td>${data[i].valor}</td>
                            <td>${data[i].situacao}</td>
                            <td>
                            <i class="fas fa-print" onClick="window.print()"></i>
                            <i class="fas fa-paperclip"></i>
                            </td>
					  </tr>`;
    table.innerHTML += row;
  }
  let rowTotal = `<tr>
                    <td></td>
                    <td></td>
                    <td>Total:</td>
                    <td>${somaValores()}</td>
                    <td></td>
                    <td></td>
                    </tr>`;
  table.innerHTML += rowTotal;
}

function getCobrancaPendente(data) {
  let table = document.getElementById("tableCobrancasPendentes");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                                <td>${data[i].vencimento}</td>
                                <td>${data[i].nome}</td>
                                <td></td>
                                <td>${data[i].valor}</td>
                                <td>${data[i].situacao}</td>
                                <td>
                                <i class="fas fa-print" onClick="window.print()"></i>
                                <i class="fas fa-paperclip"></i>
                                </td>
                          </tr>`;
    table.innerHTML += row;
  }
  let rowTotal = `<tr>
    <td></td>
    <td></td>
    <td>Total:</td>
    <td>${somaValoresPendentes()}</td>
    <td></td>
    <td></td>
    </tr>`;
  table.innerHTML += rowTotal;
}

function getCobrancaPagas(data) {
  let table = document.getElementById("tableCobrancasPagas");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                                  <td>${data[i].vencimento}</td>
                                  <td>${data[i].nome}</td>
                                  <td></td>
                                  <td>${data[i].valor}</td>
                                  <td>${data[i].situacao}</td>
                                  <td>
                                  <i class="fas fa-print" onClick="window.print()"></i>
                                  <i class="fas fa-paperclip"></i>
                                  </td>
                            </tr>`;
    table.innerHTML += row;
  }
  let rowTotal = `<tr>
    <td></td>
    <td></td>
    <td>Total:</td>
    <td>${somaValoresPagas()}</td>
    <td></td>
    <td></td>
    </tr>`;
  table.innerHTML += rowTotal;
}

function somaValores() {
  let total = consultaCobranca.reduce(
    (total, preco) => total + parseFloat(preco.valor),
    0
  );
  return total;
}

function somaValoresPendentes() {
  let total = cobrancaPendente.reduce(
    (total, preco) => total + parseFloat(preco.valor),
    0
  );
  return total;
}

function somaValoresPagas() {
  let total = cobrancaPaga.reduce(
    (total, preco) => total + parseFloat(preco.valor),
    0
  );
  return total;
}

function filterCobrancaPendente(data) {
  if (data.situacao == "Atrasado" || data.situacao == "A vencer") {
    return data;
  }
}

let cobrancaPendente = consultaCobranca.filter(filterCobrancaPendente);
cobrancaPendente.forEach((situacao) => {
  return situacao;
});

function filterCobrancaPagas(data) {
  if (data.situacao == "Pago") {
    return data;
  }
}

let cobrancaPaga = consultaCobranca.filter(filterCobrancaPagas);
cobrancaPaga.forEach((situacao) => {
  return situacao;
});

function closePerfil(){
    let seta = document.getElementById("seta");
    let usuario = document.getElementById("usuario");
    let setaBaixo = document.getElementById('setaBaixo')

    usuario.style.display = 'none'
    seta.style.display = "none"
    setaBaixo.style.display = 'block'
}

function openPerfil(){
    let seta = document.getElementById("seta");
    let usuario = document.getElementById("usuario");
    let setaBaixo = document.getElementById('setaBaixo')

    usuario.style.display = 'block'
    setaBaixo.style.display = 'none'
    seta.style.display = "block"
}


// Chamadas das funções

getCobranca(consultaCobranca);
filterCobrancaPendente(consultaCobranca);
getCobrancaPendente(cobrancaPendente);
getCobrancaPagas(cobrancaPaga);
somaValores();
somaValoresPendentes();
somaValoresPagas();
