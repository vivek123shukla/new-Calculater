let input=document.querySelector('input')
let equal=document.querySelector('#equal');
let btn=document.querySelectorAll('.btn');
let ac=document.querySelector('#ac');
let x=document.querySelector('#x');

let str='';
input.value=0;
// button target getting value;
btn.forEach(function(e){
       e.addEventListener('click',()=>{
       
        str+=e.innerHTML;
        input.value=str;
       })
},)
// value findind with eval;
equal.addEventListener('click',()=>{
   input.value= eval(str);   
   str=input.value;
})

// clearing value with AC;
ac.addEventListener('click',()=>{
   input.value=0;
   str='';
})

// one by one removing value with X;
x.addEventListener('click',()=>{
        let b=str.slice(0,str.length-1);
     input.value=b;
     str=b;
})