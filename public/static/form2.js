/* global document */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Request" }]*/

(function() {
  if (typeof window === 'object') {
    const Form = window.Form;
    const regPage = document.querySelector('.js-reg');
    const loginPage = document.querySelector('.js-login');

    const formReg = new Form({
      el: document.createElement('div'),
      data: {
        class: "my_singin_form",
        title: 'Регистрация',
        fields: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'e-mail',
            required: true
          },
          {
            name: 'login',
            type: 'text',
            placeholder: 'your login',
            required: true
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            required: true
          }
        ],
        controls: [
          {
            text: 'Отправить',
            attrs: {
              type: 'submit',
              class: 'my_button'
            }
          },
          {
            text: 'Уже зарегистрирован',
            attrs: {
              type: 'reset',
              class: 'my_button'
            }
          }
        ]
      }
    });
    formReg.on('submit', event => {
      event.preventDefault();

      const formData = formReg.getFormData();
      /*eslint-disable */
      if (result.status === 400) {
        window.alert("Такой пользователь уже существует(");
      } else {
        window.alert("Вы зарегистрированы!");
        const Request = JSON.parse(result.responseText);
        regPage.hidden = true;
        /*eslint-enable */
      }
    });
    formReg.on('reset', event => {
      loginPage.hidden = false;
      regPage.hidden = true;
    });
    regPage.appendChild(formReg.el);
    regPage.hidden = false;
  }
})();
