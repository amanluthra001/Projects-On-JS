document.addEventListener('submit',function(e){
e.preventDefault();
const height=parseFloat(document.querySelector('#height').value.trim());
const weight=parseFloat(document.querySelector('#weight').value.trim());
const result=document.querySelector('#result');
if(height<=0 || isNaN(height)){
 result.innerHTML="Please Enter A Valid Height";
}
else if(weight<=0 || isNaN(weight)){
    result.innerHTML="Please Enter A Valid Weight";
}
else{
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML=`${bmi}`;
}

})


