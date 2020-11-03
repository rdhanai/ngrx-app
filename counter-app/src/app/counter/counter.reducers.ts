import { createReducer, on } from '@ngrx/store';
import { increement, decreement, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increement, (state) => state + 1),
    on(decreement, (state) => state - 1),
    on(reset, (state) =>  0)
)

export function counterReducer(state, action) {
    return _counterReducer(state, action)
}