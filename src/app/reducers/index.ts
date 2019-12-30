import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  // list of
  posts: {};
  strip: {};
  case: {};
}
export function postsReducer(state, action) {
  return state;
}
export const reducers: ActionReducerMap<State> = {
  // list of posts.
  posts: postsReducer,
  // current opened strip.
  strip: postsReducer,
  // focused or current case.
  case: postsReducer,
};
export function hmrResetter(reducer: ActionReducer<any>): ActionReducer<any> {
  console.log('hmrResetter');
  return (state: State, action) => {
    return reducer(state, action);
  };
}
export function debugLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  console.log('debugLogger');
  return (state: State, action: Action) => {
    console.group(action.type);
    console.log('state before', state);
    const result = reducer(state, action);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [hmrResetter, debugLogger]
  : [];
