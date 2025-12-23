import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'

export const StyledTabs = styled(Tabs)`
  background-color: #f3ecd8;
  border-radius: 10px;
  width: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;

  .MuiTab-root {
    z-index: 1;
    font-size: clamp(0.6rem, 1.2vw, 1rem);
    min-height: 48px;
    min-width: 10em;
    color: #741912;
    text-transform: none;

    &:first-of-type {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-of-type {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    &.Mui-selected {
      color: #e38a8c;
      background-color: #741912;
      border-radius: 10px;
      cursor: default;
    }
  }

  .MuiTabs-indicator {
    display: none;
  }

  :hover {
    color: #e38a8c;
  }
`
