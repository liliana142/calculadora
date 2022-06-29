const resultado =document.getElementById('result');
const numero =document.querySelectorAll('.numero');
const operador =document.querySelectorAll('.operar');


function insert(valor){
    const number=0;
  
   document.getElementById('result').value+=valor;
   }
  
  function operar(valor){
    
       
    document.getElementById('result').value+=valor;
   }
   function borrar(valor){
    document.getElementById('result').value=valor;

}
   function igualar(){

   document.getElementById('result').value= eval(document.getElementById('result').value);
   
   }