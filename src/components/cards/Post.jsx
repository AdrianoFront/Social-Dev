import styled from 'styled-components'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername =styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 20px;
`

function Post () {
  return(
    <PostContainer>
      <StyledUsername>@username </StyledUsername>
      <StyledDate>15 de outubro 1822 </StyledDate>
      <ContainerText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </ContainerText>
    </PostContainer>
  )
}

export default Post