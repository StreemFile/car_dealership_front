import styled from "styled-components";
import LogoImage from "../../images/logo.png";

export const CompanyGetWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const CompanyGetLeftSideContent = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  display: grid;
  grid-row-gap: 15px;
`
export const CompanyGetLogo = styled.div`
  background-size: 150px;
  height: 150px;
  width: 150px;
  background-image: url(${LogoImage});
`

export const CompanyGetFirstSlogan = styled.h3`
  margin: 0px;
`

export const CompanyGetSecondSlogan = styled.h5`
  margin: 0px;
`

export const CompanyGetPartners = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  display: grid;
  text-align: center;
`

export const CompanyGetPartnerLogo = styled.img`
  margin: 15px;
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
`

export const CompanyGetDealershipPhoto = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  align-self: end;
`

export const CompanyGetRightSideContent = styled.div`
  padding: 18px;
  align-self: end;
  text-align: justify;
  justify-self: center;
`

export const CompanyGetAdminDescriptionText = styled.p`
  text-align: justify;
`
