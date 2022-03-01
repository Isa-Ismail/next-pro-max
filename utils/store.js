import Cookies from 'js-cookie'
import {createContext, useReducer} from 'react'

export const Store = createContext()

const initialState = {

    query:'',

    darkMode: Cookies.get('darkMode') === 'ON',

    cart: {
        cartItems: Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : [],
        shippingAddress: Cookies.get('shippingAddress') ? JSON.parse(Cookies.get('shippingAddress')) : {location: {}},
        paymentMethod: Cookies.get('paymentMethod') ? JSON.parse(Cookies.get('paymentMethod')) : ''
    },

    userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null

}

const reducer = (state, action) => {
    switch (action.type) {
            case 'TOGGLE_DARK_MODE':
                return {
                    ...state,
                    darkMode: !state.darkMode
                }
            case 'CART_ADD_ITEM': {
                const newItem = action.payload;
                
                const existItem = state.cart.cartItems.find( (item) => item._id === newItem._id)
                
                const cartItems = existItem ? 
                state.cart.cartItems.map((item) => item.name === existItem.name ? newItem : item )
                : [...state.cart.cartItems, newItem]
                
                Cookies.set('cartItems', JSON.stringify(cartItems))
                
                return { ...state, cart: { ...state.cart, cartItems } }
                }
            case 'REMOVE_ITEM':
                const cartItems = state.cart.cartItems.filter (item => item._id !== action.payload)
                Cookies.set('cartItems', JSON.stringify(cartItems))
                return {
                 ...state, cart: { ...state.cart, cartItems } 
                }
            case 'USER_LOGIN':
                return {
                    ...state, userInfo: action.payload
                }
            case 'USER_REGISTER':
                return {
                    ...state, userInfo: action.payload
                }
            case 'SIGN_OUT':
                return {
                    ...state, userInfo: null
                }
            case 'SAVE_SHIPPING_ADDRESS':
                return {
                  ...state,
                  cart: { ...state.cart, shippingAddress: action.payload },
                }
            case 'QUERY':{
                return{
                    ...state, query: action.payload
                }
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