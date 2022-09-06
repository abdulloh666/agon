alert("Welcome to my website!")
const name =  prompt("Your name?") ;
const age =  prompt("Your age?") ;
const city =  prompt("Your address?") ;
confirm("Are you sure to stay?")

const d = new Date();
let year =d.getFullYear();

    document.getElementById("name").innerHTML = name;
    document.getElementById("age").innerHTML = age;
    document.getElementById("city").innerHTML = city;


btn.addEventListener('click', () => { 
      
console.log(`User was born in ${year - age } `)
document.getElementById("info").innerHTML = `User was born in ${year - age } `;

})