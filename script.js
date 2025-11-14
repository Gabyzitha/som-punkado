// ao clicar na area-disco, o usuário é redirecionado a outra página

document.querySelectorAll('.area-disco').forEach(card => {  //seleciona todos que tem a classe .area-disco
  card.addEventListener('click', () => { //ouve o click (evento)
    const link = card.getAttribute('data-link'); //pega o valor atribuido ao data-link
    window.location.href = link; //redireciona
  });
});
