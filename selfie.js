pic_name = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
Textbox = document.getElementById("textbox");

function start(){
 Textbox.innerHTML = "";
 recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    transcript = event.results[0][0].transcript;
    Textbox.innerHTML = transcript;
}


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
Textbox = document.getElementById("textbox");

function start(){
 Textbox.innerHTML = "";
 recognition.start();
}
recognition.onresult = function (event){
    console.log(event);
    transcript = event.results[0][0].transcript;
    Textbox.innerHTML = transcript;
    if (Textbox.innerHTML == "take my selfie"){
        speak();
    }
}
function speak(){
    var synth = "Taking your selfie in 5 seconds";
    var SpeakSynthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(synth);
    SpeakSynthesis.speak(utterance);
    
    Webcam.attach(camera); 
    setTimeout(function(){
        take_pic();
        save();    
    },5000);
}
function submit(){
    pic_name = document.getElementById("name").value;
    if (pic_name == ""){
        pic_name = "My-selfie.png";
    }
}

function take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="snapshot" src="'+data_uri+'"></img>';
    })
}
function save(){
    console.log(pic_name);
    my_link = document.getElementById("link");
    console.log(my_link);
    img = document.getElementById("snapshot").src;
    my_link.href = img;
    my_link.download = pic_name + ".png";
    link.click();
}
