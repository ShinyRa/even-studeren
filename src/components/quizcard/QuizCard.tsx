import { QuizCardType } from "./QuizCardType";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group' 

import './quizcard.scss'
import './flip-transition.scss'

const QuizCard = ({card}: QuizCardType) => {

    const [showFront, setShowFront] = useState(true)

    return (
        <CSSTransition
            in={showFront}
            timeout={300}
            classNames={'flip'}
        >
            <div className="flippable" onClick={() => setShowFront(!showFront)}>
                <div className="card card-front">
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
                                <span className="tag is-info" key={identifier}>{identifier}</span>
                            ))}
                        </p>
                        <p className="card-footer-item">
                            {card.categories.map(({identifier}) => (
                                <span className="tag is-danger" key={identifier}>{identifier}</span>
                            ))}
                        </p>
                    </footer>
                </div>
                <div className="card card-back">
                    <div className="card-content">
                        <p className="title">
                            {card.answerTitle}
                        </p>
                        <p className="subtitle">
                            {card.answerDescription}
                        </p>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            {card.tags.map(({identifier}) => (
                                <span className="tag is-info" key={identifier}>{identifier}</span>
                                ))}
                        </p>
                        <p className="card-footer-item">
                            {card.categories.map(({identifier}) => (
                                <span className="tag is-danger" key={identifier}>{identifier}</span>
                                ))}
                        </p>
                    </footer>
                </div>
        </div>
        </CSSTransition>

    )
}

export default QuizCard
