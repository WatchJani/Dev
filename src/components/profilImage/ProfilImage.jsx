import { useUser } from "../../contexts/UserContext"
import Styled from "./ProfilImage.module.css"

const ProfilImage = () => {

  const user = useUser()

  console.log(user.data.user.profilImage)

  return (
    <img src={user.data.user.profilImage} className={Styled.Profile} />
  )
}

export default ProfilImage