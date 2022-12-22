let btn = document.querySelector('.btn');
let button = document.querySelectorAll('button');
let value = document.getElementById('value');

for(let i = 0 ; i<button.length; i++){
   button[i].addEventListener("click", function(){
       if(this.innerHTML=="="){
           value.innerHTML = eval(value.innerHTML);
       }else{
           if(this.innerHTML=="Clear"){
            value.innerHTML= "";
           }
           else{
               value.innerHTML += this.innerHTML;
           }
       }
   })
}