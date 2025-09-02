import { Dashboard } from './Dashboard'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { useState } from 'react'

export const Home = () => {
  const [selectedTab, setSelectedTab] = useState('Dashboard')

  const handleChange = (newValue: string) => {
    setSelectedTab(newValue)
  }

  return (
    <TabContext value={selectedTab}>
      <Tabs
        data-testid={'VerticalTabs'}
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={(_, newValue) => handleChange(newValue)}
      >
        <Tab value="Dashboard" label="Dashboard" data-testid={'Dashboard'}></Tab>
        <Tab value="Ingredients" label="Ingredients" data-testid={'Ingredients'}></Tab>
        <Tab value="Recipes" label="Recipes" data-testid={'Recipes'}></Tab>
        <Tab value="Calculator" label="Batch calculator" data-testid={'Batch-calculator'}></Tab>
      </Tabs>
      <TabPanel value={'Dashboard'}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={'Ingredients'}>Ingredients</TabPanel>
      <TabPanel value={'Recipes'}>Recipes</TabPanel>
      <TabPanel value={'Calculator'}>Batch calculator</TabPanel>
    </TabContext>
  )
}
