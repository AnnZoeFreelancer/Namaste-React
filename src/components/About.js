import UserContext from "../utils/UserContext";
import ProfileFunctional from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      {/* {<Outlet/>} */}
      <ProfileFunctional name={"Zoe"} />
      <ProfileClass name={"Zowie"} xyz={"abc"} />
    </div>
  );
};

// class About extends React.Component{
class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent- constructor");
  }
  componentDidMount() {
    //API Call
    console.log("parent- componentDidMount");
    // this.timer= setInterval(()=>{
    //     console.log("set Interval after every second");
    // },1000);
    // console.log(this.timer);
  }
  componentDidUpdate() {
    console.log("parent-componentDidUpdate");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("parent- componentWillUnmout");
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {/* {(value) => console.log("UserContextConsumer", value)} */}
          {({ user }) => (
            <span className="font-bold ">
              {user.name} - {user.email}
            </span>
          )}
        </UserContext.Consumer>
        {/* {<Outlet/>} */}
        <ProfileFunctional name={" Zoe"} />
        <ProfileClass name={" First Child"} xyz={"abc"} />
        <ProfileClass name={" Second Child"} xyz={"abc"} />
      </div>
    );
  }
}

export default About;
