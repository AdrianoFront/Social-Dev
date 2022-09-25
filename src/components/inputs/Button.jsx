import style from 'styled-components'

const StyleButton = style.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;

  ${props => props.disabled && 'cursor: pointer'}

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  :disabled {
    background-color: ${props => props.theme.disable};
  }
`

const Button = ({ children, loading, disable, ...props }) => {

  return (
    <StyledButton
      disabled={disable || loading} 
      {...props}
    >
      {loading && <img src="./loading.svg" width="14px"/>}
      {!loading && children}
    </StyledButton>
  )  
}

export default Button