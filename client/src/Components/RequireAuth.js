import { useContext } from "react"
import Login from "../Components/Login"
import { AuthContext } from "./AuthContext"

export default function RequireAuth(props){
    const {user, setUser} = useContext(AuthContext)
    return(
        user 
        ?
        props.children
        :
        <Login />
    )
}