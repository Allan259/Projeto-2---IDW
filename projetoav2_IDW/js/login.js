function loginUsuario(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[placeholder="Digite seu e-mail"]').value;
    const senha = document.querySelector('input[placeholder="Digite sua senha"]').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert('Login realizado com sucesso!');
        localStorage.setItem('logado', true); 
        window.location.href = 'home.html';
    } else {
        alert('E-mail ou senha incorretos!');
    }
}

document.querySelector('form.entry').addEventListener('submit', loginUsuario);
