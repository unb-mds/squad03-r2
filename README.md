# Licital

## Instruções para executar o projeto

1 - Você precisa ter o node instalado em sua máquina (https://nodejs.org/en/download)

2 - Após efetuar o git clone do projeto em sua máquina, é necessário rodar alguns comandos no terminal powershell dentro do projeto:

- npm install --f
- npm install -g @angular/cli
- Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

## Como rodar o projeto localmente?

Para testar suas alterações localmente, basta inserir o comando "ng serve --open" no terminal que será executado o projeto 

## Como faço para subir minhas alterações para a pagina do firebase?

Para subir o projeto para produção é necessário primeiro efetuar o comando "ng build --configuration production" e, logo após, o comando "firebase deploy". Assim, suas alterações já estarão na página principal do App
