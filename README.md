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

### 💡 Detalhes da Primeira Aula

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
   
***

### 💡 Detalhes da Segunda Aula

Iniciando então a segunda aula, já vendo como lidar com as states do React no aplicativo e entender melhor o funcionamento de uma SPA ( Single Page Aplication ), além também de dar mais vida para o perfil do Alurakut.

1. Primeiramente importamos como component, a parte de baixo da sidebar do perfil, que ficou pendente na última aula. Lembrando que ele foi importado da pasta lib, onde tem grande parte dos components que vamos utilizar na Home do nosso perfil no Alurakut.

   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125725281-ac831827-e4cc-4e6f-8ed6-e45acac98b16.png' /></p>

Importando o component          |  Utilizando o component
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/67201210/125724642-d2c2a689-23e7-4e80-89b8-9ecc9b55157c.png)  |  ![image](https://user-images.githubusercontent.com/67201210/125724469-e1b00358-0d4f-475c-a69f-92ae3cafa7e6.png)

2. Agora com a finalização da sidebar, iremos adicionar um Formulário, para o usuário conseguir criar comunidades dentro do nosso app do Alurakut. Para isso vamos utilizar o component Box para sempre manter o nosso layout dentro dos padrões das outras sessões criadas, então vamos utilizar a seguinte sintaxe dentro do component Box;

   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125725787-5e7784de-484f-496d-9816-105f04f14bbe.png'/></p>
   
Utilizamos a própria tag form do HTML5, e dentro dele colocamos duas div, cada uma com um input dentro delas para o usuário colocar o nome da comunidade que desejar criar dentro do Alurakut, e o link da imagem que vai ser a foto de capa da comunidade.

3. Logo depois de adicionarmos o campo para criar uma comunidade, precisamos arrumar um lugar no nosso layout para deixarmos as comunidades e o perfil das pessoas que fazem parte delas. Para isso vamos dupllicar o nosso component Box que utilizamos para fazer a parte das pessoas, porém mudando alguns detalhes. E assim temos o seguinte resultado;

   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125726436-70bd3e59-d37d-4c5c-96f5-bc14da094034.png'/></p>
   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125726541-f1520dda-54b6-45c2-90cf-96d1053135ff.png'/></p>
   
4. Agora precisamos precisamos armazenar essas comunidades criadas pelo usuário em algum lugar. E agora precisamos utilizar as states do React, vamos começar criando uma state que ja vai ter uma comunidade criada, por padrão que por acaso seria uma muito conhecida na epoca do Orkut.

    <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125727498-95801fc1-0fc3-484d-82f1-0a862039cfb6.png'/></p>
    <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125727114-6e10a1ca-fbcb-4f70-980e-60efbadab0e2.png'/></p>

"Comunidades" vai ser a state inicial e o "setComunidades" vai ser a variável responsável por alterar a nossa state inicial (no nosso caso adicionando mais uma comunidade).
Como o usuário vai conseguir criar no máximo até seis comunidades, precisamos colocar as comunidades em um Array, e logo em seguida dentro de um objeto pois as comunidades vão precisar ter algumas características únicas, como por exemplo o ID de cada uma criada.

Agora vamos voltar no nosso form e adicionar uma funcionalidade do próprio JavaScript chamada onSubmit. Que basicamente quando o usuário clicar em criar comunidade, utilizando o nosso Button, esse onSubmit vai disparar uma função. Vamos ver a sintaxe da função e entender como ela vai funcionar.

   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125727943-a34c8f43-0387-4bb4-8deb-aa92fd2538ad.png'/></p>
   
Primeiramente vamos criar uma nova constante que vai ser os dadosDoForm, que vai ser responsável por pegar as informações digitadas pelo usuário lá nos inputs do nosso formulário, logo em seguida vamos criar uma outra constante responsável agora por armazenar essas informações coletadas pela nossa constante dadosDoForm. Com essas informações coletadas e armazenadas em uma nova constante, vamos criar uma última constante que vai unir, as comunidades que foram criadas pelo usuário no momento, e as comunidades que ele ja havia criado antes dessa.

Essa última constante vai ser responsável por unir a comunidade criada no momento, com as outras que já foram criadas, então demos o nome de comunidadesUtilizadas, que vai ser novamente um Array porém agora, juntando as comunidades ( que já tinham sido criadas anteriormente ) e a comunidade ( criada por último ). E por fim vamos dar um setComunidades, para atualizar o valor da nossa state responsável pelo armazenamento das nossas comunidades.

OBS: e.preventDefault(), seria uma função JavaScript para que quando o usuário clicar em criar comunidade, não deixar a página dar o refresh.

5. Após todas as comunidades armazenadas, precisamos mostrar elas no layout para o usuário. Então vamos utilizar a função Map, tambem nativa do JavaScript, onde ele vai percorrer o nosso Array de comunidade, e devolver para o usuário final o Array formatado do jeito que definirmos na hora de declarar, a sintaxe ficaria assim;

   <p align="center"><img src='https://user-images.githubusercontent.com/67201210/125728599-a182d979-43f4-447b-981b-f5c33199f2d2.png'/></p>

E para finalizar a segunda aula, como resultado final temos o seguinte layout;

   ![image](https://user-images.githubusercontent.com/67201210/125728684-66f70f2b-7a86-43af-b356-0342f5b46a5f.png)
   
***

### 💡 Detalhes da Terceira Aula

Iniciando a terceira aula já direto com a mão na massa! Entendemos um pouco mais sobre o funcionamento dos protocolos HTTP e requisições para utilizarmos a API do github diretamente no projeto da AluraKut.

1. Agora vamos colocar os nossos seguidores do GitHub como seguidores também do nosso Alurakut, e para isso vamos utilizar a API do GitHub utilizando o famoso 'fetch' do JavaScript para pegar as informações necessárias do GitHub que queremos que apareça no nosso Alurakut. Caso a nossa requisição para nossa API usando o fetch der certo, vamos usar o .then do próprio JavaScript que retorna uma promise. Após ele retornar a resposta do servidor, essa resposta vai vir em formato JSON, para converte-lá para um objeto JavaScript vamos utilizar novamente o .then, que nesse caso vai significar que se a primeira requisição chegou completa, vai passar por uma segunda requisição para ser convertida em um objeto JavaScript para conseguirmos setar ela na nossa useState.

Porém se fizermos isso sem "supervisão" ou sem deixa-lá assincrona com o React, ela vai ficar fazendo essa requisição do fetch infinitamente entrando em Loop e não queremos que isso aconteça, então vamos utilizar uma Hook nativa do React para ficar monitorando, caso essa requisição seja alterada e garantir que ela só será executada apenas se tiver algum tipo alteração do contrário será executada apenas uma única vez.

Sem utilizar o useEffect (ERRADO)          |  Utilizando com o useEffect (CORRETO)
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/67201210/125872279-a6819e8b-8d1a-4b86-b082-8bfc93798e23.png)  |  ![image](https://user-images.githubusercontent.com/67201210/125872184-b5eab59d-a4ee-4d41-a64d-3028edfcb223.png)


