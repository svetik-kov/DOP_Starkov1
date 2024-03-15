import { useAppDispatch, useAppSelector } from '../../../app/store'
import { Decks } from '../../../features/decks/decks-api'
import { selectDecks } from '../../../features/decks/decks-selectors'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../../features/decks/decks-thunks'

export const useFetchDecks=()=>{
  const decks = useAppSelector<Decks[]>(selectDecks)
  console.log(decks)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks
  }
}
