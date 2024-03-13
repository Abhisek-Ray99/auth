import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { windowHeight } from '../constants/dimensions'

const AuthScreen = ({route}:{route?:any}) => {

  const [isLogin, setIsLogin] = useState(route?.params?.name === 'login');

  const toggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <SafeAreaView style={{
      backgroundColor: colors.primary,
      flex:1,
    }}>
      <View style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: windowHeight/6
      }}>
        {isLogin ? <Login toggle={toggle} /> : <SignUp toggle={toggle} />}
      </View>
    </SafeAreaView>
  )
}

export default AuthScreen