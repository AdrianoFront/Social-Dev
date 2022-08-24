import styled from 'styled-components'

import Navbar from '../src/components/layout/Navbar'
import Container from '../src/components/layout/Container'

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
        </Container>        
      </Content>
    </>
  )
}

export default HomePage