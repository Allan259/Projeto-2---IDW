function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.querySelector('input[placeholder="Digite seu nome"]').value;
    const email = document.querySelector('input[placeholder="Digite seu e-mail"]').value;
    const senha = document.querySelector('input[placeholder="Digite sua senha"]').value;

    // Obtendo os animes favoritos
    const favoritos = [];
    document.querySelectorAll('.favorites input:checked').forEach(checkbox => {
        favoritos.push(checkbox.id);
    });

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const usuario = {
        nome,
        email,
        senha,
        favoritos
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}

document.querySelector('form.entry').addEventListener('submit', cadastrarUsuario);
