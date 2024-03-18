import { useState } from 'react'
import { QuizCardType } from '../../../components/quizcard/QuizCardType' 
import QuizCard from '../../../components/quizcard/QuizCard'

function QuizCardPage() {
    const [quizCard] = useState<QuizCardType>({
        questionTitle: "Question",
        questionDescription: "Question description",
        answerTitle: "Answer",
        answerDescription: "Answer description",
        categories: [{identifier: "Category"}],
        tags: [{identifier: "Tag"}],
        style: {categoryColor: "#FC2323"}
    })

    return (
        <QuizCard card={quizCard} />
    )
}

export default QuizCardPage
