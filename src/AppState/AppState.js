 import React, {useState, useEffect} from 'react'
import AppNavigtion from "../AppNavigation/AppNavigation"

const AppState = () => {

    const [allNotes, setAllNotes] = useState([
        { 
            nodeID: 1,
            noteTitle : "First Idea"
        },
        { 
            nodeID: 2,
            noteTitle : "Secon Idea"
        },
        { 
            nodeID: 3,
            noteTitle : "Thir Idea"
        }
    ])

    const [note, setNotes] = useState({})
 
    const AppState ={
        allNotes,
        setAllNotes,
        note,
        setNotes
    }


  return <AppNavigtion AppState={AppState} ></AppNavigtion>
    
}

export default AppState