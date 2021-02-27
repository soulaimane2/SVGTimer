class Timer{
    constructor(startElement,stopElement,circle,timing){
        this.startElement = startElement;
        this.stopElement = stopElement;
        this.circle = circle;

        this.circle.setAttribute('stroke-dasharray', 150*Math.PI*2);
        this.circle.setAttribute('stroke-dashoffset', 0);



        this.time = document.getElementById("duration");
        this.time.value = timing;
        this.duration = this.time.value;


        
        startElement.addEventListener('click',this.start);
        stopElement.addEventListener('click',this.stop);
    }

    start = () => {
        this.interval = setInterval(this.tick,20);
    }

    stop = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        let timing = parseFloat(this.time.value);
        const cr = this.duration;
        timing = timing - 0.02;
        this.time.value = timing.toFixed(2);
        if(timing <= 0) clearInterval(this.interval);

        /**Circle */

        let circle_Count = this.circle.getAttribute('stroke-dashoffset');
        //circle_Count = parseFloat(circle_Count) - ((150 * Math.PI * 2) / 30);
        
        circle_Count = (150 * Math.PI * 2) * timing / cr -  (150 * Math.PI * 2);
        
        this.circle.setAttribute('stroke-dashoffset',circle_Count);
        
        console.log(cr);

    }   
}
