//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()

function handleSubmit(event){
    event.preventDefault();
} 

window.onload= function(){
    const buttonSubmit = document.querySelector('#buttonSubmit');
    buttonSubmit.addEventListener('click', handleSubmit);
};

//criar botão para apagar as informaçoes

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  window.onload = function () {
    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#buttonSubmit');
    submitBtn.addEventListener('click', handleSubmit);
  };