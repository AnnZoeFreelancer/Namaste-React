import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "User",
    email: "dummy@gmail.com",
  },
});
export default UserContext;
