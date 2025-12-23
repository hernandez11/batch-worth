import { StyledContentWrapper } from '../../theme/StyledContentWrapper'
import { StyledPrimaryHeader, StyledSubheader } from '../../theme/StyledText'

export default function Dashboard() {
  return (
    <StyledContentWrapper>
      <div className="titleWrapper">
        <StyledPrimaryHeader data-testid={'DashboardTitle'}>LOLOS PASTRY</StyledPrimaryHeader>
        <StyledSubheader data-testid={'DashboardSubtitle'}>BATCH CALCULATOR</StyledSubheader>
      </div>
      <div className="imageWrapper">
        <img
          data-testid={'DashboardBackground'}
          src="src/assets/dashboardBackground.png"
          alt="Dashboard background"
        />
      </div>
    </StyledContentWrapper>
  )
}
