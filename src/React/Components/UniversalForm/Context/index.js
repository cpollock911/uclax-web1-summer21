import { createContext } from 'react';
import { actionTypes } from './actionTypes.js';

export default createContext();

/*---------------------------
| State Updater (Reducer)
---------------------------*/
export const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL: {
            return {
                ...state,
                ...action.newState
            };
        }

        default: {
            return {...state}
        }
    }
}