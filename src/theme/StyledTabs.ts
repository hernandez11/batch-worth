import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'

export const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    color: #741912;
    background-color: #f3ecd8;

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

      &:hover {
        color: #f3ecd8;
      }
    }
  }

  .MuiTabs-indicator {
    display: none;
  }

  :hover {
    color: #e38a8c;
  }
`
