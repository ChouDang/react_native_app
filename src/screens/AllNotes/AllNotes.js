import React, { useState, useEffect } from 'react'
import { StyleSheet ,Text, View, TouchableOpacity , Button} from 'react-native'
import Constants from "expo-constants"
import GlobalHeader from '../Header/GlobalHeader'
import GlobalFooter from "../Footer/GlobalFooter"

const AllNotes = ({navigation,AppState}) => {

    const {allNotes,setNote} = AppState

    const handlePress = (item) =>{
        setNote(item)
        navigation.navigate("Note")
    }

    return (
        <View style={styles.srceen}>
            <GlobalHeader/>
            <View style={styles.body} >
                {allNotes.map((item,index) => {
                    return <TouchableOpacity style={styles.button} key={index} onPress={()=>handlePress(item)} ><Text >{item.noteTitle}</Text></TouchableOpacity>
                })}
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
        // paddingTop : Constants.statusBarHeight,
        backgroundColor: "#fff"
    },
    body: {
        flex:8,
        width: "100%"
    },
    oneFourth : {
        flex:1,
        width: "100%",
        borderWidth: 4,
    },
    button : {
        padding: 20,
        margin: 20,
        borderWidth:2
    }
})

export default AllNotes