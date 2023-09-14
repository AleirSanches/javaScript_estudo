

const adicionaFuncao = new Array("Curitiba"," Florianopolis"," São Paulo"," Porto Alegre");
            adicionaFuncao.push("Bahia");
           
const idadeComprador = 19;
const acompamjado = false;

if(idadeComprador >= 18){
  console.log("Comprador maior de idade dentino : ",adicionaFuncao[0]);
  adicionaFuncao.splice(0,1) ;    
}
else if(acompamjado){
  console.log("Comprador de menor, porem acomapnhado");
  adicionaFuncao.splice(0,1) ; 
}
else {
  console.log("Comprador de menor, PROIBIDO VIAJAR");
}

  console.log(adicionaFuncao);