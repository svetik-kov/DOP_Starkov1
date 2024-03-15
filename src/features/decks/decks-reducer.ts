import { Decks } from 'src/features/decks/Decks'
import { AppDispatch } from 'src/app/store'
import { decksAPI } from '../../features/decks/decks-api'

const initialState = {
  decks: [] as Decks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case 'GET-DECKS':
      return { ...state, decks: action.decks }
  }
  return state
}

type ActionType = SetDecksType
export type SetDecksType = ReturnType<typeof setDecks>
export const setDecks = (decks: Decks[]) => {
  return { type: 'GET-DECKS', decks } as const
}

/*
export const fetchDecksTC=()=>(dispatch:AppDispatch)=>{
  decksAPI.fetchDecks()
    .then((res) => {
      dispatch(setDecks(res.data.items))
    })
}*/
