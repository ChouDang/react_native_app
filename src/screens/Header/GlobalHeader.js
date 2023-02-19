import React, { useState, useEffect } from 'react'
import { StyleSheet ,Text, View, TouchableOpacity , Button} from 'react-native'

const GlobalHeader = ({navigation,AppState}) => {

    return (
        <View style={styles.srceenHeader}>
             <Text>Startup Notes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    srceenHeader : {
        flex: 1,
        width:"100%",
        justifyContent: "center",
        alignItems : 'center',
        borderBottomWidth: 2,
        borderColor: "#999"
    }
})

export default GlobalHeader