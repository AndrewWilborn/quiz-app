
export default function Card({ qData, qLength }){
    
    return (
        <div className="quiz-card">
            <p>{qData.id + 1}/{qLength}</p>
            <h3>{qData.question}</h3>
            <ul>
                {
                    qData.options.map(
                        (element, index)=>{
                            return(
                                <li key={index}>{element.answer}</li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}