import React, { useState, useEffect } from 'react'
import { StyleSheet ,Text, View, TouchableOpacity , Button} from 'react-native'

const CreateNote = ({navigation,AppState}) => {

    return (
        <View style={styles.srceen}>
            <Text>Create Srceen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    srceen : {
        flex: 1,
        justifyContent: "center",
        alignItems : 'center',
    },
})

export default CreateNote