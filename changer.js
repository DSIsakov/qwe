function ClearBody(){
    document.getElementsByTagName("body")[0].innerHTML=""
}
function CreateBody(){
    document.body =document.createElement("body");
}
function AddGif(url,element){
    img = document.createElement("img")
    img.src=url
    element.appendChild(img)
    return img
}
function CreateMusic(){
    audio = document.createElement("audio")
    audio.autoplay=true
    audio.preload="auto"

    
    audio.load()
    audio.src = "https://github.com/DSIsakov/qwe/blob/main/НЮХАЙ%20БЕБРУ%20разными%20голосами.mp3"
    document.body.appendChild(audio)
  
    audio.addEventListener("load", function() {
       audio.play();
   }, true);
}

ClearBody()
CreateBody()

const canvas = document.createElement("canvas")
canvas.style.position="relative"

document.body.appendChild(canvas)
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
function matrix ()
{

  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });

}

setInterval(matrix, 200);
gifka = AddGif("https://c.tenor.com/4gPD1ccxrVgAAAAC/rick-ashley-dance.gif",document.body)
CreateMusic()
CreateMusic()
