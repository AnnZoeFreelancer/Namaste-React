import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="text-center  italic p-10 m-10 ">
      This site is developed by {user.name}. Reach me through {user.email}
    </h4>
  );
};

export default Footer;
