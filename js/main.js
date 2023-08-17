const formulario = document.querySelector(".container-principal");
const submit = document.querySelector(".enviar");
const inputTexto = document.querySelector(".procurar");
const cidade = document.querySelector(".local-cidade");
const estado = document.querySelector(".local-estado");
const pais = document.querySelector(".pais");
const temperatura = document.querySelector(".temperatura");
const clima = document.querySelector(".clima");
const graus = document.querySelector(".graus");
const img = document.querySelector(".imagem");

const chave = "7143e952cbe241aa8fd181458231108";

async function pegaDados(cidade) {
    const resposta = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade}&aqi=no`
    );
    const dado = await resposta.json();
    informa(dado);
    pegaIcone(dado);
}

function recebeCidade() {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        let cidade = inputTexto.value;
        return pegaDados(cidade);
    });
}

function informa(dado) {
    cidade.innerHTML = `${dado["location"]["name"]}`;
    estado.innerHTML = `${dado["location"]["region"]},`;
    pais.innerHTML = dado["location"]["country"];
    temperatura.innerText = `${dado["current"]["temp_c"]}` + graus.innerText;
    clima.innerHTML = dado["current"]["condition"]["text"];
}

function pegaIcone(link) {
    const url = link["current"]["condition"]["icon"];
    img.src = url;
    return console.log(img);
}

recebeCidade();
