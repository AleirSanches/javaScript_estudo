document.getElementById("text").innerHTML= "Usando o inner HTML";
console.log(22*4);
var  num1 = 88;
console.log(num1);
console.log(typeof(num1));
num1.toString();
console.log(num1);
console.log(typeof(num1));
var resultado= (num1 >= 88 && num1 <= 100)? " e valido" : " não corresponde";
console.log(resultado);

const carro = { marca: "Fiat" ,
                modelo: "uno" ,
                km_s: 100 ,
                cor: "Azul", 
                categoria: "Suv" , 
                peso: 1000 ,
                buzina: function(){ alert("Bzzzzzzzzzzzzzzzzzzz")},

                final: function (){
                    return " A velocidade final do veicul o = " + this.km_s * 5;
                }

            }

            console.log(carro.final())
            carro.buzina();
            function clickUm(){
                alert("Voçê clicou uma vez")
            }

            function clickDois(){
                alert("Vc clicou duas vezes")
            }

            
             function mudaCor (){
                let mover = document.getElementById("modelo");
                mover.style.backgroundColor= "red" ;

             }

             function mudaCorFora (){
                let moverFora = document.getElementById("modelo");
                moverFora.style.backgroundColor= "blue" ;

             }

             function moverMouse(){
                let p = document.getElementById("texto");
                p.append('Adiciona uma linha +<br>');
                
             }

             function apertaSegura(){

                let aperta = document.getElementById("modelo");
                aperta.style.backgroundColor= "yellow" ;

             }

             function apertaSolta(){

                let solta = document.getElementById("modelo");
                solta.style.backgroundColor= "black" ;

             }

            const adicionaFuncao = new Array("Curitiba, Florianopolis, São Paulo, Porto Alegre");
            adicionaFuncao.push("Bahia");
            console.log(adicionaFuncao);
            