import styled from 'styled-components'

export const StyledPrimaryHeader = styled.header`
  color: #e38a8c;
  font-size: clamp(3.5rem, 8vw, 8rem);
  letter-spacing: -4px;
  white-space: nowrap;
  line-height: 100px;

  @media only screen and (max-width: 768px) {
    line-height: 75px;
  }
`

export const StyledSubheader = styled.h3`
  color: #e38a8c;
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: 400;
`
