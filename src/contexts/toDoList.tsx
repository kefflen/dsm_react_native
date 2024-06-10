import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {createContext, useEffect} from 'react'
import {book} from '../types/book'

type contextvalue = {
  books: book[]
  setBooks: (todoList: book[]) => void
  addBook: (todoItem: book) => void
  removeBook: (todoItem: book) => void
  removeAllBooks: () => void
  updateBook: (book: book) => void
}

export const BooksContext = createContext<contextvalue>({} as contextvalue)

function BooksProvider({children}: {children: React.ReactNode}) {
  const storageKey = 'books'
  const [books, setBooks] = React.useState<book[]>([])

  useEffect(() => {
    AsyncStorage.getItem(storageKey).then(data => {
      if (data) {
        setBooks(JSON.parse(data))
      }
    })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(storageKey, JSON.stringify(books))
  }, [books])

  const addBook = (book: book) => {
    setBooks([...books, book])
  }

  const updateBook = (book: book) => {
    const newBooks = books.map(item => {
      if (item.title === book.title) {
        return book
      }
      return item
    })

    setBooks(newBooks)
  }

  const removeTodoItem = (book: book) => {
    const newBooks = books.filter(item => item.title !== book.title)

    setBooks(newBooks)
  }

  const removeAllTodoItems = () => {
    setBooks([])
  }

  return (
    <BooksContext.Provider
      value={{
        books: books,
        setBooks: setBooks,
        addBook: addBook,
        updateBook,
        removeBook: removeTodoItem,
        removeAllBooks: removeAllTodoItems,
      }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider
