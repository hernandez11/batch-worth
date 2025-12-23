import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import { useState } from 'react'
import { StyledTabs } from '../theme/Tabs/StyledTabs'
import { StyledTabPanel } from '../theme/Tabs/StyledTabPanel'
import Dashboard from './pages/Dashboard'

export default function TabsContainer() {
  const [selectedTab, setSelectedTab] = useState('Dashboard')

  const handleChange = (newValue: string) => {
    setSelectedTab(newValue)
  }

  return (
    <TabContext value={selectedTab}>
      <StyledTabs value={selectedTab} onChange={(_, newValue) => handleChange(newValue)}>
        <Tab value="Dashboard" label="Dashboard" data-testid={'DashboardTab'}></Tab>
        <Tab value="Ingredients" label="Ingredients" data-testid={'IngredientsTab'}></Tab>
        <Tab value="Recipes" label="Recipes" data-testid={'RecipesTab'}></Tab>
        <Tab value="Calculator" label="Batch calculator" data-testid={'CalculatorTab'}></Tab>
      </StyledTabs>
      <StyledTabPanel value={'Dashboard'}>{<Dashboard />}</StyledTabPanel>
      <StyledTabPanel value={'Ingredients'}>Ingredients</StyledTabPanel>
      <StyledTabPanel value={'Recipes'}>Recipes</StyledTabPanel>
      <StyledTabPanel value={'Calculator'}>Batch calculator</StyledTabPanel>
    </TabContext>
  )
}
