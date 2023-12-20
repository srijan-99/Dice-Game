import {useState} from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';

const GamePlay = () => {
  const[score,setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState('');
   const[currentDice,setCurrentDice]=useState(1);
   const[error,setError]=useState("")

   const generateRandomNumber=function getRandomInt(min, max) {
    // min (inclusive) and max (exclusive)
    console.log(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const roleDice = () => {
    
    if(!selectedNumber){
    setError("You have not selected any number")
  return;
    }
    setError("");


    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev)=>randomNumber);

    // if(!selectedNumber) return ;


    if(selectedNumber ===randomNumber){
      setScore((prev)=>prev+randomNumber)

    }else{
      setScore((prev)=>prev-2)
    }
    setSelectedNumber(undefined);
  };

  const  resetScore =()=>{
    setScore(0);
  }
  

  return (
    <>
      <MainContainer>
        <div className='top-section'>
        <div className='top-sections'>
        <TotalScore  score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber}
        />
         </div>
          <div>
          <RollDice 
            currentDice={currentDice}
            roleDice={roleDice}
          />

          </div>
        </div>
        <div className='btns'>
          <button onClick={resetScore}>Reset</button>
          <button>Show Rules</button>
        </div>
      </MainContainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top-section {
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center; /* Fix the typo here */
  }
  .top-sections{
    display:flex;
    padding-right:80px
  }
  .btns{
    display:flex;
    flex-direction:column;
    align-items:center;
    ${'' /* justify-content:center; */}
    gap:10px;
  }
  
`;
