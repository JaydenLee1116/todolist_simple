'use strict';

const inputDoing = document.querySelector('.input');
const btn = document.querySelector('.make__list__btn');
const body = document.querySelector('.wrapper__body');

btn.addEventListener('click', (e) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'lists');

  div.textContent = inputDoing.value
    ? inputDoing.value
    : '지우고 다시 입력해주세요.';
  inputDoing.value = '';

  const del = document.createElement('span');

  del.getAttribute('class', 'delete__list');
  del.textContent = 'X';
  div.append(del);
  body.append(div);

  if (del) {
    del.addEventListener('click', (e) => {
      body.removeChild(e.path[1]);
    });
  }
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const div = document.createElement('div');
    div.setAttribute('class', 'lists');

    div.textContent = inputDoing.value
      ? inputDoing.value
      : '지우고 다시 입력해주세요.';
    inputDoing.value = '';

    const del = document.createElement('span');

    del.getAttribute('class', 'delete__list');
    del.textContent = 'X';
    div.append(del);
    body.append(div);

    if (del) {
      del.addEventListener('click', (e) => {
        body.removeChild(e.path[1]);
      });
    }
  }
});

// del.addEventListener('click', (e) => {
//   body.removeChild(body.lastChild);
// });
