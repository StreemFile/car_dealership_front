import styled from "styled-components";
import LogoImage from "../../images/logo.png"

export const CompanyGetWrapper = styled.div`
  background-color: #5596E7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const CompanyGetLeftSideContent = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  display: grid;
  grid-template-rows: repeat(4,1fr);
`
export const CompanyGetLogo = styled.div`
  background-size: 150px;
  height: 150px;
  width: 150px;
  background-image: url(${LogoImage});
`
