import React, { useState } from 'react';
import Link from 'next/link';

import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MenuItem = ({data, onClose} ) => { 
  const [active, setActive] = useState(false);
  const { Panel } = Collapse;
  const { title, link } = data.links[0];

  const links = data.header &&
    data.links.map( (el,id) => {
      return ( 
        <li key={id}>
          <Link href={el.link}>
              <a className="menu-item__link" onClick={onClose}>
                {el.title}
              </a>
          </Link>
        </li>
      ) 
    });

  return (
    <div className="menu-item">
      {
        data.header ? 
          <Collapse 
            expandIconPosition='right'
            bordered={false}
            style={active ? {backgroundColor: '#373737'} : {backgroundColor: '#000000'}}
            expandIcon={({ isActive }) => {
              setActive(isActive)
              return <DownOutlined style={{fontSize:"16px"}} rotate={isActive ? 180 : 0} /> 
            }}
          >
              <Panel showArrow={true} header={data.header} key="1">
                <ul>
                  {links}
                </ul>
              </Panel>
          </Collapse>
          :
          <Link href={link} >
              <a className="menu-item__link" onClick={onClose}>
                {title}
              </a>
          </Link>
      }
    </div> 
  )
};

export default MenuItem;