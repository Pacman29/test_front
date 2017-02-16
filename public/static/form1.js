(function() {
  if (typeof window === 'object') {
    // import
    const Form = window.Form;

    const loginPage = document.querySelector('.js-login');
    const regPage = document.querySelector('.js-reg');

    const form = new Form({
      el: document.createElement('div'),
      data: {
        class: "my_singin_form",
        title: 'Авторизация',
        fields: [
          {
            name: 'login',
            type: 'text',
            placeholder: 'your name',
            required: true,
            class: 'my_input.username'
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            required: true,
            class: 'my_input.password'
          }
        ],
        controls: [
          {
            text: 'Вход',
            attrs: {
              type: 'submit',
              class: 'my_button'
            }
          },
          {
            text: 'Регистрация',
            attrs: {
              type: 'reset',
              class: 'my_button'
            }
          }
        ]
      }
    });


    form.on('submit', event => {
    });

    form.on('reset', event => {
      loginPage.hidden = true;
      regPage.hidden = false;
    });

    loginPage.appendChild(form.el);

    loginPage.hidden = false;
    regPage.hidden = true;
  }
})();
