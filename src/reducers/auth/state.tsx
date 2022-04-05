import { Admin } from 'src/models/admin';
import { LOGIN, LOGOUT, SET_PHONE } from './action';

interface AuthState {
    token: string;
    data?: Admin;
    lastLoggedIn?: Date;
}

const authInitState: AuthState = {
    token: null,
    data: null,
    lastLoggedIn: null
};

export const auth = (state = authInitState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...action.payload,
                lastLoggedIn: new Date()
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                data: null
            };
        case SET_PHONE:
            let newAdmin = state.data;
            if (!newAdmin) {
                newAdmin = {
                    id: null,
                    mobileNo: action.payload
                }
            } else {
                newAdmin.mobileNo = action.payload;
            }
            return {
                ...state,
                data: { ...newAdmin }
            }
        default:
            return state;
    }
};