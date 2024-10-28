Projeto de Cadastro de Usuários com React e React Router

Este projeto é uma aplicação de cadastro de usuários desenvolvida com React, permitindo adicionar, visualizar e deletar registros de usuários. A aplicação utiliza axios para realizar chamadas a uma API local e react-router-dom para navegação entre as páginas.

Estrutura do Projeto
A estrutura do projeto está organizada em pastas para facilitar o desenvolvimento e manutenção:

assets: recursos de mídia e ícones
components: componentes reutilizáveis como Button e TopBackground
pages: páginas principais da aplicação (Home e ListUsers)
services: configuração do serviço de API usando axios
styles: arquivos de estilização global e componentes estilizados
App.js: configuração principal do projeto
router.js: configuração das rotas da aplicação
Principais Arquivos e Componentes


1. Home.js
Esta página contém o formulário para cadastro de novos usuários, com campos para nome, idade e e-mail, utilizando referências (useRef) para capturar os valores dos inputs. Ao submeter o formulário, a função registerNewUser envia os dados para o backend usando o método POST da API.

Componentes: Title, Container, Form, Input, InputLabel, Button
Função: registerNewUser para enviar dados do usuário
Navegação: navega para a página ListUsers ao clicar em "Ver lista de Usuários"


2. ListUsers.js

A página ListUsers lista todos os usuários cadastrados, com opções para visualização e exclusão. Utiliza useEffect para buscar os dados da API e armazená-los em um useState. A função deleteUser permite remover um usuário da lista sem recarregar a página.

Componentes: ContainerUsers, CardUsers, AvatarUsers, TrashIcon, Button
Função: getUsers para buscar dados e deleteUser para excluir
API: GET para obter dados dos usuários e DELETE para removê-los

3. api.js
Configuração do Axios para comunicação com o backend, definindo uma baseURL para facilitar as chamadas de API.

4. router.js

Configura as rotas usando createBrowserRouter do React Router v6. Possui duas rotas principais:

rota para a página Home
lista-de-usuarios: rota para a página ListUsers

5. Button.js
Um componente reutilizável de botão com propriedades de tema e estilo, usado em várias partes da aplicação para garantir consistência no layout.



Lógica de Programação
Cadastro de Usuários: A página Home permite o cadastro através de um formulário com três campos. A função registerNewUser usa axios.post para enviar dados à API.
Listagem de Usuários: A página ListUsers exibe todos os usuários cadastrados usando useEffect para buscar os dados com axios.get.
Deleção de Usuários: A função deleteUser realiza uma chamada DELETE na API e remove o usuário da lista local.
Navegação entre Páginas: Utiliza useNavigate para redirecionamento sem recarregar a página, criando uma navegação mais rápida.
Estilos e Responsividade
A aplicação utiliza variáveis de CSS e estilos responsivos para manter um design consistente e adaptável a diferentes dispositivos.



Tecnologias Utilizadas

React para a interface de usuário
React Router para navegação entre páginas
Axios para comunicação com a API
Styled Components para estilização de componentes

Como Executar o Projeto
Para rodar o projeto localmente, instale as dependências com npm install e inicie o servidor com npm start. A API deve estar rodando em http://localhost:3000 para que a aplicação funcione corretamente.

Considerações
Este projeto é um exemplo simples de aplicação de cadastro de usuários e pode ser expandido com funcionalidades adicionais, como validação de dados, autenticação ou integração com APIs externas para uma maior complexidade.
