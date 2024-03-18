import { useState } from 'react'
import { QuizCardType } from '../../../components/quizcard/QuizCardType' 
import QuizCard from '../../../components/quizcard/QuizCard'
import Header from '../../../components/navigation/Header'
import HeaderContextProvider from '../../../components/navigation/HeaderContextProvider'

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
        <HeaderContextProvider>
            <Header />
            <QuizCard card={quizCard} />
        </HeaderContextProvider>
    )
}

export default QuizCardPage
