import { useState } from "react";

const QUESTION = {
  id: 1,
  text: "The sky is blue?",
  correctAnswer: "yes" as "yes" | "no",
};

type Answer = "yes" | "no" | null;

function QuestionScreen({
  question,
  timeLeft,
  onAnswer,
}: {
  question: typeof QUESTION;
  timeLeft: number;
  onAnswer: (a: Answer) => void;
}) {
  return (
    <div>
      <h2>Question</h2>
      <p>{question.text}</p>
      <p>Time left: {timeLeft}s</p>
      <button onClick={() => onAnswer("yes")}>Yes</button>
      <button onClick={() => onAnswer("no")}>No</button>
    </div>
  );
}

function ResultScreen({
  question,
  userAnswer,
  isCorrect,
  lostByTimeout,
}: {
  question: typeof QUESTION;
  userAnswer: Answer;
  isCorrect: boolean;
  lostByTimeout: boolean;
}) {
  const resultClass = isCorrect ? "result-correct" : "result-incorrect";

  return (
    <div className={resultClass}>
      <h2>Result</h2>
      <p>Question: {question.text}</p>
      <p>Your answer: {userAnswer ?? "No answer"}</p>
      <p>Correct answer: {question.correctAnswer}</p>

      {lostByTimeout ? (
        <p className="result-message">You didn't answer in time. You lose.</p>
      ) : (
        <p className="result-message">{isCorrect ? "Correct!" : "Wrong!"}</p>
      )}
    </div>
  );
}

// ----------------------------------------------------
// Candidate implements the game logic inside <Game />
// ----------------------------------------------------

function Game() {
  const [timeLeft, setTimeLeft] = useState(4);
  const [userAnswer, setUserAnswer] = useState<Answer>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: Answer) => {};

  return (
    <>
      <QuestionScreen
        question={QUESTION}
        timeLeft={timeLeft}
        onAnswer={handleAnswer}
      />
      {showResult && (
        <ResultScreen
          question={QUESTION}
          userAnswer={userAnswer}
          isCorrect={false} // TODO: implement
          lostByTimeout={false} // TODO: implement
        />
      )}
    </>
  );
}

export default function App() {
  return <Game />;
}
