import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useContext, useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import {ScreenView} from '../../components/PageView'
import {BooksContext} from '../../contexts/toDoList'
import {book} from '../../types/book'
import {RootStackParamsList} from '../../types/react-navigate'

type CreateBookScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'CreateBook'
>

export const CreateBookScreen = ({navigation}: CreateBookScreenProps) => {
  const {addBook} = useContext(BooksContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState(0)
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const book: book = {
      title,
      author,
      year,
      genre,
      description,
    }

    addBook(book)

    navigation.goBack()
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  return (
    <ScreenView>
      <Text className="text-emerald-500 text-xl font-bold">
        Adicione um livro
      </Text>
      <View className="mt-20">
        <View>
          <Text className="text-white text-bold mt-2">Titulo</Text>
          <TextInput
            onChangeText={value => setTitle(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Autor</Text>
          <TextInput
            onChangeText={value => setAuthor(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Ano de publicação</Text>
          <TextInput
            onChangeText={value => setYear(Number(value))}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Genero</Text>
          <TextInput
            onChangeText={value => setGenre(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Descrição</Text>
          <TextInput
            onChangeText={value => setDescription(value)}
            className="bg-white rounded-md"
          />
        </View>
      </View>
      <View className="gap-2 mt-5">
        <TouchableOpacity
          onPress={handleSubmit}
          className="px-2 py-1 bg-emerald-500 items-center rounded-md">
          <Text className="text-white font-medium text-lg">Criar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCancel}
          className="px-2 py-1 bg-red-500 items-center rounded-md">
          <Text className="text-white font-medium text-lg">Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}
