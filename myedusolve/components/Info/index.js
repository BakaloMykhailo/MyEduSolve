import React, { useState, useEffect } from 'react';
import InfoItem from './InfoItem';

const informations = [
    {
        title: 'Apa yang Dipelajari',
        datas: [ 'textxxxxxx11111', '11111', '1111'],
        id: '79',
        key: '74'
    },
    {
        title: 'Apa yang Perlu Disiapkan',
        datas: [ 'textxxxxxx222222', '22222'],
        id: '78',
        key: '75'
    },
    {
        title: 'Siapa yang Harus Mendaftar',
        datas: [ 'textxxxxxx33333', '3333'],
        id: '77',
        key: '76'
    },
]

const text = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are goingto use a passage of Lorem Ipsum, you need to be sure. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are goingto use a passage of Lorem Ipsum, you need to be sure. ';

const Info = () => {
    const [readMore, setReadMore] = useState(false);
    const [showText, setShowText] = useState(false);
    const [hiddenText, setHiddenText] = useState(false);

    useEffect(() => {
        if (text.length > 300) {
            setHiddenText(text.substr(300, text.length));
            setShowText(text.substr(0, 300));
        }
    }, []);

    const handleReadMore = () => {
        setReadMore(true);
    }

    const handleReadLess = () => {
        setReadMore(false);
    }

    return (
        <section className="info card">
            <h2 className="info__title">Deskripsi</h2>
            {text.length < 50 ? 
                <p className="font-weight-300 info__text">{text}</p>
                : 
                <p>{showText}
                    {!readMore ? 
                        <>
                            <span>.. </span>
                            <span className="info__button tx-pink" onClick={handleReadMore}>Read more</span> 
                        </>
                    :
                        <>
                            <span>{hiddenText}</span>
                            <span className="info__button tx-pink" onClick={handleReadLess}> Read less</span>
                        </>
                    }
                </p>}
            {informations.map(({datas, title, id, key}) => (
                <InfoItem datas={datas} key={key} title={title} index={id}/>
            ))}
        </section>
    )
}

export default Info;
