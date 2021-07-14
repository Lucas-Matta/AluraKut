# *_<p align="center">Alurakut</p>_*

### 📋 Sobre o projeto (projeto em desenvolvimento)

O Alurakut é um aplicativo desenvolvido na semana da Imersão React 3A edição, da Alura. O projeto consiste em recriar a falecida e famosa rede social, o Orkut utilizando como base de dados o GitHub para criar um perfil, adicionar amigos, criar comunidades, etc...

***

### 💻 Tecnologias Utilizadas até o momento

* React
* NextJS
* Styled Components
* JavaScript

***

### 💡 Detalhes da primeira aula

Na primeira aula, já começamos vendo um pouco de teoria sobre o React components e styled-components que vão ser as tecnologias necessárias para dar vida ao projeto. Também entendemos como o React se tornou tão popular no mercado de tecnologia e como iniciar o processo de aprendizagem da ferramente.

1. Começamos então criando o nosso documento para trabalhar em cima do projeto com o comando;

        yarn create next-app --example with-styled-components

* Para criar o projeto já estruturado com o NextJS e o styled-components. Logo de inicio já organizamos as pastas do projetos, onde vão ficar as pages e os components, que utilizaremos em vários pontos da aplicação do Alurakut e criarmos também os primerios tres components, que vão começar a dar vida para o projeto.

    ![image](https://user-images.githubusercontent.com/67201210/125686743-081372bf-2cfd-4aa9-962b-2e83512987bd.png)
    
Component Box, vai ser os divisores principais do Alurakut que vai fazer a separação principal do nosso aplicativo. Component MainGrid, vai ser o grid layout, onde estamos posicionando as Box components. ProfileRelations, seria a Box responsável pelas pessoas da comunidade que tem adicionado no perfil do Alurakut.

   ![image](https://user-images.githubusercontent.com/67201210/125687823-1e2c5ad6-5ea3-43b8-97c5-e88dd69cb197.png)

2. Importamos o lib, onde está alguns dos nossos components que precisaremos usar em outras páginas da aplicação, juntamente com os respectivos estilos que estamos usando os styled-components para cuidar da camada de estilo da nossa aplicação, como por exemplo o menu da aplicação.

   ![image](https://user-images.githubusercontent.com/67201210/125688729-82dc50b8-8772-4db0-b53b-ee1492c46f15.png)
   ![image](https://user-images.githubusercontent.com/67201210/125688642-c6c720cd-3cd3-48d3-9b8b-a2f658657f36.png)
  
3. Após isso realizamos alguns ajustes no css da página Home do projeto utilizando propriedades do css grid-layout. Importamos os components e adicionamos também uma função para buscar a foto dos usuários adicionados na comunidade do Alurakut no GitHub. Logo após isso adicionamos uma sessão na Home, onde o JavaScript vai fazer um Map desses usuários, e retorna para o usuário final.

   ![image](https://user-images.githubusercontent.com/67201210/125690473-78a826df-2396-4ae2-8582-e65838cb3491.png)
   ![image](https://user-images.githubusercontent.com/67201210/125690521-cdd71bb9-3b65-4563-b541-f2f22ca1035d.png)



