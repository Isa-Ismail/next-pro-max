import {createContext, useReducer} from 'react'

export const Store = createContext()

const initialState = {
    darkMode: true,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}