import React from 'react';

const datas = [
    {
        first: 'Durasi',
        last: '3 Jam',
        id: '59'
    },
    {
        first: 'Tingkat keahlian',
        last: 'Semua tingkat',
        id: '58'
    },
    {
        first: 'Bahasa',
        last: 'Bahasa Indonesia',
        id: '57'
    },
    {
        first: 'Penilaian',
        last: 'Ada',
        id: '56'
    }
];

const Fitur = () => {
    return (
        <section className="fitur card">
            <h3 className="card__title fitur__title">Fitur Kelas</h3>
            <ul className="list-reset fitur__list">
                {datas.map(({ first, last, id }) => (
                    <li key={id} className="fitur__item d-flex justify-content-between">
                        <p className="font-weight-500">{first}</p>
                        <p>{last}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Fitur;