import React from 'react';

const Card = ({data}) => {
    return (
        <div className="sliderCard card">
            <div className="sliderCard__bg"
            style={{
                backgroundImage: `url("${data.imageBg}")`,
            }}>
                <div className="sliderCard__labelTop d-flex justify-content-end">
                    <p className="sliderCard__labelTop-text text-align-end">{data.labelTop}</p>
                </div>
                <div className="sliderCard__labelBottom d-flex justify-content-end align-items-end">
                    <p className="sliderCard__labelBottom-text text-align-end">{data.labelBottom}</p>
                </div>
            </div>
            <div className="sliderCard__content">
                <div className="d-flex justify-content-between align-items-end">
                    {data.brandIcon ? <>
                        <p className="font-weight-t00 tx-small text-align-end line-height-1">{data.title}</p>
                        <img src={data.brandIcon} alt="brand" />
                        </> :
                        <p className="font-weight-t00 tx-small text-align-end sliderCard__text">{data.title}</p>
                    }
                </div>
                <p className="sliderCard__content-main font-weight-500">{data.content}</p>
                <div className="sliderCard__content-bottom d-flex justify-content-between align-items-center">
                    <p className="sliderCard__price font-weight-500">{data.price}</p>
                    <p className="tx-tiny tx-color-3 text-line">{data.discon}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;