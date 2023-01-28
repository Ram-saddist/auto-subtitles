const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  /*if (e.results[0].isFinal) {
    p = document.createElement("p");
  }*/
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
function stopConvert(){
  recognition.stop();
  console.log("stop the action")
}
/*
const texts=document.querySelector(".texts")

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result",(e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
  }
})

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

function stopConvert(){
  recognition.stop();
}*/