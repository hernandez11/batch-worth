import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { useState } from 'react'

export const TabsContainer = () => {
  const [selectedTab, setSelectedTab] = useState('Dashboard')

  const handleChange = (newValue: string) => {
    setSelectedTab(newValue)
  }

  return (
    <TabContext value={selectedTab}>
      <Tabs value={selectedTab} onChange={(_, newValue) => handleChange(newValue)}>
        <Tab value="Dashboard" label="Dashboard" data-testid={'DashboardTab'}></Tab>
        <Tab value="Ingredients" label="Ingredients" data-testid={'IngredientsTab'}></Tab>
        <Tab value="Recipes" label="Recipes" data-testid={'RecipesTab'}></Tab>
        <Tab value="Calculator" label="Batch calculator" data-testid={'CalculatorTab'}></Tab>
      </Tabs>
      <TabPanel value={'Dashboard'}></TabPanel>
      <TabPanel value={'Ingredients'}>Ingredients</TabPanel>
      <TabPanel value={'Recipes'}>Recipes</TabPanel>
      <TabPanel value={'Calculator'}>Batch calculator</TabPanel>
    </TabContext>
  )
}
