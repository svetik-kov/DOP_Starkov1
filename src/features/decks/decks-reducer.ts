import { Decks } from 'src/features/decks/Decks'

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
/*    case 'DECKS/ADD-DECK':
      return {...state,decks: [action.deck,...state.decks]}*/
  }
  return state
}

type ActionType = SetDecksType/*|AddDeckType*/

export type SetDecksType = ReturnType<typeof setDecks>
//export type AddDeckType=ReturnType<typeof addDeck>


/*export const addDeck=(deck:Decks)=>{
  return {type:'DECKS/ADD-DECK',deck} as const
}*/
export const setDecks = (decks: Decks[]) => {
  return { type: 'GET-DECKS', decks } as const
}

