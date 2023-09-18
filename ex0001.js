const adicionaFuncao = new Array("Curitiba"," Florianopolis"," São Paulo"," Porto Alegre");
            adicionaFuncao.push("Bahia");
           
const idadeComprador = 15;
const acompanhado = true;
let passagemComprada = false;
const destino = " Lages";

const liberadoParaViaajr =idadeComprador >= 18 || acompanhado == true;


let cont = 0;
  
while (cont < adicionaFuncao.length){
    let cidade = adicionaFuncao[cont];
    if (cidade === destino){
    
        console.log("Destino existente")
        passagemComprada =true;
        break;
        
    }  
    
    console.log(adicionaFuncao[cont]);
    cont+=1;  
    }

    if (passagemComprada === true && liberadoParaViaajr){
      
        console.log("Boa viagem")
    }
    else {
        console.log("Nãp permitido o embarque")
    }
    console.log(cont);
    console.log("Destino existe", passagemComprada)
   
    



