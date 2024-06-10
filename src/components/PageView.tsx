import {SafeAreaView, useColorScheme} from 'react-native'

type ScreenViewProps = {
  children: React.ReactNode
}

export const ScreenView = ({children}: ScreenViewProps) => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView className="bg-slate-900 flex-1 px-2 pt-4">
      {children}
    </SafeAreaView>
  )
}
