import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

import { AlurakutMenu } from '../src/lib/AlurakutCommons';

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
                Bem Vindo
            </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <Box>
                Pessoas da Comunidade
            </Box>
            <Box>
                Comunidades
            </Box>
        </div>
      </MainGrid>
    </>
  )
}
