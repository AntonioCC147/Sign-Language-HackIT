import { getLoggedInUser } from "./network/api";
import { createContext, useState, useEffect } from "react";

const AppContext = createContext({
    loggedUser: null,
    setLoggedUser: () => {}
});

export default function AppProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getLoggedInUser().then(res => setUser(res.data)).catch(err => console.log(err));
        }
    }, [user]);

    let value = {loggedUser: user, setLoggedUser: setUser};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };