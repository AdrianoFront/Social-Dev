import styled from 'styled-components'

import H4 from '../typography/H4'
import Textarea from '../inputs/Textarea'
import Button from '../inputs/Button'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px 40px;

@media (max-width: 500px) {
  padding: 20px;
}
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`

const BottomText = styled.p`
  flex: 1;
`

function CreatePost () {
  return (
    <PostContainer>
      <H4><Title>No que você está pensando, @nick?</Title></H4>
      <TextContainer>
        <textarea placeholder="Digite sua mensagem" rows="4" />
      </TextContainer>
      <BottomContainer>
        <BottomText>A sua mensagem será pública</BottomText>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost