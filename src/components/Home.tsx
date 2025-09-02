import { Dashboard } from './Dashboard'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export const Home = () => {
  return (
    <>
      <Tabs data-testid={'VerticalTabs'}>
        <Tab></Tab>
      </Tabs>
      <div>
        <Dashboard />
      </div>
    </>
  )
}
