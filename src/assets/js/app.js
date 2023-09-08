const bar = document.querySelector(".loading__bar--inner");
const counter_number = document.querySelector(".loading__counter--number");


// loading bar
let counter=0;
let barInterval=setInterval(()=>{
    bar.style.width=counter +"%";
    counter_number.innerText=counter + "%";
    counter++;

    if (counter===101) {
        clearInterval(barInterval); 
    }
},20);