import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <Stitle>- Styled Components -</Stitle>
        <Sbutton>FIGHT!!</Sbutton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  border: solid 2px red;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stitle = styled.p`
  margin: 0;
  color: blue;
`;

const Sbutton = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
