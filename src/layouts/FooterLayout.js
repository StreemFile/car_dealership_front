import styled from "styled-components";
import LogoImage from "../images/logoW.png"

export const Footer = styled.div`
  padding-right: 15px;
  height: 100px;
  background-color: #212529;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const FooterLogo = styled.div`
  background-size: 100px;
  height: 100px;
  width: 100px;
  justify-self: start;
  background-image: url(${LogoImage});
`

export const FooterCopyright = styled.div`
  justify-self: center;
  align-self: end;
  font-size: 15px;
  color: white;
`

export const FooterCompanyInfo = styled.div`
  justify-self: end;
  align-self: center;
  font-size: 15px;
  color: white;
  text-decoration:none;
`

export const FooterClickableInfo = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    cursor: unset;
    color: #807d7d;
    text-decoration: none;
  }
`


