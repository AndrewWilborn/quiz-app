import { useState } from "react";
import Card from "./Card";
import Result from "./Result";
import data from "../../data/movie.json";
import "./QuizApp.css";

const qLength = data.length;

export default function QuizApp() {
    const [qId, setQId] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isCorrect) => {
        isCorrect && setScore(score+1)

        if(qId < qLength-1){
            setQId(qId + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleReset = () => {
        setQId(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <>
            {
                !showResult
                    ? <Card 
                        qData={data[qId]}
                        qLength={qLength}
                        handleAnswer={handleAnswer}
                    />
                    : <Result 
                        score={score}
                        qLength={qLength}
                        handleReset={handleReset}
                    />
            }
        </>
    )
}