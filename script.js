function showMessage() {
    var paragraph = document.createElement('p');
    var elBody = document.getElementById('main');
    
    paragraph.setAttribute('id', 'newMessage');
    paragraph.innerText = 'Você clicou no botão "OK" e criou uma nova menssagem';

    if(document.querySelector('#main #newMessage')){
        document.querySelector('#main #newMessage').remove();
        elBody.appendChild(paragraph);
    }else {
        elBody.appendChild(paragraph);
    }
}