'use strict';

const costBtnEl = document.querySelector('.js-costbtn');
const listEl = document.querySelectorAll('.js-costLists');
const costCloseBtnEl = document.querySelector('.js-costModalCloseMob');

const onCostBtnClick = () => {
  for (let i = 0; i < listEl.length; i++) {
    listEl[i].classList.add('fade-anim');
  }
}

const onCostBtnCloseClick = () => {
  for (let i = 0; i < listEl.length; i++) {
    listEl[i].classList.remove('fade-anim');
  }
}


costCloseBtnEl.addEventListener('click',onCostBtnCloseClick);
costBtnEl.addEventListener('click',onCostBtnClick );