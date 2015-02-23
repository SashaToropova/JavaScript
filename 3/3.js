function showError(container, errorMessage) {
  container.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  container.className = '';
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
  }
}

function validate(form) {
  var elems = form.elements;

  resetError(elems.fullname.parentNode);
  if (!elems.fullname.value)  {
    showError(elems.fullname.parentNode, 'Заполните ФИО');
  }

  resetError(elems.password.parentNode);
  if (!elems.password.value) {
    showError(elems.password.parentNode, ' Укажите пароль.');
  } else if (elems.password.value != elems.password2.value) {
    showError(elems.password.parentNode, ' Пароли не совпадают.');
  }

  resetError(elems.to.parentNode);
  if (!elems.to.value) {
    showError(elems.to.parentNode, ' Укажите город');
  }

  resetError(elems.about.parentNode);
  if (!elems.about.value) {
    showError(elems.message.parentNode, ' Отсутствует текст.');
  }

}
