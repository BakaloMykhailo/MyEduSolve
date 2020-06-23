import React from 'react';

const FooterTop = () => {
    return (
        <div className="footerTop">
            <div className="footerTop__container container">
                <div className="row">
                    <div className="col-12 col-lg footerTop__leftBlock">
                        <h3 className="footerTop__title">pt dwi inti putra</h3>
                        <div className="row">
                            <div className="col-lg-5 col-12 footerTop__head-office">
                                <p className="footerTop__text-bold">Head Office</p>
                                <p className="footerTop__text-normal">Gedung Kresna</p>
                                <p className="footerTop__text-normal">JI. Arjuna Utara No. 28</p>
                            </div>
                            <div className="col-12 col-lg-auto">
                                <p className="footerTop__text-bold">Marketing Office</p>
                                <p className="footerTop__text-normal">BLOCK71 Jakarta</p>
                                <p className="footerTop__text-normal">Ariobimo Sentral</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg footerTop__rightBlock">
                        <div className="row">
                            <div className="col-12 col-lg footerTop__myedusolve">
                                <h2 className="footerTop__text-title">MyEduSolve X</h2>
                                <a href="/" className="footerTop__text-link">Tentang Kami</a>
                                <a href="/" className="footerTop__text-link">Kontak Kami</a>
                                <a href="/" className="footerTop__text-link">Jadi Instruktur</a>
                                <a href="/" className="footerTop__text-link">Faq</a>
                            </div>
                            <div className="col-12 col-lg">
                                <h2 href="/" className="footerTop__text-title">Program</h2>
                                <a href="/" className="footerTop__text-link">Kelas</a>
                                <a href="/" className="footerTop__text-link">Events</a>
                                <a href="/" className="footerTop__text-link">Sertifikasi</a>
                                <a href="/" className="footerTop__text-link">Ambassador</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 footerTop__contact">
                        <div className="d-flex">
                            <p className="footerTop__text-normal">Email:</p>
                            <a href="mailto:Hello@myedusolve.com" className="footerTop__link">hello@myedusolve.com</a>
                        </div>
                        <div className="d-flex">
                            <p className="footerTop__text-normal">WhatsApp:</p>
                            <a href="tel:+6287788909020" className="footerTop__link">+62 877-8890-9020</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop;