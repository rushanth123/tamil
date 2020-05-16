const audio = [
    { audioSrc:"src/Thangame.mp3",
  imageSrc:"src/mango.jpg",
  tamil:"1111",
  pronunciation:"Palam",
  english:"Fruit"
},  
 
 { audioSrc:"src/Thangame.mp3",
  imageSrc:"src/r1.jpg",
  tamil:"2222",
  pronunciation:"Palam",
  english:"Fruit"
},
{
  audioSrc:"src/Thendral-Vanthu.mp3",
  imageSrc:"src/r2.jpg",
  tamil:"33333",
  pronunciation:"Palam2",
  english:"Fruit2"
},
{
  audioSrc:"src/Yaaro-Arivaal.mp3",
  imageSrc:"src/r3.jpg",
  tamil:"44444",
  pronunciation:"Palam3",
  english:"Fruit3"
}
]

var i = 0 ;

function mySlide(param)
          {
              if(param === 'next')
              {
                  i++;
                  if(i === audio.length){ i = audio.length - 1; }
              } else{
                  i--;
                  if(i < 0){ i = 0; } 
              }
                     
           document.getElementById("player").setAttribute('src', audio[i].audioSrc);
           document.getElementById("img").src = audio[i].imageSrc;
           document.getElementById("tamil").innerHTML =audio[i].tamil
           document.getElementById("pronunciation").innerHTML =audio[i].pronunciation
           document.getElementById("english").innerHTML =audio[i].english 
           
          if (i==audio.length - 1) {    
            document.getElementById('next').classList.add("hide")  
          } 
          else if (i==0) {
            document.getElementById('back').classList.add("hide")
          }
           else if (i!=audio.length - 1 || i!=0 )  {
            document.getElementById('next').classList.remove("hide")
            document.getElementById('back').classList.remove("hide")
          }     
}
