import { useState } from "react";
import "./Password.css";

function Password() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    switch (score) {
      case 5:
        setStrength("Yesss...Quite Strong");
        break;
      case 4:
        setStrength("Strong");
        break;
      case 3:
        setStrength("Almost becoming strong");
        break;
      case 2:
        setStrength("Kinda Weak still");
        break;
      default:
        setStrength("Weak");
        break;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  return (
    <div className="pass-cont">
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p className={`strength ${strength.replace(/\s/g, "").toLowerCase()}`}>
        Strength: {strength}
      </p>
    </div>
  );
}

export default Password;
