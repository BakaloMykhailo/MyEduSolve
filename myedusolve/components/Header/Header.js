import React, {useState} from 'react';
import Link from 'next/link';

import { Down, MenuIcon } from '../../static';

// import { Menu, Dropdown } from 'antd';
import { Drawer, Button, Menu, Dropdown  } from 'antd';

import MenuMob from '../Menu'; 
import HeaderUser from './HeaderUser';



const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">Semua Kelas</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
            <a href="#">Instruktur</a>
        </Menu.Item>
    </Menu>
);

const Header = () => {

    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
 
    return (
        <header className="header">
            <div className="header__container container">
                <div className="row align-items-center">
                    <div className="header__logo col-auto">
                        <Link href="/">
                            <a>
                                <img src="../../static/logo.png" alt="MyEduSolveX" />
                            </a>
                        </Link>
                    </div>
                    <div className="header__menu-button margin-left">
                        <Button type="text" onClick={showDrawer}>
                            <MenuIcon />
                        </Button>
                    </div>
                    <nav className="header__nav align-items-center">
                        <ul className="d-flex d-flex align-items-center">
                            <li className="header__link">
                                <Dropdown overlay={menu} placement="bottomLeft">
                                    <a className="header__link" onClick={e => e.preventDefault()}>
                                    kelas   
                                    <div className="header__link-arrow">
                                            <Down />
                                    </div>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className="header__link">
                                <Link href="/">
                                    <a className="header__link">
                                        events
                                    </a>
                                </Link>
                            </li>
                            <li className="header__link">
                                <Link href="/">
                                    <a className="header__link">
                                        kontak
                                    </a>
                                </Link>
                            </li>
                        </ul> 
                    </nav>
                    <div className="header__account col-auto margin-left">
                        <HeaderUser />
                    </div>
                    <Drawer
                        placement="right"
                        closable={false}
                        visible={visible}
                        width={'100%'}
                    >
                        <MenuMob onClose={onClose}/>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}

export default Header;
