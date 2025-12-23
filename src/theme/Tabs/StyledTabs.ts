import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'

export const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    font-size: clamp(0.6rem, 1.2vw, 1rem);
    min-height: 45px;
    min-width: 10em;
    z-index: 1;
    margin-top: 1rem;

    color: #741912;
    background-color: #f3ecd8;
    text-transform: none;

    &:first-of-type {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-left: 1rem;
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
