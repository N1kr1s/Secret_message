class MessageMaker {
  constructor() {
    this.createMessage()
  }
  createMessage(): void {
    document
      .querySelector('form')!
      .addEventListener('submit', (e: Event): void => {
        e.preventDefault()
        this.changeFormVisibility()
        this.encrypt()
      })
  }
  encrypt(): void {
    const input = document.querySelector('#message-input') as HTMLInputElement
    const encrypted = btoa(input.value)
    const linkInput = document.querySelector<HTMLInputElement>('#link-input')
    linkInput!.value = `${window.location}#${encrypted}`
    linkInput!.select()
  }
  changeFormVisibility(): void {
    document
      .querySelector<HTMLDivElement>('#message-form')!
      .classList.add('hide')
    document
      .querySelector<HTMLDivElement>('#link-form')!
      .classList.remove('hide')
  }
}

const messageMaker = new MessageMaker()
