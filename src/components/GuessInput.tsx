import React, { useState } from 'react';
import styled from 'styled-components';

interface GuessInputProps {
  onSubmit: (guess: string) => void;
}

const InputContainer = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  font-size: 18px;
`;

export default function GuessInput({ onSubmit }: GuessInputProps) {
  const [guess, setGuess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value.toUpperCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.length === 5) {
      onSubmit(guess);
      setGuess('');
    }
  };

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={guess}
          onChange={handleChange}
          maxLength={5}
          placeholder="Enter your guess"
        />
      </form>
    </InputContainer>
  );
};
