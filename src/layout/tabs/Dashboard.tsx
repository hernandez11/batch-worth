import { StyledPrimaryHeader, StyledSubheader } from '../../theme/StyledText'

export default function Dashboard() {
  return (
    <>
      <StyledPrimaryHeader data-testid={'DashboardTitle'}>LOLOS PASTRY</StyledPrimaryHeader>
      <StyledSubheader data-testid={'DashboardSubtitle'}>BATCH CALCULATOR</StyledSubheader>
    </>
  )
}
