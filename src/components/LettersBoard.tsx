interface LettersBoardProps {
    wrongGuesses: string[];
    correctGuesses: string[];
}

export default function LettersBoard({ wrongGuesses, correctGuesses}: LettersBoardProps) {

    const alphabet: string[] = [];

    for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
    }


    return (
        <>
        {alphabet}
        {correctGuesses}
        {wrongGuesses}
        </>
    );
}