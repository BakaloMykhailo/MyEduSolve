import React from 'react';
import Ticket from './Ticket';
import Price from './Price';
import Payment from './Payment';
import Button from '../Button';

const Bar = () => {
    return (
        <section className="bar card">
            <p className="font-weight-500">Harga:</p>
            <Price />
            <Ticket/>
            <Payment />
            <div className="bar__button">
                <Button  className={'btn btn-big btn-pink'} >Dapatkan Voucher</Button>
            </div>
            <p className="bar__text">Anda juga dapat membeli kursus ini di website MyEdusolve</p>
            <Button  className={'btn btn-big btn-white'}>Beli Di MyEduSolve</Button>
        </section>
    )
}

export default Bar;