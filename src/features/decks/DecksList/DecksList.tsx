import s from './DecksList.module.css'
import { DeckItem } from '../../../features/decks/DecksList/DeckItem/DeckItem'
import { useFetchDecks } from '../../../features/decks/DecksList/useFetchDecks'

export const DecksList = () => {
  /*  const decks = useAppSelector<Decks[]>(selectDecks)
    console.log(decks)
    const dispatch = useAppDispatch()


    useEffect(() => {
      dispatch(fetchDecksTC())
    }, [])*/
  const { decks } = useFetchDecks()

  return <ul className={s.list}>
    {decks?.map(el => {
      return (
        <DeckItem deck={el} key={el.id} />
      )
    })}


  </ul>
}



