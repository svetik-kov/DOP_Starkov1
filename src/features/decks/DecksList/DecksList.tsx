import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Decks, decksAPI } from './../../../features/decks/decks-api'
import { useAppDispatch, useAppSelector } from '../../../app/store'

import { DeckItem } from '../../../features/decks/DecksList/DeckItem/DeckItem'
import { selectDecks } from '../../../features/decks/decks-selectors'
import { fetchDecksTC } from '../../../features/decks/decks-thunks'

export const DecksList = () => {
  const decks = useAppSelector<Decks[]>(selectDecks)
  console.log(decks)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchDecksTC())
   /* decksAPI.fetchDecks()
      .then((res) => {
        dispatch(setDecks(res.data.items))
      })*/
  }, [])


  return <ul className={s.list}>
    {decks?.map(el => {
      return (
          <DeckItem deck={el} key={el.id}/>
      )
    })}


  </ul>
}



