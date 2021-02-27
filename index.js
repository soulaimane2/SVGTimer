const startBtn = document.getElementById("start");
const time = document.getElementById("duration");
const stopBtn = document.getElementById("pause");


const circle = document.querySelector('circle');


let timing = parseInt(time.value);

const timer = new Timer(startBtn,stopBtn,circle,5);