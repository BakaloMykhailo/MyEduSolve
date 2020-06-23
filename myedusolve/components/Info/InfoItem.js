import React from 'react';
import { Check } from '../../static';

const InfoItem = ({title, datas, index}) => {
    return (
        <div key={index}>
            <h2 className="infoItem__title">{title}</h2>
            <ul className="list-reset">
                {datas.map((data, index) => (
                    <li key={index} className="infoItem__list-item d-flex align-items-center">
                        <Check />
                        <span className="infoItem__item-text">
                            {data}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InfoItem;