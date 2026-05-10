//limpar texto
const limpar_tudo = document.getElementById("limpar_tudo");
const limpar = document.getElementById("limpar");

limpar_tudo.onclick = clear_all
limpar.onclick = clear;


function clear_all(){
    expressao = "";
    input_console.value = "";
}
function clear(){
    expressao = expressao.slice(0, -1);
    input_console.value = expressao;
}

//operadores
const porcentagem = document.getElementById("botao_porcentagem");
const dividir = document.getElementById("botao_dividir");
const vezes = document.getElementById("botao_vezes");
const menos = document.getElementById("botao_menos");
const ponto = document.getElementById("botao_ponto");
const igual = document.getElementById("butaon_igual");
const mais = document.getElementById("botao_mais");


//numeros
const um = document.getElementById("botao_um");
const dois = document.getElementById("botao_dois");
const tres = document.getElementById("botao_tres");
const quatro = document.getElementById("botao_quatro");
const cinco = document.getElementById("botao_cinco");
const seis = document.getElementById("botao_seis");
const sete = document.getElementById("botao_sete");
const oito = document.getElementById("botao_oito");
const nove = document.getElementById("botao_nove");
const zero = document.getElementById("botao_zero");

//CONSOLE
let input_console = document.getElementById("input_console");


let expressao = '';


function adicionar(valor){
    expressao += valor;
    input_console.value = expressao;
}

function conectar(botao, valor) {
    botao.addEventListener("click", () => {
        adicionar(valor);

    });
}

document.addEventListener("keydown", (event) => {//funçao teclas
    
    tecla = event.key
    if(tecla >= "0" && tecla <= "9"){//numeros
        adicionar(tecla);
    }
    else if (tecla === "+" //operadores
        ||tecla === "-" 
        || tecla === "." 
        || tecla === "/" 
        || tecla === "%"){
        adicionar(tecla);
    }

    if(tecla ==="Backspace"){
        clear();
    }

});



conectar(um, "1");
conectar(dois, "2");
conectar(tres, "3");
conectar(quatro, "4");
conectar(cinco, "5");
conectar(seis, "6");
conectar(sete, "7");
conectar(oito, "8");
conectar(nove, "9");
conectar(zero, "0");
conectar(porcentagem, " % " );
conectar(dividir, " / ");
conectar(vezes, " * ");
conectar(menos, " - ");
conectar(ponto, ".");
conectar(mais, " + ");

const body_historico = document.getElementById("body_historico")

function add_historico(expressao, valor){

    let div = document.createElement("div")
    let p = document.createElement("p");
    let h2 = document.createElement("h2");

    body_historico.appendChild(div);

    p.textContent = expressao;
    h2.textContent = valor;
    
    div.appendChild(p);
    div.appendChild(h2);

}

let valor = 0
let i = 0
igual.addEventListener("click", () =>{

    valor = eval(expressao);
    add_historico(expressao, valor);
    i++;
    clear_all();
})

const limpar_historico = document.getElementById("limpar_historico");
limpar_historico.addEventListener("click", () =>{
    body_historico.innerHTML = "";
})






