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

export default function Home() {
  const githubUser = 'Lucas-Matta';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev'];
  const [comunidades, setComunidades] = useState([{
        id: '32146541351534155432',
        title: 'Eu odeio acordar cedo',
        image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

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
                    Bem Vindo(a)
                </h1>

                <OrkutNostalgicIconSet />
            </Box>
            <Box>
                <h2 className="subTitle">O que voce deseja fazer?</h2>
                <form onSubmit={ function handleSubmit(e){
                      const dadosDoForm = new FormData(e.target);

                      const comunidade = {
                        id: new Date().toISOString(),
                        title: dadosDoForm.get('title'),
                        image: dadosDoForm.get('image'),
                      }

                      e.preventDefault();
                      const comunidadesAtualizadas = [...comunidades, comunidade];
                      setComunidades(comunidadesAtualizadas);
                }}>
                    <div>
                        <input placeholder="Qual vai ser o nome da sua comunidade?"
                                name="title"
                                aria-label="Qual vai ser o nome da sua comunidade?"
                                type="text"
                          />
                    </div>

                    <div>
                        <input placeholder="Coloque uma URL para usarmos como capa"
                                name="image"
                                aria-label="Coloque uma URL para usarmos como capa"
                                type="text"
                          />
                    </div>

                    <button>
                        Criar comunidade
                    </button>
                </form>
            </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Comunidades {(comunidades.length)}
                </h2>
            
                <ul>
                    {comunidades.map((itemAtual) => {
                      return(
                        <li  key={itemAtual.id} >
                            <a href={`/users/${itemAtual.title}`}>
                                <img src={itemAtual.image} />
                                <span>{itemAtual.title}</span>
                            </a>
                        </li>
                      )
                    })}
                </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Pessoas da Comunidade {(pessoasFavoritas.length)}
                </h2>
              
                <ul>
                    {pessoasFavoritas.map((githubUser) => {
                      return(
                        <li key={githubUser}>
                            <a href={`/users/${githubUser}`}>
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
