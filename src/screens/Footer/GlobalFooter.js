import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

const GlobalFooter = ({ navigation, AppState }) => {

    return (
        <View style={styles.srceenFooter}>
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate("AllNotes")} >All Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate("CreateNote")} >Create Note</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    srceenFooter: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        borderWidth: 2
    }
})

export default GlobalFooter