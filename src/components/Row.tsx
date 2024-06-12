import { styled } from "styled-components";

interface RowProps {
    guess: string;
    targetWord: string;
    setCorrectGuesses: React.Dispatch<React.SetStateAction<string[]>>;
    setWrongGuesses: React.Dispatch<React.SetStateAction<string[]>>;
    wrongGuesses: string[];
    correctGuesses: string[];
  }
  
  const RowContainer = styled.div`
    display: flex;
    gap: 5px;
  `;
  
  const LetterBox = styled.div<{ status: string }>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${( {status}: {status: string} ) => {
      switch (status) {
        case 'correct':
          return 'green';
        case 'present':
          return 'yellow';
        case 'absent':
          return 'grey';
        default:
          return 'white';
      }
    }};
    color: black;
    font-size: 24px;
    border: 1px solid #ccc;
  `;
  
  
  export default function Row({ guess, targetWord, setWrongGuesses, setCorrectGuesses, wrongGuesses, correctGuesses }: RowProps) {
    const getLetterStatus = (letter: string, index: number, targetWord: string): string => {
      if (targetWord[index] === letter) {
        correctGuesses.push(letter)
        setCorrectGuesses(correctGuesses)
        console.log("eta")
        return 'correct'
      };
      if (targetWord.includes(letter)) return 'present'
      ;
      wrongGuesses.push(letter)
      setWrongGuesses(wrongGuesses)
      return 'absent';
    };
    
    return (
      <RowContainer>
        {[...guess.padEnd(5)].map((letter, index) => (
          <LetterBox key={index} status={getLetterStatus(letter, index, targetWord)}>
            {letter}
          </LetterBox>
        ))}
      </RowContainer>
    );
  };