import { useState } from 'react';
import './App.css';
import { styled } from 'styled-components';
import Board from './components/Board';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

function App() {
    const [targetWord, setTargetWord] = useState<string>("CAROL");
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleGameOver = (isWin: boolean) => {
      setGameOver(true);
      setMessage(isWin ? 'Congratulations! You won!' : `Game over! The word was ${targetWord}.`);
    };

    const handleRestart = () => {
      setTargetWord("CAROL");
      setGameOver(false);
      setMessage('');
    };

    return (
      <AppContainer>
        <h1>Letro Game</h1>
        <Board targetWord={targetWord} onGameOver={handleGameOver} gameOver={gameOver} />
        {gameOver && (
          <>
            <p>{message}</p>
            <button onClick={handleRestart}>Restart</button>
          </>
        )}
      </AppContainer>
    );
  }

  export default App;
