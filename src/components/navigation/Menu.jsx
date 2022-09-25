
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Dots = styled.img`
  cursor: pointer;
  position: relative;
`
const StyledMenu = styled.div`
  position: absolute;
  width: 200px;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  right: 0;
  background-color: ${props => props.theme.white};

  display: ${props => props.show ? 'block' : 'none'};
`

const StyledOption = styled.div`
  padding: 15px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.inputBackground}
  }
`

const StyledContainerMenu = styled.div`
  position: relative;
`

const Menu = ({ options = [] }) => {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [menuRef])

  const handleClick = (onclick) => {
    setShow(false)
    onclick()
  }

  return (
    <StyledContainerMenu>
      <Dots src="./three-dots.svg" height="20px" onCLick={() => setShow(!show)}/>
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
        {
          options.map((option, pos) =>
            <StyledOption
            key={`menu-option-${pos}`}
            onCLick={() => handleClick(option.onCLick)}
          >
            {option.text}
          </StyledOption>
          ) 
        }
      </StyledMenu>
    </StyledContainerMenu>
  )
}

export default Menu