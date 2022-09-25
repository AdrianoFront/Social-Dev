import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useSWRConfig } from "swr";
import axios from "axios";

import Menu from "../navigation/Menu";
import EditPost from "./EditPost";

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold; 
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`
const ContainerText = styled.div`
  margin-top: 20px;
`

const ContatinerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date, isOwner, id }) {
  const { mutate } = useSWRConfig()
  const [editPost, setEditPost] = useState(false)

  const handleEdit = async () => {
    setEditPost(true)
  }

  const handleSaveEdit = () => {
    setEditPost(false)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
  }

  const handleDelete = async () => {
    try { 
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: {
          id
        }
      })
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <PostContainer>
      {
        isOwner &&
        <ContatinerMenu>
          <Menu
            options={[
              {
                text: 'Editar Publicação',
                onClick: handleEdit
              },
              {
                text: 'Deletar publicação',
                onClick: handleDelete
              }
            ]}
          />
        </ContatinerMenu>
      }
        <StyledUsername> @{user} </StyledUsername>
          <StyledDate> {moment(date).format('LLL')}</StyledDate>
            <ContainerText> 
              {!editPost && text} 
              {editPost && <EditPost id={id} text={text} onSave={handleSaveEdit} />}
            </ContainerText>
    </PostContainer>
  )
}

export default Post