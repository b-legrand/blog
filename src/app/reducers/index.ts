import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  // list of
  posts: {};
  strip: {};
  case: {};
}

export const reducers: ActionReducerMap<State> = {
  // list of posts.
  posts: (state, action) => state,
  // current opened strip.
  strip: (state, action) => state,
  // focused or current case.
  case: (state, action) => state,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
