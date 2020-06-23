import React from 'react';
import Link from 'next/link';

import {Instagramdef, Instagram, Facebook, Twitter, Youtube} from '../../static';

const socialLinks = [
    {
        href: '/',
        title: <Twitter />,
        id: '99'
    },
    {
        href: '/',
        title: <Facebook />,
        id: '98'
    },
    {
        href: '/',
        title: <Instagram />,
        id: '97'
    },
    {
        href: '/',
        title: <Youtube />,
        id: '96'
    },
]

const links = [
    {
        href: '/',
        title: 'Term and Conditions',
        id: '95'
    },
    {
        href: '/',
        title: 'Privacy Policy',
        id: '94'
    }
]

const FooterBottom = () => {
    return (
        <div className="footerBottom">
            {/* gradient for instagram icon  */}
            <Instagramdef />
            <div className="footerBottom__container container">
                <div className="footerBottom__block d-flex justify-content-between align-items-center">
                    <div className="footerBottom__links">
                        {links.map(({ href, title, id }) => (
                            <Link href={href} key={id}>
                                <a className="footerBottom__link">
                                    {title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="footerBottom__links">
                        {socialLinks.map(({ href, title, id }) => (
                            <Link href={href} key={id}>
                                <a className="footerBottom__social-link">
                                    {title}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;