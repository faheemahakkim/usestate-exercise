import { useEffect, useState } from "react"

function Luke(){
const [name, setName] = useState('')
const[height,setHeight] =useState('')
const[hair_color,setHair_color] =useState('')
const[skin_color,setSkin_color] =useState('')
const[eye_color,setEye_color] =useState('')
const[birth_year,setBirth_year] =useState('')
const[gender,setGender] =useState('')





    useEffect(() => {
        fetch('https://swapi.dev/api/people/1')
        .then(res =>res.json())
        .then(data => {
        
    setName(data.name)
    setHeight(data.height)
    setSkin_color (data.skin_color)
    setHair_color(data.hair_color)
    setBirth_year (data.birth_year)
    setEye_color(data.eye_color)
    setGender (data.gender)
        })
    },[])
    return (
        <div>
            <p>Name:{name} </p>
            <p>height:{height}</p>
            <p>hair_colour:{hair_color}</p>
            <p>Eye_colour:{eye_color}</p>
<p>Skin_colour:{skin_color}</p>
<p>Birth_year:{birth_year}</p>
<p>Gender:{gender}</p>

        </div>
    )
}


export default Luke