let email = 'gui@teste.com';

console.log(email);
console.log(`Seu email é ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('Clicarão no botão.');
}); 

document.querySelector('#form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está dentro do formulario');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse esta fora do formulario');
});

document.querySelector('.header-center').addEventListener('mouseenter', e => {
    console.log('Esta no header');
});

document.querySelector('#body').addEventListener('mouseenter', e => {
    console.log('Esta no body');
});

document.querySelector('#hcode').addEventListener('mouseenter', e => {
    console.log('Esta na img');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(`Seu email é ${email}`);
    console.log(`Sua senha: ${password}`);

    let json = {
        email,
        password

    };

    if (!email) {
        console.error('O campo email deve ser preenchido');
    } else if (!password) {
        console.error('O campo password deve ser preenchido');
    } else {
        console.info('Informações corretas');
    };
        
});