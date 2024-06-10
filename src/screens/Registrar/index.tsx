import AsyncStorage from '@react-native-async-storage/async-storage'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import {ScreenView} from '../../components/PageView'
import {RootStackParamsList} from '../../types/react-navigate'
import {user} from '../../types/user'

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'Register'
>

export const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  //TODO: Save user into async storage
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    const user: user = {
      email,
      user: usuario,
      password: senha,
      phone: telefone,
    }

    await AsyncStorage.setItem('user', JSON.stringify(user))

    navigation.goBack()
  }

  const handleCancel = () => {
    navigation.goBack()
  }

  return (
    <ScreenView>
      <Text className="text-white text-xl">Registre-se</Text>
      <View className="mt-20">
        <View>
          <Text className="text-white text-bold mt-2">Nome</Text>
          <TextInput
            onChangeText={value => setUsuario(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Telefone</Text>
          <TextInput
            onChangeText={value => setTelefone(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">E-mail</Text>
          <TextInput
            onChangeText={value => setEmail(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white text-bold mt-2">Senha</Text>
          <TextInput
            onChangeText={value => setSenha(value)}
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
