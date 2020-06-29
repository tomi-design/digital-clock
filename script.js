let noon = 12;
let evening = 18; // 6PM
let wakeupTime = 9; // 9AM
let lunchTime = 12; // 12PM
let studyTime = 17; // 5PM

let time= new Date().getHours();



let updateClock=function() {
let activityImage= document.getElementById('icon');
let blockQuote= document.getElementById('timeOfDay');
let messageText;
let image= 'img/heart.png';

if (time == studyTime){
	image= 'img/pencil.png';
    messageText = "Time to hit the books!";

} else if (time == lunchTime) {
	image= 'img/pizza.png';
    messageText = "You need some fuel!";

} else if (time == wakeupTime) {
	image= 'img/sun.png';
    messageText = "Rise and shine!";	
	
} else if (time > evening) {
	image= 'img/moon.png';
    messageText = "Good Evening!";
    let color="#00334d";	
    document.body.style.backgroundColor=color;    
    document.getElementById("title").style.color="white";
    document.getElementById("myName").style.color="white";	
} else {
	image='img/sun.png';
    messageText = "Good morning!";
}

blockQuote.innerText= messageText;
activityImage.src= image;

}


let showCurrentTime= function() {
  let clock=  document.getElementById('time');
  let currentTime= new Date();
  let hours= currentTime.getHours();
  let minutes= currentTime.getMinutes();
  let seconds=currentTime.getSeconds();
  let meridian= 'AM';
  
  if (hours>=noon)
    {
      meridian= 'PM';
    }
  if (hours>noon)
    {
      hours=hours-12;
    }
  if (minutes< 10)
    {
      minutes= '0' + minutes; //this adds the 0 number when it is a single digit like '08 minutes'
    }
  if (seconds<10)
    {
      seconds= '0' + seconds;
    }
  let clockTime= hours + ':' +  minutes + ':' + seconds + '   ' + meridian;
  clock.innerText= clockTime;
 
};

showCurrentTime();

let oneSecond=1000;
setInterval(showCurrentTime, oneSecond); //this will sent the interval in any of the functions- here I called the showcurrentTime function. I can also set it to the updateClock function. in which case I would have to put the showCurrentTime function inside the updateClock function to work. 

updateClock(); // now i'm calling the updateclock function


/*
let button= document.getElementById('partyTimeButton');
let isPartyTime= false;

let partyEvent= function(){
if (isPartyTime === false) {
    isPartyTime = true;
    time=partyTime;
    button.innerText='Party Over';
    button.style.backgroundColor='#222';
} else {
    isPartyTime= false;
    time=new Date().getHours();
    button.innerText='Party Time!';
    button.style.backgroundColor= 'pink';
}
};

button.addEventListener('click', partyEvent);


let wakeUpTimeSelector= document.getElementById('wakeUpTimeSelector');
let lunchTimeSelector= document.getElementById('lunchTimeSelector');
let napTimeSelector= document.getElementById('napTimeSelector');

let wakeUp= function() {
    wakeupTime=wakeUpTimeSelector.value;
}
let lunch= function() {
    lunchTime=lunchTimeSelector.value;
}

let nap= function() {
    napTime=napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUp);
lunchTimeSelector.addEventListener('change', lunch);
napTimeSelector.addEventListener('change', nap);

*/