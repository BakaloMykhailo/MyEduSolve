import React from 'react';
import  Button  from '../Button';

const Search = () => {
    return (
        <div className="search">
            <div className="container">
                <div className="search__desc d-flex justify-content-center align-items-center">
                    <p className="font-weight-500">Jika memiliki voucher silahkan periksa.</p>
                    <input className="search__input" placeholder="Masukkan kode voucher"/>
                    <Button className="btn btn-pink" >Periksa</Button>
                </div>
                <div className="search__mob justify-content-center align-items-center">
                    <h2 className="search__mob-text font-weight-500">Periksa Voucher?</h2>
                    <h2 className="search__mob-text font-weight-500 tx-pink">Klik Disini</h2>
                </div>
            </div>
        </div>
    )
}

export default Search;
