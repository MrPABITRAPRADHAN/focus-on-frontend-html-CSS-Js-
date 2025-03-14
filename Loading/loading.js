let progress = document.querySelector('.progress');
let heading = document.querySelector('.per');

let width = 1;
let f1 = setInterval(calculateF, 10)

function calculateF() {
   if(width >=100){
      clearInterval(f1);
   }else{
     width++;
     progress.style.width = width + '%';
     heading.textContent = width + '%';
     console.log(width)
   }
}
