import { createContext } from "react";



export const AuthContext = createContext();


function AuthProvider({children}) {
    const serveUrl = "http://localhost:3000"

    const value = {
        serveUrl
    }

    return (
        <AuthContext.Provider value={value}>
            {children}

        </AuthContext.Provider>
    )

}


export default AuthProvider
