import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import GlobalStyles from "./components/styles/Global";
import { Main } from "./components/styles/Main.styled";
import { Container } from "./components/styles/Container.styled";
import { MainBtn } from "./components/styles/Button.styled";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzi, settenzi] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      settenzi(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzi) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      settenzi(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <>
      <GlobalStyles />
      <Main>
        {tenzi && <Confetti />}
        <h1>Tenzi</h1>
        <p>
          Roll until all dice are the same.<br></br> Click each die to freeze it
          at its current value between rolls.
        </p>
        <Container>{diceElements}</Container>
        <MainBtn onClick={rollDice}>{tenzi ? "New Game" : "Roll"}</MainBtn>
      </Main>
    </>
  );
}

export default App;
