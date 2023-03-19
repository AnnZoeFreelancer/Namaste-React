import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        //Craete State
        this.state = {
            count:0,
            count2:0,
            count3:0,
            userInfo: {
                name: "DummyName",
                location: "Dummy Location",
            }
        };
    
        console.log("child-constructor" + this.props.name);
    }

    async componentDidMount(){
        //API Calls
        const data = await fetch("  https://api.github.com/users/annzoefreelancer");
        const json = await data?.json;
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("child-componentDidMount, api calls here" + this.props.name);
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
            console.log("if count 1 or 2 changed");
        }
        if(this.state.count !== prevState.count){
            console.log("if count 3 changed");
        }
        console.log("child-componentDidUpdate" + this.props.name);
    }
    componentWillUnmount(){
        console.log("child-componentWillUnmount"+ this.props.name);
    }
    render(){
        //we can destructure it
        const {count,count2,count3} = this.state;
        console.log("child-render"+ this.props.name);
        return  (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.state.userInfo?.name}</h3>
                <img src={this.state.userInfo?.avatar_url}/>
                <h3>Public Repositories: {this.state.userInfo?.public_repos}</h3>
                <h2>Name: {this.props.name}</h2>
                <h2>Name: {this.props.xyz}</h2>
                <h2>Count: {count}</h2>
                <h2>Count: {count2}</h2>
                <h2>Count: {count3}</h2>
                {/* IMPORTANT: We do not mutate state directly */}
                {/* NEVER do this.sate = something */}
                <button onClick={()=>{
                    this.setState({
                        count2:1,
                        count3:2,
                    })
                    }}>SetCount</button>
            </div>
        )
    }
}

export default Profile;