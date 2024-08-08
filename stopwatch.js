let [hour,minute,second]=[0,0,0];
let display=document.querySelector(".watch");
let timer=null;

function displayTime(){
    second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;

        }
    }
    let h=hour<10?"0"+hour:hour;
    let m=minute<10?"0"+minute:minute;
    let s=second<10?"0"+second:second;
    
    display.innerHTML=`${h}:${m}:${s}`;
}

function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(displayTime, 1000);
}

function stopp(){
    clearInterval(timer);
}

function resett(){
    clearInterval(timer);
    [hour,minute,second]=[0,0,0]
    display.innerHTML="00:00:00";
}