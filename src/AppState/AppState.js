 import React, {useState, useEffect} from 'react'
import AppNavigtion from "../AppNavigation/AppNavigation"

const AppState = () => {

    const [allNotes, setAllNotes] = useState([
        { 
            nodeID: 1,
            noteTitle : "First Idea",
            noteText : "First Text"
        },
        { 
            nodeID: 2,
            noteTitle : "Secon Idea",
            noteText : "Secon Text"
        },
        { 
            nodeID: 3,
            noteTitle : "Thir Idea",
            noteText : "Thir Text"
        }
    ])

    const [note, setNote] = useState({})
 
    const AppState ={
        allNotes,
        setAllNotes,
        note,
        setNote
    }


  return <AppNavigtion AppState={AppState} ></AppNavigtion>
    
}

export default AppState