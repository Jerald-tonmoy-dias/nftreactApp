import { View, Text, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import React from 'react'

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
    // return (
    //     <View>
    //         <Text>FocusedStatus</Text>
    //     </View>
    // )
}

export default FocusedStatusBar