'use strict'

const modalWrapElem = document.querySelector('.js-modal');

const orderBtnElem = document.querySelector('.js-order-btn');
const orderCloseElem = document.querySelector('.js-orderModalClose');
const orderModalElem = document.querySelector('.js-orderModal');

const commModalElem = document.querySelector('.js-commModal');
const commCloseElem = document.querySelector('.js-commModalClose');
const commBtnElem_1 = document.querySelector('.js-headCommBtn');
const commBtnElem_2 = document.querySelector('.js-footCommBtn');
const commPhoneElem = document.querySelector('.js-phoneIcon');

const costBtnElem = document.querySelector('.js-costbtn');
const costCloseElem = document.querySelector('.js-costModalClose');
const costModalElem = document.querySelector('.js-costModal');
const costCloseMobElem = document.querySelector('.js-costModalCloseMob');

const aboutBtnElem = document.querySelector('.js-aboutBtn');
const aboutCloseElem = document.querySelector('.js-aboutModalClose');
const aboutModalElem = document.querySelector('.js-aboutModal');

const onBtnToggleModal = (wrap,modal) => {
  wrap.classList.toggle('hide');
  wrap.classList.toggle('visible-transform');
  modal.classList.toggle('hide');
  modal.classList.toggle('visible-block');
  if (wrap.matches('.visible-transform')) {
    disableScroll();
  }
  else {
   enableScroll(); 
  }
}

commCloseElem.addEventListener('click',
() => onBtnToggleModal(modalWrapElem,commModalElem));
commBtnElem_1.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,commModalElem));
commBtnElem_2.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,commModalElem));
commPhoneElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,commModalElem));
orderBtnElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,orderModalElem));
orderCloseElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,orderModalElem));
costBtnElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,costModalElem));
costCloseElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,costModalElem));
costCloseMobElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,costModalElem));
aboutBtnElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,aboutModalElem));
aboutCloseElem.addEventListener('click', 
() => onBtnToggleModal(modalWrapElem,aboutModalElem));
