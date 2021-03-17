let meuBotao = document.querySelector('button.user');
let meuCabecalho = document.querySelector('li.aa');
meuBotao.onclick =  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Welcome, ' + meuNome;
    }
  }

  let time = 5000;
  let currentImageIndex = 0;
  let images = document.querySelectorAll("div.slider img");
  let max = images.length;


  function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected"),

    currentImageIndex++;

    if(currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)


console.log(images);
  

  