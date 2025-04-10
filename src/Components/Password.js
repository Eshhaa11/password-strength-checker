import { useState } from "react";
import './Password.css'

function Password () {
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Password Strength Checker</h1>
        </div>
    )
}


export default Password;