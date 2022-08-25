import styled from 'styled-components'

import Navbar from '../src/components/layout/Navbar'
import Container from '../src/components/layout/Container'
import CreatePost from '../components/cards/CreatePost'
import H3 from '../src/components/typography/H3'

const Content = styled.div`
  margin: 50px 0;
`

function HomePage () {
  
  return (
    <>
      <Navbar/>
      <Content>
        <Container>
          <CreatePost />
          <H3>Últimas postagens:</H3>
        </Container>        
      </Content>
    </>
  )
}

export default HomePage