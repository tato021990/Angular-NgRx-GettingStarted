import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../user';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  users: UserState;
}

export interface UserState {
  showUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  showUserName: true,
  currentUser: null,
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getShowUserName = createSelector(
  getUserFeatureState,
  (state) => state.showUserName
);

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] Mask User Name'), (state) => {
    return {
      ...state,
      showUserName: !state.showUserName,
    };
  })
);
