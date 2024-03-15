import { AppRootState, useAppSelector } from 'src/app/store'
import { Decks } from 'src/features/decks/decks-api'

export const selectDecks =(state:AppRootState) => state.decks.decks