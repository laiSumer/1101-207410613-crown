import React,{ useState } from 'react';
import CollectionOverview_13 from './CollectionOverview_13';
import "./CollectionPreview_13.scss"
import items from './JSON';

const CollectionPreview_13 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems',menuItems);
    return (
        <div className="directory-menu">
            { menuItems.map( item => {
                const {id,title,name,remoteUrl,size} = item;
                return (
                    <CollectionOverview_13 id={id} title={title} name={name} remoteUrl={remoteUrl} size={size}/>
                )
            })

            }
        </div>
    )
}

export default CollectionPreview_13;

