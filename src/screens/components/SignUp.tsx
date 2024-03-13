import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomComponent from '../../components'
import { colors } from '../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ICONS from '../../../assets/icons'
import { useNavigation } from '@react-navigation/native'
import { fonts } from '../../constants/fonts'

const SignUp = ({
  toggle
}:{
  toggle?: any;
}) => {

  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [show, setShow] = useState(true);

  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation()

  return (
    <View style={{
      gap: 20
    }}>
      <CustomComponent.TextView title={'Please sign-up for your account'} textStyle={[fonts.heading,{
        color: colors.light, fontSize: 20
      }]} />
      <View style={{
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <Image
            style={[{width: '100%', height: '100%', position: 'absolute'}]}
            source={{uri: 'https://s3-alpha-sig.figma.com/img/03ba/29a1/746d1886e35730c12114b06c432b0314?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxW0b7-5b3gUTdaD1VXN0V5NW6JzLVjlFVI-2yT02WN9suPUGfSZnzjmEwlDaDkl9UIdpsSvICfoUDBeHg2tr249g6D31Y5KLM5~SD3hGMjhDaRJSU0VFQI2CUbJCq4TbDM5QXSvGrfpIg7ftJ-bBdc-zsGkWMxTiw2pmF7As971CQW3salfhi5N1jNFGJ7Ey5K9t01nvr2EKcWZGKQHldexRXY~d6Q9vWWJwPW56BhGzWadvxKpamefbMQZsgTFoW2~MhIcOSOePkgZR8vVnQVY-X1LZUERZB5Y~Dd0UdzTwFCHC6dR5eXsSn9BW4rdRj0EVoRThadzpdgkc8pidA__'}}
        />
        <LinearGradient
            colors={['rgba(38, 38, 39, 0.9)', '#6A6E5D']}
            start={{ x: 0.5, y: 0.5}}
            end={{ x: 1, y: 0 }}
            style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                borderRadius: 10
            }}
        />
        <View style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          gap: 20
        }}>
          <CustomComponent.InputField 
            placeholder={"Name"}  
            onChangeText={value => setMail(value)} 
            cursorColor={colors.light}
            placeholdercolor={colors.light}
          />
          <CustomComponent.InputField 
            placeholder={"Email"}  
            onChangeText={value => setMail(value)} 
            cursorColor={colors.light}
            placeholdercolor={colors.light}
          />
          <CustomComponent.InputField
              placeholder={"Password"} 
              secureTextEntry={show ? false : true} 
              onChangeText={value => setPwd(value)}
              cursorColor={colors.light}
              placeholdercolor={colors.light}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)} style={{padding: 10}}>
                    <MaterialCommunityIcons
                      name={show ? "eye-outline" : "eye-off-outline"}
                      color={colors.light}
                      size={24}
                    />
                </Pressable>
              }
            />
            <CustomComponent.OptionCheckbox
              label={'I agree'}
              value={isChecked}
              onValueChange={() => setChecked(!isChecked)}
              redirect={'to privacy policy & terms'}
            />
            <CustomComponent.AppButton
              title="Get Started"
              titleStyle={{color: colors.dark}}
              color={colors.dark}
              // onPress={()=> navigation.navigate('login')}
             />
             <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
             }}>
                <Text style={{color: colors.light}}>{`Already have an account? `}</Text>
                <TouchableOpacity onPress={toggle}>
                  <Text style={{color:colors.secondary}}>Sign in instead</Text>
                </TouchableOpacity>
             </View>
             <Text style={{
              paddingVertical: 10,
              textAlign: 'center',
              color: colors.light
             }}>
              or
             </Text>
             <CustomComponent.AppButton
              title="Continue with Google"
              titleStyle={{color: colors.light}}
              BtnStyle={{backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.light}}
              leftIcon={<ICONS.GoogleIcon/>}
             />
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color: '#fff'
  },
  checkbox: {
    margin: 8,
  },
});