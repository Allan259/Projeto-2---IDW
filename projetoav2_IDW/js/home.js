function verificarLogin() {
    const logado = localStorage.getItem('logado');

    if (!logado) {
        window.location.href = 'login.html'; 
    } else {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        document.querySelector('.container span').innerText = `Seja Bem vindo, ${usuario.nome}!`;
        document.querySelector('.container span:nth-child(2)').innerText = `Seu email é: ${usuario.email}`;

        const animesFavoritos = usuario.favoritos;
        const cardsDiv = document.querySelector('.cardsdiv');
        cardsDiv.innerHTML = '';

        animesFavoritos.forEach(favorito => {
            const divCard = document.createElement('div');
            divCard.classList.add('cards');

            const img = document.createElement('img');
            img.src = `../assets/${favorito.toLowerCase()}.jpg`;
            img.alt = favorito;

            const span = document.createElement('span');
            span.innerText = favorito;

            divCard.appendChild(img);
            divCard.appendChild(span);
            cardsDiv.appendChild(divCard);
        });
    }
}

function logout() {
    localStorage.removeItem('logado');
    window.location.href = 'login.html'; 
}

document.querySelector('button').addEventListener('click', logout);


verificarLogin();
