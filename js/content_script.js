document.addEventListener('DOMContentLoaded', function() {

    // создаем хост элемент для Shadow DOM
    const div = document.createElement('div'); 

    // создаем shadow DOM 
    const shadowRoot = div.attachShadow({mode: 'open'});

    // создаем модальное окно в shadow DOM 
    shadowRoot.innerHTML = '<h1 id="modal_form" style="display:none; border: 2px solid red;">Modal</h1>';

    // добавляем хост элемент в оригинальный DOM (document)
    document.body.appendChild(div);

    window.addEventListener('keydown', e => {
         if(e.keyCode === 76 ){ // "l" - key

            // показываем модальное окно
            // обратите внимание что здесь используется "shadowRoot"
            shadowRoot.querySelector('#modal_form').style.display = "block";
          }
    });
});

window.addEventListener('keydown', e => {
    if(e.keyCode === 76 ){ // "l" - key

       // показываем модальное окно
       // обратите внимание что здесь используется "shadowRoot"
       shadowRoot.querySelector('#modal_form').style.display = "block";
     }
});

