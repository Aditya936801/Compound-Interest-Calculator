const principle = document.getElementsByName("principle")[0];
const rate = document.getElementsByName("rate")[0];
const year = document.getElementsByName("year")[0];
document.getElementsByTagName("button")[0].onclick=()=>{
    const ci = (principle.value * ((1+(rate.value/100))**year.value))-principle.value
    document.querySelector(".result").textContent = ci;
    
}