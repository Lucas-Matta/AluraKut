import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

// Função para pegar o usuario do GitHub
function ProfileSidebar(){
  const githubUser = 'Lucas-Matta';

  return(
    <Box>
        <img style={{ borderRadius: '8px' }} src={`https://github.com/${githubUser}.png`} />
    </Box>
  )
}

export default function Home() {

  return(
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar />
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
  )
}
