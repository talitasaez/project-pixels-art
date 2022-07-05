const primeiraCor = document.getElementsByClassName('color')[0];
primeiraCor.style.backgroundColor = 'black';
const segundaCor = document.getElementsByClassName('color')[1];
segundaCor.style.backgroundColor = 'blue';
const terceiraCor = document.getElementsByClassName('color')[2];
terceiraCor.style.backgroundColor = 'red';
const quartaCor = document.getElementsByClassName('color')[3];
quartaCor.style.backgroundColor = 'green';

//let colorblack = document.querySelector('div');
//colorblack.classList.add ('selected');

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
