import "./Header.css"
import ClaudeLogo from "../../assets/chef-claude-icon.png"

export default function Header(){
    return(
        <>
            <header className="header">
                <img src={ClaudeLogo} alt ="chef-logo" />
                <span>Chef Claude</span>
            </header>
        </>
    )
}