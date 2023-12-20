
import styled from 'styled-components'

const RollDice = ({currentDice,roleDice}) => {

    // //use useState to change the dice or to roll the dice
    // const[currentDice,setCurrentDice]=useState(1);

    // const generateRandomNumber=function getRandomInt(min, max) {
    //     // min (inclusive) and max (exclusive)
    //     console.log(Math.floor(Math.random() * (max - min)) + min);
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }
    //   const roleDice =()=>{
    //     const randomNumber=generateRandomNumber(1,7);
    //     setCurrentDice(randomNumber);
    //   }

  return (
    <DivContainer>
        <div className='dice' onClick={roleDice}>
       
            <img src={`/images/dice images/dice_${currentDice}.png`} alt="logo"/>
        
        </div>
        <p>Click On the Dice to Roll</p>
    </DivContainer>
  )
}

export default RollDice

const DivContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
${'' /* height:100vh;
width:100%; */}
.dice{
    cursor:pointer;
}
p{
    font-size:24px;
}
`