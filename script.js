const primeiraCor = document.getElementsByClassName('color')[0];
primeiraCor.style.backgroundColor = 'black';
const segundaCor = document.getElementsByClassName('color')[1];
segundaCor.style.backgroundColor = 'blue';
const terceiraCor = document.getElementsByClassName('color')[2];
terceiraCor.style.backgroundColor = 'red';
const quartaCor = document.getElementsByClassName('color')[3];
quartaCor.style.backgroundColor = 'green';



function selecionarCor() {
  let classSelected = document.getElementsByClassName('color');
  for (let index = 0; index < classSelected.length; index += 1) {
    classSelected[index].addEventListener('click', elementClick);
  }
}

function elementClick(event) {
  let classSelected = document.getElementsByClassName('color');
  console.log(classSelected);
  for (let index = 0; index < classSelected.length; index += 1) {
    classSelected[index].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

selecionarCor();

function pixel () {
    let pixelClick = document.getElementsByClassName ('pixel');
        for (let index = 0; index < pixelClick.length; index += 1) {
          pixelClick[index].addEventListener ('click',pixelColor);
        }
    }
       pixel();

   function pixelColor (event) {
     let pixelClick = document.getElementsByClassName ('pixel');
     console.log('teste');
     // pixelClick.addEventListener ('click', function ()){
     let selectColor = document.querySelector('.selected');
     let colorstyle = selectColor.style.backgroundColor;
          event.target.style.backgroundColor = colorstyle;

       } 

   