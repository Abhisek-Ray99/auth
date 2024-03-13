import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import ICONS from '../../assets/icons'
import CustomComponent from '../components'
import { windowHeight } from '../constants/dimensions'
import { useNavigation } from '@react-navigation/native'
import ROUTES from '../navigation/route'
import { fonts } from '../constants/fonts'

const OnboardingScreen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{
        backgroundColor: colors.primary,
        flex:1,
    }}>
        <View style={{position: 'absolute', right:0, top: 0}}>
            <ICONS.Ray/>
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0
            }}>
                <ICONS.Ray2/>
            </View>
        </View>
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            gap: 40
        }}>
            <View style={{paddingTop: windowHeight/3,gap: 20}}>
                <ICONS.Logo/>
                <View style={{gap: 6}}>
                    <CustomComponent.TextView title={'Zero Cost'} textStyle={fonts.heading}  />
                    <CustomComponent.TextView title={'WhatsApp Messaging'} textStyle={fonts.heading}  />
                    <CustomComponent.TextView title={'platform'} textStyle={fonts.heading}  />
                </View>
            </View>
            <CustomComponent.Buttonv2 Title={'Get Started'} onPress={()=> navigation.navigate(ROUTES.AUTH, {name: 'signup'})} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CustomComponent.TextView title={'Already have an account?'} textStyle={{}} />
                <Pressable onPress={()=> navigation.navigate(ROUTES.AUTH, {name: 'login'})}>
                    <CustomComponent.TextView title={' Sign in instead'} textStyle={{
                        color: colors.secondary
                    }} />
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})