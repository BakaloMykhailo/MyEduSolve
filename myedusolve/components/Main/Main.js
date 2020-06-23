import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Banner from '../Banner';
import Footer from '../Footer';
import Info from '../Info';
import Person from '../Person';
import Bar from '../Bar';
import Fitur from '../Fitur';
import Tag from '../Tag';
import Social from '../Social';
import Slider from '../Slider';
import InfoBanner from '../Banner/InfoBanner';
import Schedule from '../Schedule/Schedule';
import TableInfo from '../TableInfo';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Search />
                <Banner />
                <div className="main-container container">
                    <div className="banner-mob">
                        <InfoBanner />
                    </div>
                    <div className="row main-row">
                        <div className="col-12 col-lg-8 col-xl-9">
                            <div className="banner-desc">
                                <InfoBanner />
                            </div>
                            <Info />
                            <TableInfo classN="table table--info"/>
                            <Schedule />
                            <Person />
                        </div>
                        <div className="col-12 col-lg-4 col-xl-3">
                            <Bar />
                            <div className="navbar-desc">
                                <Social />
                                <Fitur />
                                <Tag />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-mob">
                        <Tag />
                        <Fitur />
                        <Social />
                    </div>
                    <Slider />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Main;