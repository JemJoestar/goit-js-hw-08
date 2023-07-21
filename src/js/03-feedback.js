import _ from 'lodash';

const form = document.querySelector('form');
const submitBtn = form.querySelector("button")

const data = {
  email: "",
  message:  "",
  
  setData() {
    const emailEl = document.querySelector("input[name='email']");
    const messageEl = document.querySelector("textarea[name='message']");
  
    messageEl.value = this.message;
    emailEl.value = this.email;
  }
}

try{
  data.email = JSON.parse(localStorage.getItem("feedback-form-state")).email
  data.message =  JSON.parse(localStorage.getItem("feedback-form-state")).message
}catch(error){

}



data.setData();

form.addEventListener('input', onInput);

function onInput(event) {
  const emailEl = form.querySelector("input")
  const messageEl = form.querySelector("textarea")
  data.email = emailEl.value
  data.message = messageEl.value
  localStorage.setItem("feedback-form-state", JSON.stringify(data))
  
}

submitBtn.addEventListener("click", onClick)

function onClick(event){
  event.preventDefault()

  form.reset()
  localStorage.removeItem("feedback-form-state")
}