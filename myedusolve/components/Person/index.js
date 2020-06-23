import React from 'react';

const Person = () => {
    return (
        <section className="person card">
            <h2 className="person__main-title">Instruktur</h2>
            <div className="person__wrap d-flex">
                <img className="person__image" src="../../static/person.png" alt="person" />
                <div className="person__info">
                    <h2 className="person__title">Sharon Joetama</h2>
                    <p className="tx-small">It is a long established fact that a reader will be distracted by the readable conten.</p>
                </div>
            </div>
        </section>
    )
}

export default Person;