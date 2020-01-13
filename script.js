//CARNE = 400 GRAMA POR PESSOA - 6 HORAS > 650$ //
// CERVEJA = 1200 ML POR PESSOA  - 6 HORAS > 2000ML //
// REFRIGERANTE/AGUA = 1000 POR PESSOA - 6 HORAS 1500ML //
// CRIANÇAS = VALEM 0,5 ADULTO 

let osAdulto = document.getElementById("adulto");
let osCrianca = document.getElementById("crianca");
let duracao = document.getElementById("tempo");
let resultado = document.getElementById("resultado");


function Calcular(){
    console.log("CALCULANDO...");
    let ad = osAdulto.value;
    let cr = osCrianca.value;
    let tempo = duracao.value;
    
     let qtdCarne = CarnePP(tempo) * ad + (CarnePP(tempo) / 2 * cr);
     let qtdCerveja = CervejaPP(tempo) * ad;
     let qtdBebida = BebidaPP(tempo) * ad + (BebidaPP(tempo) * cr);

    resultado.innerHTML = `<p>${qtdCarne/1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/473)} Latões de cerveja</p>`;
    resultado.innerHTML += `<p>${qtdBebida/1000} Litros de Bebidas</p>`;

}


function CarnePP(tempo){
    if(tempo >= 6){
        return 650;
    } else {
            return 400;
        }
    }
function CervejaPP(tempo){
    if(tempo >= 6){
        return 2000;
    } else {
        return 1200;
        }
    }

function BebidaPP(tempo){
    if(tempo >= 1500){
        return 2000;
    } else {
        return 1000;
        }
    }    

