x = 0
y = 0
draw_circle = ""

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start(){
    document.getElementById("status").innerHTML="System is listening please tell the word circle . ";
    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML="the speech has been recognised as : "+content;
    if(content=="circle"){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started to draw a circle. ";
    draw_circle="set";
    }

    


}          

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        document.getElementById("status").innerHTML="Circle is drawn";
        circle(x,y,radius);
        draw_circle="";
    }
    }

    