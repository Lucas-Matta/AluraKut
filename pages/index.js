import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

// Função para pegar o usuario do GitHub
function ProfileSidebar(props){

  return(
    <Box>
        <img style={{ borderRadius: '8px' }} src={`https://github.com/${props.githubUser}.png`} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'Lucas-Matta';
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev']

  return(
    <>
      <AlurakutMenu />
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                  Pessoas da Comunidade {(pessoasFavoritas.length)}
                </h2>
              
                <ul>
                    {pessoasFavoritas.map((githubUser) => {
                      return(
                        <li>
                            <a href={`/users/${githubUser}`} key={githubUser}>
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
