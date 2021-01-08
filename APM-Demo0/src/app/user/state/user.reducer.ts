import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    {showUserName: true},
    on(createAction('[User] Mask User Name'), state => {
        return {
            ...state,
            showUserName: !state.showUserName
        };
    })
);