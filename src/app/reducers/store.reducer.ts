import { Action } from '@ngrx/store'
import { StoreApp } from './../models/store.model'
import * as StoreActions from './../actions/store.actions'

const initialState: StoreApp = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: StoreApp[] = [initialState], action: StoreActions.Actions) {
    switch (action.type) {
        case StoreActions.ADD_TUTORIAL:
            return [...state, action.payload];

        case StoreActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)     //splice zmienia zawartosc tablicy dodajac nowe elementy podczasx usuwania starych
            return state;

        default:
            return state;
    }
}