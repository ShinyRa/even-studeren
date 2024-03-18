import { QuizCardType } from "./QuizCardType";
import './QuizCard.scss'

const QuizCard = ({card}: QuizCardType) => {

    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
                    {card.questionTitle}
                </p>
                <p className="subtitle">
                    {card.questionDescription}
                </p>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    {card.tags.map(({identifier}) => (
                        <span className="tag is-info">{identifier}</span>
                    ))}
                </p>
                <p className="card-footer-item">
                    {card.categories.map(({identifier}) => (
                        <span className="tag is-danger">{identifier}</span>
                    ))}
                </p>
            </footer>
        </div>
    )
}

export default QuizCard
