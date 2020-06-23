import React from 'react';
import Link from 'next/link';

import {Account} from '../../static';

const HeaderUser = () => {
  return (
    <div className="header__user">
      <div className="header__user-icon">
          <Account />
      </div>
      <Link href="/"><a>masuk</a></Link><span className="header__user-separator"> / </span>
      <Link href="/"><a> daftar</a></Link>
    </div>
  )
}

export default HeaderUser;