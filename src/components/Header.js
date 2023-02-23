export const Title=()=>{
    return(
    <img alt="logo" className="logo" src="https://d2x91cbkpb2oh5.cloudfront.net/c8880e38e4fc37c8bd8c37610c492e5c_scale190x150.jpg"/>
    )
}
const Header = () =>{
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;