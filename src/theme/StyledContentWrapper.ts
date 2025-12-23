import styled from 'styled-components'

export const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 35rem;

  .titleWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 70vw;
  }

  .imageWrapper {
    width: 30vw;

    > img {
      object-fit: contain;
      position: absolute;
      width: 25vw;
      max-height: 42em;
      right: 0;
      top: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 25rem;
  }
`
