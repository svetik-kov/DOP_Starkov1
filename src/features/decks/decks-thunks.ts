import { AppDispatch } from '../../app/store'
import { AddDeckParams, decksAPI } from '../../features/decks/decks-api'
import { addDeck, setDecks } from '../../features/decks/decks-reducer'

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.fetchDecks()
    .then((res) => {
      dispatch(setDecks(res.data.items))
    })
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: AppDispatch) => {
  const res = await decksAPI.addDeck(params)
  return  dispatch(addDeck(res.data))
}