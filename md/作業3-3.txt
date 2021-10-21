import React,{ useState } from 'react';
import Menultem_13 from './Menultem_13';
import "./Directory_13.scss"
import items from './menu-items-data';

const Directory_13 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems',menuItems);
    return (
        <div className="directory-menu">
            { menuItems.map( item => {
                const {id,name,remoteUrl,size} = item;
                return (
                    <Menultem_13 id={id} name={name} remoteUrl={remoteUrl} size={size}/>
                )
            })

            }
        </div>
    )
}

export default Directory_13;

