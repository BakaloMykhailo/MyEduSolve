import React from 'react';
import Link from 'next/link';
import MenuItem from './MenuItem';
import HeaderUser from '../Header/HeaderUser';

import { 
    CloseIcon, 
    MenuTwitter, 
    MenuFacebook,
    MenuInstagram, 
    MenuYoutobe 
} from '../../static';
import { Button } from 'antd';

const data = [
    { 
        links: [
          { 
            title:'BERANDA', 
            link:'/'
          }
        ],
        id: '39'
    },
    {
        header: 'KELAS SAYA',
        links: [
          {title:'SEMUA KELAS', link:'/'},
          {title:'INSTRUKTUR', link:'/'}
        ],
        id: '38'
    },
    {
        links: [
          {
            title:'EVENT', 
            link:'/'
          }
        ],
        id: '37'
    },
    {
        links: [
          {
            title:'KONTAK', 
            link:'/'
          }
        ],
        id: '36'
    }
]

const MenuMob = ({onClose}) => {

    return (
        <div className="menu">
            <header className="menu__header d-flex">
                <h2 className="menu__title">menu</h2>
                <div className="margin-left">
                    <Button type="text" onClick={onClose}>
                        <CloseIcon />
                    </Button>
                </div>
            </header>
            <nav className="menu__nav">
                <ul className="menu__list">
                    {data.map(el => (
                        <li key={el.id} className="menu__list-item">
                            <MenuItem data={el} onClose={onClose}/>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="menu__account d-flex">
                <HeaderUser />
            </div>
            <div className="menu__socials">
                <div className="d-flex justify-content-between">
                    <Link href="/">
                            <a>
                                Term and Conditions
                            </a>
                        </Link>
                    <Link href="/">
                            <a>
                                Privacy Policy
                            </a>
                        </Link>
                </div>
                <ul className="menu__socials-list d-flex justify-content-between"> 
                    <li>
                        <Link href="/">
                            <a target="_blank">
                                <MenuTwitter /> 
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a target="_blank">
                                <MenuFacebook />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a target="_blank">
                                <MenuInstagram />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a target="_blank"> 
                                <MenuYoutobe />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMob;