import React from 'react'
import TuneInfo from '../components/TuneInfo'

const TuneBox = ({tuneInfo}) => {
    console.log(tuneInfo)
    return (
        <>
        
            <TuneInfo tuneInfo={tuneInfo}/>


        </>
    )
}

export default TuneBox
