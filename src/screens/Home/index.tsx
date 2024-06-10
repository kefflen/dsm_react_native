import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useContext} from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import {ScreenView} from '../../components/PageView'
import {BooksContext} from '../../contexts/toDoList'
import {book} from '../../types/book'
import {RootStackParamsList} from '../../types/react-navigate'

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'Home'>

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {books, removeBook} = useContext(BooksContext)
  //TODO: Implement a way to get books from async storage
  // const [books, setBooks] = useState<book[]>([
  //   {
  //     author: 'J.K. Rowling',
  //     title: 'Harry Potter',
  //     description:
  //       'Harry Potter is a series of seven fantasy novels written by British author, J. K. Rowling.',
  //     genre: 'Fantasy',
  //     year: 1997,
  //   },
  // ])

  return (
    <ScreenView>
      <View className="flex-row justify-end mb-2">
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateBook')}
          className="bg-emerald-700 py-2 px-4 rounded-md mt-2">
          <Text className="text-white text-xl font-bold">+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        renderItem={({item}) => <BookCard {...item} />}
        keyExtractor={item => item.title}
      />
    </ScreenView>
  )
}

function BookCard(book: book) {
  const {removeBook} = useContext(BooksContext)

  return (
    <View>
      <View className="overflow-hidden bg-slate-700 rounded-md">
        <View className="flex-row bg-emerald-500 justify-between items-center px-2 py-2">
          <Text className="text-white font-bold text-lg">{book.title}</Text>
          <Text className="text-white font-semibold">{book.author}</Text>
        </View>
        <View className="px-2 mt-2">
          <Text className="text-white/80">{book.description}</Text>
        </View>
        <View className="bg-slate-800 flex-row justify-between px-2 py-1 mt-2">
          <Text className="text-white font-semibold">Genre: {book.genre}</Text>
          <Text className="text-white font-semibold">Year: {book.year}</Text>
        </View>
      </View>
      <View className="flex-row justify-end p-2">
        <TouchableOpacity
          onPress={() => removeBook(book)}
          className="bg-red-500 px-2 py-1 rounded-md justify-end">
          <Text className="text-white font-medium text-lg">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
