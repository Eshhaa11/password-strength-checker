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
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;

       switch (score) {
          case 5:
            setStrength("Quite Strong")
            break;
          case 4:
            setStrength('Strong');
            break;
          case 3:
            setStrength('Kinda weak still');

       } 


    return (
        <div>
            <h1>Password Strength Checker</h1>
        </div>
    )
}


export default Password;