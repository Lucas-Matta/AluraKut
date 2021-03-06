import React from 'react';
import { useState, useEffect } from 'react';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// Função para pegar a foto do o usuario do GitHub
function ProfileSidebar(props){
  return(
    <Box as="aside">
        <img style={{ borderRadius: '8px' }} src={`https://github.com/${props.githubUser}.png`} />
        <hr />

        <p> 
          <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
            @{props.githubUser}
          </a>
        </p>

        <hr/>

        <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

// Função para buscar os seguidores do GitHub
function ProfileRelationsBox(props){
  return(
    <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {props.title} ({props.items.length})
        </h2>
        <ul>
          {props.items.map(() => {
            <li>
              <img src={`avatar_url`} />
            </li>
          })}
        </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const githubUser = 'Lucas-Matta';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev'];
  const [comunidades, setComunidades] = useState([]);
  
  const [seguidores, setSeguidores] = useState([{}]);

  useEffect(() => {
    fetch('https://api.github.com/users/Lucas-Matta/followers')
  
    // Vai transformar a resposta em JSON
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    // Vai converter para Objeto JavaScript
    .then((respostaCompleta) => {
      setSeguidores(respostaCompleta);
      console.log(seguidores);
    })

    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': 'ed3aab91a79f33f54dc9044ef6d072',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          title
          id
          imageUrl
          creatorSlug
        }
      }` })
    })

    .then((resp) => resp.json()) // Pega o retorno do response.json() e ja retorna
    .then((resp) => {
        const comunidadesDato = resp.data.allCommunities;

        setComunidades(comunidadesDato);
    })

  }, [])

  return(
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
            <Box>
                <h1 className="title">
                    Bem Vindo(a) {githubUser}
                </h1>

                <OrkutNostalgicIconSet />
            </Box>
            <Box>
                <h2 className="subTitle">O que voce deseja fazer?</h2>
                <form onSubmit={(e) => {
                      e.preventDefault();

                      if(comunidades.length >= 6 ){
                        alert('Ops! Voce só pode criar 6 comunidades')
                        return;
                      } else {
                        const dadosDoForm = new FormData(e.target);

                        const comunidade = {
                          id: new Date().toISOString(),
                          title: dadosDoForm.get('title'),
                          image: dadosDoForm.get('image'),
                        }

                        const comunidadesAtualizadas = [...comunidades, comunidade];
                        setComunidades(comunidadesAtualizadas);
                      }
                }}>
                    <div>
                        <input placeholder="Qual o nome da sua comunidade?"
                               aria-label="Qual o nome da sua comunidade?"
                               name="title"
                               type="text"
                               required
                          />
                    </div>

                    <div>
                        <input placeholder="Coloque uma URL para usarmos como capa"
                               aria-label="Coloque uma URL para usarmos como capa"
                               name="image"
                               type="text"
                               required
                          />
                    </div>

                    <button>
                        Criar comunidade
                    </button>
                </form>
            </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

            <ProfileRelationsBox items={seguidores} title="Seguidores" />

            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Comunidades ({comunidades.length})
                </h2>
            
                <ul>
                    {comunidades.map((itemAtual) => {
                      return(
                        <li  key={itemAtual.id} >
                            <a href={`/communities/${itemAtual.id}`}>
                                <img src={itemAtual.imageUrl} />
                                <span>{itemAtual.title}</span>
                            </a>
                        </li>
                      )
                    })}
                </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Pessoas da Comunidade ({pessoasFavoritas.length})
                </h2>

                <ul>
                    {pessoasFavoritas.map((githubUser) => {
                        return(
                          <li key={githubUser}>
                              <a href={`${githubUser}`}>
                                  <img src={`https://github.com/${githubUser}.png`} />
                                  <span>{githubUser}</span>
                              </a>
                          </li>
                        )
                    })}
                </ul>
            </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
