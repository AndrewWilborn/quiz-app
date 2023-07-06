import { useState } from "react";
import Card from "./Card";
import Result from "./Result";
import data from "../../data/quiz.json";
import "./QuizApp.css";

const qLength = data.length;

export default function QuizApp() {
    const [qId, setQId] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    return (
        <>
            {
                !showResult
                    ? <Card 
                        qData={data[qId]}
                        qLength={qLength}
                    />
                    : <Result 
                        score={score}
                        data={data}
                    />
            }
        </>
    )
}