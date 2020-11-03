import {createAction } from '@ngrx/store';

export const increement = createAction('Counter Increement');
export const decreement = createAction('Counter Decreement');
export const reset = createAction('Counter Reset');
