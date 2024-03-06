import axios from "axios";

const BASE_URL = 'https://api.adviceslip.com/advice'

export type Advice = {
    id: number
    advice: string
}

type AdviceRes = {
    slip: Advice
}

export const getRandomAdvice = async (): Promise<AdviceRes> => {
    const response = await axios.get(BASE_URL)
    const {data} = response
    return data
}