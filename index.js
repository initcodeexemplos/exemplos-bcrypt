const bcrypt = require('bcrypt')

// bcrypt.hash 
// Responsável por gerar a senha criptografada
// Quando usar: Salvar hash no banco, não retornar pro usuário NUNCA.

// bcrypt.compare 
// Responsável por comparar a senha inserida com a senha criptografada
// Quando usar: Usar no login após buscar usuário no banco de dados.

async function cadastroUsuario(senha) {
    const hash = await bcrypt.hash(senha, 10)
    console.log(senha, hash)
    return hash
}

async function loginUsuario(senha, hashSenha) {
    return bcrypt.compare(senha, hashSenha)
}

async function fluxoUsuario() {
    const hash = await cadastroUsuario("123456");
    const loginCerto = await loginUsuario("123456", hash);
    const loginErrado = await loginUsuario("batata", hash);
    console.log(loginCerto, loginErrado)
}

fluxoUsuario()