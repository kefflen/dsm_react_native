import AsyncStorage from '@react-native-async-storage/async-storage'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useEffect, useState} from 'react'
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {ScreenView} from '../../components/PageView'
import {RootStackParamsList} from '../../types/react-navigate'
import {user} from '../../types/user'

type LoginScreenProps = NativeStackScreenProps<RootStackParamsList, 'Login'>

export const LoginScreen = ({route, navigation}: LoginScreenProps) => {
  const [savedUser, setSavedUser] = useState<user | null>(null)
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then(data => {
      if (data) {
        setSavedUser(JSON.parse(data))
      }
    })
  }, [])

  const handleRegister = () => {
    navigation.navigate('Register')
  }

  const handleLogin = async () => {
    const userJSON = await AsyncStorage.getItem('user')
    const user = userJSON ? JSON.parse(userJSON) : null

    if (!user) {
      Alert.alert('Crie um usuario antes de logar')
      return
    }

    if (user?.password !== password || user?.user !== usuario) {
      Alert.alert('Usuario ou senha invalidos')
      return
    }

    navigation.navigate('Home')
  }

  return (
    <ScreenView>
      <Text className="text-xl text-emerald-500 font-bold">Faça seu login</Text>
      <View className="mt-20">
        <View>
          <Text className="text-white font-bold">Usuario</Text>
          <TextInput
            onChangeText={value => setUsuario(value)}
            className="bg-white rounded-md"
          />
        </View>
        <View>
          <Text className="text-white font-bold">Senha</Text>
          <TextInput
            onChangeText={value => setPassword(value)}
            className="bg-white rounded-md"
          />
        </View>
      </View>
      <View className="flex flex-row gap-2 mt-1 justify-between">
        <TouchableOpacity
          onPress={handleLogin}
          className="px-2 py-1 bg-emerald-500 rounded-md flex-1 items-center">
          <Text className="text-white text-semibold text-lg">Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 py-1 bg-emerald-500 rounded-md flex-1 items-center">
          <Text
            onPress={handleRegister}
            className="text-white text-semibold text-lg">
            Cadastrar usuario
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  )
}
