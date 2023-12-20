import styled from "styled-components";
import React from 'react';



const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="images/dices 1.png" alt="Dice" />
      </div>
      <Content>
        <h1>Dice Game</h1>
        {/* props */}
        <Button onClick={toggle}>Play Now</Button>
      </Content>
    </Container>
  );
};

export default StartGame;


// Styled components
const Container = styled.div`
  max-width: 1080px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  h1 {
    font-size: 96px;
    white-space:nowrap;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  border: none;
  font-size:16px;
  cursor:pointer;
  &:hover{
    background-color:red;
  }
`;