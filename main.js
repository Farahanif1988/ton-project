let counter_element = document.body.querySelector(".main");


let counter = 1000;
function update (){
    conuter = counter+= 1;
counter_element.textContent= counter; }

setInterval(update , 1000);