X = 0;
Y = 0;

draw_circle = "";
draw_rectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening. Please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as: " + content;

    if(content == "circle")
    {
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rectangle = "set";
    }
    
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(X, Y, radius);
        document.getElementById("status").innerHTML = "circle is drawn";
        draw_circle = "";
    }
    if(draw_rectangle == "set")
    {
        rect (X, Y, 70, 50);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rectangle = "";
    }
}