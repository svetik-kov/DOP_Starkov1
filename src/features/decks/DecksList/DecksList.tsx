import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Decks, decksAPI } from './../../../features/decks/decks-api'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { setDecks } from '../../../features/decks/decks-reducer'
import { DeckItem } from '../../../features/decks/DecksList/DeckItem/DeckItem'

export const DecksList = () => {
  const decks = useAppSelector<Decks[]>(state => state.decks.decks.items)
  console.log(decks)
  const dispatch = useAppDispatch()


  useEffect(() => {
    decksAPI.fetchDecks()
      .then((res) => {
        dispatch(setDecks(res.data))
      })
  }, [])


  return <ul className={s.list}>
    {decks?.map(el => {
      return (
        <li key={el.id}>
          <DeckItem deck={el} />
        </li>

      )
    })}


  </ul>
}



