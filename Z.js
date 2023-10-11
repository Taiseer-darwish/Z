// الحصول على التاريخ الحالي
let optionsDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let optionsTime = {hour: 'numeric', minute: 'numeric', hour12: true};
let date = new Date();
let formattedDate = date.toLocaleDateString('ar-EG', optionsDate);
let formattedTime = date.toLocaleTimeString('ar-EG', optionsTime);

document.getElementById('datetime').textContent = formattedDate + '، ' + formattedTime;

 // تشغيل الاله الحاسبه
let goldOption = document.getElementById("gold-option");
let geram = document.getElementById("geram");
let result = document.getElementById("result");

   function getResult(){
    if(geram.valio != ''){
  let goldPrice = parseFloat(goldOption.value);
  let weight = parseFloat(geram.value);
  let totalPrice = +goldPrice * +weight;
  result.innerHTML = totalPrice.toFixed(3);
}else{
    result.inner.innerHTML= "";
  }
}


let goldOptionZ = document.getElementById("gold-optionZ");
let geramZ = document.getElementById("geramZ");
let resultZ = document.getElementById("resultZ");

function getResultZ() {
    if(geramZ.valio != ''){
  let goldPrice = parseFloat(goldOptionZ.value);
  let weight = parseFloat(geramZ.value);
  let totalPrice = +weight / +goldPrice ;
  resultZ.innerText = totalPrice.toFixed(3);}
}




