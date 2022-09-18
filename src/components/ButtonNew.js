import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { Entypo, Feather } from "@expo/vector-icons";


export default function  ButtonNew({size, color, isFocused}) {
  
    return (
      <View style={[styles.container, { backgroundColor: isFocused?  "#3eccf5": "#3fdfff"}]}>
        <Entypo name="plus"  size={size} color={isFocused? "#FFF": "#eaeaea"} />
      </View>
    )
 
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20

    }
  })
 