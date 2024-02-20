import MenuItem from './MenuItem';
import { BOOKMARKS, EXPLORE, HOME, MESSAGES, NOTIFICATION } from './images';
import './style.css';
function SideMenu() {
    const menu = [
        {
            icon: HOME,
            name: 'Home'
        },
        {
            icon: EXPLORE,
            name: 'Explore'
        },
        {
            icon: NOTIFICATION,
            name: 'Notification'
        },
        {
            icon: MESSAGES,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS,
            name: 'Bookmarks'
        },
    ]
    return (
        <div className="side-menu w-25 mt-3 mx-5 ">
            <img
                src={require('./images/facebook_logo.png')}
                class="logo-icon"
                alt=""
            />
            {menu.map((item, index) => (
                <MenuItem icon={item.icon} name ={item.name} key={index}/>
            ))}


        </div>

    )
}
export default SideMenu;