import axios from 'axios'


export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',

  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
fetchDecks(){
  return instance.get<FetchDecksResponseType>('decks' )
},
addDeck(params:AddDeckParams){
  return instance.post<Decks>('decks',  params )
}
}

export type AddDeckParams={
  name:string
}

export type FetchDecksResponseType={
  items:  Decks[],
  pagination: Pagination,
  maxCardsCount: number
}

export type Decks={
  "author": {
    "id": string,
    "name": string
  },
  "id": string,
  "userId": string,
  "name": string,
  "isPrivate": true,
  "cover": string,
  "created": Date,
  "updated": Date,
  "cardsCount":number
}
type Pagination={
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  totalItems: number
}