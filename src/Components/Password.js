import { useState } from "react";
import './Password.css'

function Password () {
    const [password, setPassword] = useState("")
    const [strength, setStrength] = useState("")

    const checkStrength = (pass) => {
        let score = 0;
        if (pass.length >=8 ) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[a-z]/.test(pass)) score++;

    return (
        <div>
            <h1>Password Strength Checker</h1>
        </div>
    )
}


export default Password;