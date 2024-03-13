import { Text } from 'react-native'
import React from 'react'
import { fonts } from '../constants/fonts'

const TextView = ({
    title,
    textStyle
}:{
  title: any;
  textStyle?: any;
}) => {
  return (
    <Text style={[fonts.bodyText, textStyle]}>{title}</Text>
  )
}

export default TextView