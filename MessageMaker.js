"use strict";
class MessageMaker {
    constructor() {
        this.decode();
        this.createMessage();
    }
    createMessage() {
        document
            .querySelector('form')
            .addEventListener('submit', (e) => {
            e.preventDefault();
            this.changeFormVisibility();
            this.encrypt();
        });
    }
    encrypt() {
        const input = document.querySelector('#message-input');
        const encrypted = btoa(input.value);
        const linkInput = document.querySelector('#link-input');
        linkInput.value = `${window.location}#${encrypted}`;
        linkInput.select();
    }
    changeFormVisibility() {
        document
            .querySelector('#message-form')
            .classList.add('hide');
        document
            .querySelector('#link-form')
            .classList.remove('hide');
    }
    decode() {
        const { hash } = window.location;
        const message = atob(hash.replace('#', ''));
        if (message) {
            document
                .querySelector('#message-form')
                .classList.add('hide');
            document
                .querySelector('#message-show')
                .classList.remove('hide');
            document.querySelector('h1').innerText = message;
        }
    }
}
const messageMaker = new MessageMaker();
