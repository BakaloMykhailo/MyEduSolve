import React, { useState } from 'react';
import { Radio } from 'antd';

const Payment = () => {
    const [value, setValue] = useState(1);
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    function onChange (e) {
        setValue(e.target.value);
    };


    return (
        <div className="payment">
            <h3>Pilih penyedia kursus: </h3>
            <p className="payment__info">Pilih salah satu penyedia untuk mendapatpak voucher:</p>
            <Radio.Group onChange={onChange}  value={value}>
                <Radio style={radioStyle} value={1} className="payment__button">
                    <img src="../../static/pijar.png" alt="pijar" className="payment__image--first"/>
                </Radio>
                <Radio style={radioStyle} value={2} className="payment__button">
                    <img src="../../static/pintaria.png" alt="pintaria" className="payment__image--second"/>
                </Radio>
                <Radio style={radioStyle} value={3} className="payment__button">
                    <img src="../../static/maube.png" alt="maubelajarapa" className="payment__image--last"/>
                </Radio>
            </Radio.Group>
        </div>
    )
}

export default Payment;