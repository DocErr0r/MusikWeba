import React from 'react';
import { brow, dis, like, list } from '../svgs/svgs';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';

export default function Menu(props) {
    const menuItem = [
        {
            icon: dis,
            path: '/discover',
            name: 'Discover',
        },
        {
            icon: brow,
            path: '/browse',
            name: 'Browse',
        },
        {
            icon: like,
            path: '/likes',
            name: 'Likes',
        },
        {
            icon: list,
            path: '/playlist',
            name: 'playlist',
        },
    ];
    return (
        <div className="menu">
            <div id="menu" role="menu">
                {menuItem.map((item, index) => (
                    <div key={index}>
                        {index === 2 && <h4>My collection</h4>}
                        <div className="submenu">
                            <Link to={item.path} className="block link" activeclassname="active" onClick={props.closer} >
                                <img src={item.icon} alt="" />
                                {item.name}
                            </Link>
                        </div>
                    </div>
                ))}
                <div className="settings submenu">
                    <h4>settings</h4>
                    <div className="flex link center-y">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        dark mode
                    </div>
                    <a className="block link" href="/" role="menuitem">
                        <DownloadIcon />
                        download
                    </a>
                </div>
            </div>
            <div className="sidebar-footer">
                <ul className="grid mt-1">
                    <li className="none">Blog</li>
                    <li className="none">Pricing plan</li>
                    <li className="none">Privacy</li>
                    <li className="none">Terms</li>
                </ul>
                <p className="mt-1">@2022-2024 Music Theme</p>
            </div>
        </div>
    );
}
