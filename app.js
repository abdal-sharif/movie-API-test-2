let countryName = document.getElementById('country-h3');
let countryFlag = document.getElementById('cover');
let searchBtn = document.getElementById('search');

searchBtn.addEventListener("submit",(e)=>{
   e.preventDefault();
   fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
   .then((res) => res.json())
   .then((data) =>{
    console.log(data);
    countryName.textContent = data[0].capital;
    countryFlag.innerHTML = `<img src = ${data[0].flags.png} alt= "country flag">`;

   });
})