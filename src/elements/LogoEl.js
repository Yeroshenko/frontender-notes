import styled from 'styled-components'

export const LogoEl = styled.img`
  max-height: 32px;
  transition: ${props => props.theme.transition.main};

  :hover {
    transform: translateY(-5px);
  }
`