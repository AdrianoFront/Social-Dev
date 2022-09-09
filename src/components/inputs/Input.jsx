import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;
`

const Input = forwardRef(({ label, error, ...props }, ref) => {
  return(
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} {...props} ref={ref} />
      {error && <p>ERRO AQUI</p>}
    </InputContainer>

  )
}) 

export default Input