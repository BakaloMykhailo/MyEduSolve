import React from 'react';
import Link from 'next/link';

const tags = [ 
    {
        name: 'Design',
        id: '89'
    }, 
    {
        name: 'Graphic',
        id: '88'
    },
    {
        name: 'Designer',
        id: '87'
    },
    {
        name: 'Creativity',
        id: '86'
    }
]

const Tag = () => {
    return (
        <section className="tag card">
            <h3 className="card__title">Tag</h3>
            <div className="tag__block">
                {tags.map(({name, id}) => (
                    <Link href="/" key={id}>
                        <a className="tag__text">{name}</a>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Tag;