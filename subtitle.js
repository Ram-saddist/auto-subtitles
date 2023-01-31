const texts = document.querySelector(".texts");
let bstop=true
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement("p");
p.setAttribute("class","textRead")
recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  p.innerText = text;
});

  recognition.addEventListener("end", () => {
    if(bstop==true){
      recognition.start();
    }
    else if(bstop==false){
      recognition.abort()
    }
  });

function startConvertion(){
    recognition.start();
}
function stopConvert(){
    bstop=false
    recognition.abort();
    textData()
}
function textData()
{
  let textRead=document.querySelector(".textRead").innerHTML
  console.log(textRead)
  console.log("from text data funtion")
  const link = document.createElement("a");
  // Create a blog object with the file content which you want to add to the file
  const file = new Blob([textRead], { type: 'text/plain' });

  // Add file content in the object URL
  link.href = URL.createObjectURL(file);

  // Add file name
  link.download = "finalText.txt";

  // Add click event to <a> tag to save file.
  link.click();
  URL.revokeObjectURL(link.href);
}