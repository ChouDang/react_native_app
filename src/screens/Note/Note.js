import React, { useState, useEffect } from 'react'
import { StyleSheet ,Text, View, TouchableOpacity , Button} from 'react-native'
import GlobalFooter from "../Footer/GlobalFooter"

const Note = ({navigation,AppState}) => {

    const {note} = AppState

    return (
        <View style={styles.srceen}>
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={styles.oneFourth} >{note.noteTitle}</Text>
                    <Text style={styles.oneFourth} >{note.noteText}</Text>
                </View>
            </View>
            <GlobalFooter AppState={AppState} navigation={navigation} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    srceen : {
        flex: 1,
        justifyContent: "center",
        alignItems : 'center',
    },
    oneFourth : {
        flex:1,
        justifyContent:"center",
        textAlign: "center",
        alignItems: "center"
    },
    body: {
        flex: 8,
        width: "100%"
    },
    content: {
        flex:1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    }
})

export default Note