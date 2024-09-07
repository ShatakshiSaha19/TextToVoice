let speech=new SpeechSynthesisUtterance();

let voices =[];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
  voices=window.speechSynthesis.getVoices();/*will provide all voices available in the device */
  speech.voice=voices[0];/*by default it will speak in the first voice available in the device */
  voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));

};
document.querySelector("button").addEventListener("click",()=>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
})
voiceSelect.addEventListener("change",()=>{
  speech.voice=voices[voiceSelect.value];
})