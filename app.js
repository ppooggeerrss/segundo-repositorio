function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta,resposta)

    let flashcard = Document.getElementById ('flashcard');
    let cartao = document.createElement ('article');

    cartao.className = 'cartao';

cartao.innerHTML = `
      <div class="cartao__conteudo">
               
             <h3>Missão</h3>
            
             <div class="cartao__conteudo__pergunta">
                <p>saiba qual e a missão de nossa empresa!</p>
                </div>
            
             <div class="cartao__conteudo__resposta">
                <p>nossa missão é criar jogos e aplicativos</p>
                </div>
            
            </div>
`
flashcard.appendChield(cartao);

}