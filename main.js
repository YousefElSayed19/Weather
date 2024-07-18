let input    =  document.querySelector(".input");
let button   =  document.querySelector(".button");
let change   =  document.querySelector(".change");
let degree  =  document.querySelector(".degree1");
let country  =  document.querySelector(".country");
let moudle   =  document.querySelector(".moudle");
let speed    =  document.querySelector(".speed");
let des    =  document.querySelector(".des");





function call(city){
    document.querySelector(".loader").style.visibility='visible';
    document.querySelector(".shadow").style.visibility='visible';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=859d67a26990b8a38eddca1b2981acba&units=metric`)
    .then(req=>{
        degree.innerHTML=req.data.main.temp;
        country.innerHTML=input.value;
        moudle.innerHTML=req.data.main.humidity + '%';
        speed.innerHTML=req.data.wind.speed + ' Km/h'
        des=req.data.weather[0].description;
        input.value=''
        if (des=='few clouds'){
            change.src='./images/mist.png'
            change.title='few clouds'
        }else if (des=='moderate rain' ||req.data.weather[0].description=='light rain' ){
            change.src='./images/rain.png'
            change.title='moderate rain'
        }else if (des=='clear sky'){
            change.src='./images/clear.png'
            change.title='clear sky'
        }else{
            change.src='./images/clouds.png'
            change.title='overcast clouds'
        }
        console.log(req.data.weather[0].description)
    })
    .catch(error=>{
        input.value='';
        alert("Wrong Country This Is Not Define! ");
    })
    .finally(()=>{        
        document.querySelector(".loader").style.visibility='hidden';
        document.querySelector(".shadow").style.visibility='hidden';
    })
}


button.onclick=()=>{
    if (input.value){
        call(input.value)
    }else{
        input.value=''
        alert("field Is Empty !")
    }
}

window.onload=()=>{
    call("zifta")
    input.value='zifta'
}
// fahrenheitToCelsius(req.data.main.temp)