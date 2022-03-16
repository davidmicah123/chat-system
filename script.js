'Use Strict';

let text_display = document.querySelector('body .display_here'),
    send = document.querySelector('body .send'),
    chat = document.querySelector('body .chat_area');

send.addEventListener('click', (e)=>{
    e.preventDefault();
    text_display.innerHTML = ` ${chat.value}`;
    send = "";
})