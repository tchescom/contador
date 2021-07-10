window.addEventListener("load",()=>{
    let sec = 180;
    
    const countDiv = document.getElementById('timer');
    const secpass = ()=>{

        let min = Math.floor(sec/60);
        let segundosrestantes = sec % 60;
       
        if(segundosrestantes<10){
            segundosrestantes = "0" + segundosrestantes;
        }
        if(min < 10){
            min = "0" + min;
        }
        countDiv.innerHTML = min + ":" + segundosrestantes;
        if(sec > 0){
            sec--;
        }else{
            countDiv.innerHTML = "Acabou!"
        }
    }
    const countDown = setInterval(() => secpass(), 1000);
});
document.documentElement.style.setProperty('--animate-duration', '3s')