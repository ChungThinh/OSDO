import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { 
    MaterialIcons,
} from "@expo/vector-icons";

const Closet = (props) => {
  return (
    <View style={{borderBottomWidth: 1, flexDirection: 'row', marginBottom: 20, borderBottomColor: 'gray'}}>
      <Text style={{flex: 1, fontSize: 25}}>{props.thing}</Text>
      <TouchableOpacity style={{justifyContent: 'flex-end'}}>
        <MaterialIcons name="arrow-drop-down" size={40} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

export default Closet;