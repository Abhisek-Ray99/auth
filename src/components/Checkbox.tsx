import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { fonts } from "../constants/fonts";
import { colors } from "../constants/colors";

type OptionCheckboxProps = {
  label?: string;
  value?: any;
  onValueChange?: any;
  redirect?: any;
};

const OptionCheckbox: React.FC<OptionCheckboxProps> = ({
  label,
  value,
  onValueChange,
  redirect
}) => {
  const handlePress = () => {
    if (onValueChange) {
      onValueChange(!value);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={{
        height: 50,
        borderBottomColor: "rgba(0,0,0,0.3)",
        borderBottomWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <View
          style={[
            {
              width: 20,
              height: 20,
              borderWidth: 1,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8,
            },
            {
              backgroundColor: value ? colors.secondary : 'transparent',
              borderColor: value ? colors.secondary : colors.secondary,
            },
          ]}
        >
          {value && <Feather name="check" size={20} color={colors.dark} /> }
        </View>
        <View style={{flexDirection: 'row' , alignItems: 'center'}}>
            <Text style={[fonts.bodyText,{
            fontFamily: 'InterMedium', letterSpacing: -0.36, color: colors.light,
            }]}>{label}</Text>
            <TouchableOpacity onPress={()=>{}}>
                <Text style={[{color: colors.secondary}]}>{` ${redirect}`}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OptionCheckbox;
