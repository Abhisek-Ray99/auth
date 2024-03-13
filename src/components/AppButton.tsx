import { StyleSheet, Pressable, View } from 'react-native'
import React, {memo} from 'react'
import CustomComponent from '.'
import { colors } from '../constants/colors'

const AppBtn = ({
    title,
    titleStyle,
    BtnStyle,
    color = 'primary',
    leftIcon = null,
    onPress,
    gap=10,
}) => {
  return (
    <View style={[styles.container, BtnStyle]}>
            <Pressable
                android_ripple={{color: 'grey', borderless: true}}
                style={[styles.button, {gap: gap}]}
                onPress={onPress}
            >
                {leftIcon}
                {title && <CustomComponent.TextView
                    textStyle={[styles.text, titleStyle]}
                    title={title}
                />}
            </Pressable>
    </View>
  )
}

export default memo(AppBtn)

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        elevation: 10, 
        height: 50,
        justifyContent: 'center',
        borderRadius: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: colors.light,
        textAlign: 'center',
        fontSize: 14
    }
})