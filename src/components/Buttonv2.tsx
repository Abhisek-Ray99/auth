import { StyleSheet, Text, View, Image, Pressable, Animated, Dimensions } from 'react-native'
import React, {useRef, memo} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { windowHeight } from '../constants/dimensions';
import TextView from './TextView';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';


const ImgBtn = ({
    onPress,
    Title,
    disabled,
    leftIcon,
    style
}:{
    onPress: any,
    Title: any,
    disabled?: any,
    leftIcon?: any,
    style?: any
}) => {

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    // Animate the button press effect
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false, // Set to false when using layout properties like scale
    }).start();
  };

  const handlePressOut = () => {
    // Reset the button scale to its original size
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
        onPress={disabled ? null :onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{height: 50}}
    >
        <Animated.View style={[{opacity: disabled ? 0.4 : 1, overflow: 'hidden', borderWidth: 1, borderColor: 'grey', borderRadius: 10}, { transform: [{ scale: !disabled ?scaleValue: 1 }] }]}>
            <Image
            style={[{width: '100%', height: '100%'},styles.img, style]}
            source={{uri: 'https://s3-alpha-sig.figma.com/img/03ba/29a1/746d1886e35730c12114b06c432b0314?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxW0b7-5b3gUTdaD1VXN0V5NW6JzLVjlFVI-2yT02WN9suPUGfSZnzjmEwlDaDkl9UIdpsSvICfoUDBeHg2tr249g6D31Y5KLM5~SD3hGMjhDaRJSU0VFQI2CUbJCq4TbDM5QXSvGrfpIg7ftJ-bBdc-zsGkWMxTiw2pmF7As971CQW3salfhi5N1jNFGJ7Ey5K9t01nvr2EKcWZGKQHldexRXY~d6Q9vWWJwPW56BhGzWadvxKpamefbMQZsgTFoW2~MhIcOSOePkgZR8vVnQVY-X1LZUERZB5Y~Dd0UdzTwFCHC6dR5eXsSn9BW4rdRj0EVoRThadzpdgkc8pidA__'}}
            />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.9)','rgba(20, 21, 23, 0.8)']}
                start={{ x: 1, y: 0.5}}
                end={{x: 0, y: 0}}
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    borderRadius: 10
                }}

            />
            <View style={styles.textview}>
                {leftIcon}
                <TextView title={Title} textStyle={fonts.bodyTextBold} /> 
            </View>
        </Animated.View>
    </Pressable>
  )
}

export default memo(ImgBtn)

const styles = StyleSheet.create({
    img:{
        borderRadius: 10,
    },
    textview:{
        position: 'absolute', 
        flexDirection: 'row',
        alignItems: 'center',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 12, 
        justifyContent: 'center',
        gap: 10,
        paddingTop: 10
    }
})