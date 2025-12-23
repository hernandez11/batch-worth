import { StyledPrimaryHeader } from '../../theme/StyledText'

export const Supplies = () => {
  return (
    <div>
      <StyledPrimaryHeader data-testid={'SuppliesTitle'}> SUPPLIES</StyledPrimaryHeader>
      <p data-testid={'SuppliesDescription'}>
        Some description here that outlines the purpose of this page is to create a list of supplies
        to be used in recipes or products
      </p>
    </div>
  )
}
