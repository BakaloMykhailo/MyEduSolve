import React from 'react';
import Link from 'next/link';

import {Instagram, Facebook, Twitter, Youtube, Whatsapp, List, File} from '../../static';

const socialLinks = [
    {
        href: '/',
        title: <Twitter />,
        id: '69'
    },
    {
        href: '/',
        title: <Facebook />,
        id: '68'
    },
    {
        href: '/',
        title: <Instagram />,
        id: '67'
    },
    {
        href: '/',
        title: <Youtube />,
        id: '66'
    },
    {
        href: '/',
        title: <Whatsapp />,
        id: '65'
    }
]

const Social = () => {
    return (
        <section className="social card">
            <div className="social__bagikan">
                <h3 className="social__title">Bagikan</h3>
                <ul className="list-reset d-flex social__list">
                    {socialLinks.map(({href, title, id}) => (
                        <li className="social__list-item" key={id}>
                            <Link href={href}>
                                <a className="social__link">{title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="social__termasuk">
                <h3 className="social__title social__termasuk-title">Termasuk</h3>
                <div className="d-flex">
                    <List />
                    <a href="#" className="social__link-pad">Tugas</a>
                </div>
                <div className="d-flex social__wrap">
                    <File />
                    <a  href="#" className="social__link-pad">Sertifikat Penyelesaian</a>
                </div>
            </div>
        </section>
    )
}

export default Social;