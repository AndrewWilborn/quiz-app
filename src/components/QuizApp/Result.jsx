
export default function Result({ score, qLength, handleReset }) {

    return (
        <div className="quiz-card">
            <h3>Result</h3>
            <p>Your scored {score} out of {qLength}</p>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}