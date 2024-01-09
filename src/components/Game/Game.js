import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(guess) {
    const newGuess = {
      id: Math.random(),
      label: guess,
    };
    setGuesses([...guesses, newGuess]);
  }
  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <GuessInput handleAddGuess={handleAddGuess}></GuessInput>
    </>
  );
}

export default Game;
