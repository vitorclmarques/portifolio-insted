//funçao dos botoes
function carPage(){
  window.location.href = 'curriculo.html';
}
function carPag(){
    window.location.href = 'index.html'
}
//efeito na home
// Função para mostrar os elementos quando estão no viewport
function showElements() {
    const elementsToShow = document.querySelectorAll('#animate');
  
    elementsToShow.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });
  }
  
  // Função para verificar se o elemento está no viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Adiciona um evento de scroll para mostrar os elementos quando estiverem no viewport
  window.addEventListener('scroll', showElements);
  
  // Mostra os elementos que já estão no viewport ao carregar a página
  showElements();
  
//funçao no curriculo
document.addEventListener('DOMContentLoaded', function() {
    const cabecalho = document.querySelector('.cabecalho');
  
    // Adiciona uma classe para realizar a animação
    cabecalho.classList.add('animar-cabecalho');
  });
document.addEventListener('DOMContentLoaded', function() {
    const cabecalho = document.querySelector('.apresentacao');
  
    // Adiciona uma classe para realizar a animação
    cabecalho.classList.add('animar-apresentacao');
  });  


