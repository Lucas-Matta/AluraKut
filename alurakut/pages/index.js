import styled from 'styled-components'

const Box = styled.div`
    background: #FFF;
    border-radius: 8px;

`;

const MainGrid = styled.main`
    display: grid;
    grid-gap: 10px;
    padding: 16px;

    @media(min-width: 860px){
      grid-template-areas: "profileArea welcomeArea profileRelationsArea";
      grid-template-columns: 160px 618px 312px;
    }
`;

export default function Home() {
  return(
    <MainGrid>
      <Box style={{ gridArea: 'profileArea' }}>
          imagem
      </Box>
      <Box style={{ gridArea: 'welcomeArea' }}>
          Bem Vindo
      </Box>
      <Box style={{ gridArea: 'profileRelationsArea' }}>
          Comunidades
      </Box>
    </MainGrid>
  )
}
