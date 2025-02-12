import { useState } from "react";

const Auth = () => {

    const [initialButton, setInitialButton] = useState("Login")
    return (
        <>
            <div className="login-modal">
                <h1 onClick={() => initialButton === "Login" ? setInitialButton("Logout") : setInitialButton("Login")} >{initialButton}</h1>
            </div>
        </>
    )
}

export default Auth;