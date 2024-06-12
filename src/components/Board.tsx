import { useState } from "react";
import styled from "styled-components";
import Row from "./Row";
import GuessInput from "./GuessInput";
import LettersBoard from "./LettersBoard";

interface BoardProps {
    targetWord: string;
    onGameOver: (isWin: boolean) => void;
    gameOver: boolean;
  }

const BoardContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, 1fr);
gap: 10px;
`;

export default function Board({ targetWord, onGameOver, gameOver }: BoardProps) {
    const [guesses, setGuesses] = useState<string[]>(['', '', '', '', '', '']);
    const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
    const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
    const [currentRow, setCurrentRow] = useState<number>(0);

    const handleGuess = (guess: string) => {
        if (currentRow < 6 && !gameOver) {
        const newGuesses = [...guesses];
        newGuesses[currentRow] = guess;
        setGuesses(newGuesses);

        if (guess === targetWord) {
            onGameOver(true);
        } else if (currentRow === 5) {
            onGameOver(false);
        }

        setCurrentRow(currentRow + 1);
        }
    };
    
    return (
        <BoardContainer>
            {guesses.map((guess, index) => (
                <Row key={index} guess={guess} targetWord={targetWord} setWrongGuesses={setWrongGuesses} setCorrectGuesses={setCorrectGuesses}
                wrongGuesses={wrongGuesses} correctGuesses={correctGuesses}/>
            ))}
            {!gameOver && <GuessInput onSubmit={handleGuess} />}
        </BoardContainer>
    );
}