import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/dragonReducer";


const DragonContext = createContext();

export const useDragonContext = () => useContext(DragonContext);

const DragonContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = [state, dispatch];

    return <DragonContext.Provider value={value}>
        {children}
    </DragonContext.Provider>
}

export default DragonContextProvider;