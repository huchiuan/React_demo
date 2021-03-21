import React from 'react'
//use rafce
const friend = ({name,age,desc}) => {
    //console.log(props);
    return (
        <div>
            <h1>Name:{name}</h1>
            <h2>age:{age}</h2>
            <p>desc:{desc}</p>
        </div>
    )
}

export default friend
