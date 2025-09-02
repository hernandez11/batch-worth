import { Dashboard } from './Dashboard'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { useState } from 'react'

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState('Dashboard')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue)
  }

  return (
    <TabContext value={selectedTab}>
      <Tabs
        data-testid={'VerticalTabs'}
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
      >
        <Tab value="Dashboard" label="Dashboard"></Tab>
        <Tab value="Ingredients" label="Ingredients"></Tab>
        <Tab value="Recipes" label="Recipes"></Tab>
        <Tab value="Calculator" label="Batch calculator"></Tab>
      </Tabs>
      <TabPanel value={'Dashboard'} data-testid={'Dashboard'}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={'Ingredients'} data-testid={'Ingredients'}>
        Ingredients
      </TabPanel>
      <TabPanel value={'Recipes'} data-testid={'Recipes'}>
        Recipes
      </TabPanel>
      <TabPanel value={'Calculator'} data-testid={'Batch-calculator'}>
        Batch calculator
      </TabPanel>
    </TabContext>
  )
}
