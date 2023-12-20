import styled from 'styled-components';
import React, { useState } from 'react';

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState('');
  console.log(selectedNumber);

  const  numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError("");


  }

  return (
    <NumberSelectorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
      {arrNumber.map((value, i) => (
        <Box isSelected={value===selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>
          {value}
        </Box>
      ))}
      </div>
      <p>selectedNumber</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer=styled.div`

padding:70px;
display:flex;
flex-direction:column;
align-items:end;
.error{
  color:red;

}
.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700px;
}

`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  ${'' /* understand again important  */}
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
