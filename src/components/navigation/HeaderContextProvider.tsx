import { createContext, useState } from "react"

export const HeaderContext = createContext(null)

const HeaderContextProvider = (props) => {
    const [data, setData] = useState({title: "Quiz card", subtitle: "test"})

    return (
        <HeaderContext.Provider value={{data: data, setData: (data) => setData(data)}}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export default HeaderContextProvider