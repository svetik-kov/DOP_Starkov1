import { AppDispatch } from '../../app/store'
import { decksAPI } from '../../features/decks/decks-api'
import { setDecks } from '../../features/decks/decks-reducer'

export const fetchDecksTC=()=>(dispatch:AppDispatch)=>{
  decksAPI.fetchDecks()
    .then((res) => {
      dispatch(setDecks(res.data.items))
    })
}