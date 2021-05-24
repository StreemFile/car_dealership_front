import styled from "styled-components";

export const AllAutomobilesWrapper = styled.div`
  justify-self: center;
  align-self: center;
  margin: 20px;
`

export const AutomobileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  @media only screen and (max-width: 600px) {
    font-size: 80%;
    display: grid;
    grid-template-columns: 1fr;
  };
`

export const AutomobileByIdWrapper = styled.div`
  width: 75%;
  justify-self: center;
  align-self: center;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
`
export const AutomobileAddWrapper = styled.div`
  width: 75%;
  justify-self: center;
  align-self: center;
  margin: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
`