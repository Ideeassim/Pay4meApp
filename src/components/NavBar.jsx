import DownloadBar from "./DownloadBar";
import group from '../assets/Group.png';

function NavBar() {
   return <div className="navBar">
        <div className="pay4me"><h2>Pay4meApp</h2></div>
        <div className="pagesBox">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Support</p>
        </div>
        
        <DownloadBar/>
   </div>
}

export default NavBar;