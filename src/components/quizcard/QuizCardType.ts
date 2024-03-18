import { QuizCardStyleType } from "./QuizCardStyleType"

export type QuizCardType = {
    questionTitle: string,
    questionDescription: string | null,
    answerTitle: string | null,
    answerDescription: string | null,
    // TODO: Add Category type
    categories: [{identifier: string}]
    // TODO: Add Tag type
    tags: [{identifier: string}]
    style: QuizCardStyleType | null
}