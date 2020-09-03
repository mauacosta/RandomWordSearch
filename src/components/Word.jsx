import React, { useState, useEffect } from 'react'

function Request(){
    return fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "1bd628e809msh1595f280593b0c3p163221jsn79c345a929cf"
        }}).then(response => response.json()).then((result) => {return result}).catch(err => {console.log(err)})
}


function Word(){
    const [word, setWord] = useState("")
    useEffect(() => {
        Request().then(obj => setWord(obj))
    }, [])

    return(
        <div>
            <p>{word.word}</p>
        </div>
    )
}

export default Word