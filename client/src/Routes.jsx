import { useContext } from "react"
import Chat from "./Chat";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext"

const Routes = () => {
  const {username, id} = useContext(UserContext);

  if(username) {
    return <Chat/>
  }

  return (
    <RegisterAndLoginForm/>
  )
}
export default Routes