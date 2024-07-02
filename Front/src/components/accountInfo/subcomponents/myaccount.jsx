// eslint-disable-next-line no-unused-vars
import React from 'react';

const AccountOverview = () => {
    return (
        <section className="sect">
            <div className="card">
                <header className="header">
                    <h1 className="ac-over">Account Overview</h1>
                    <button className="btn-pen" aria-label="Edit Address">
                        update
                    </button>
                </header>
                <div className="row">
                    <div className="col">
                        <article className="card-blw">
                            <header className="hdr">
                                <h2 className="head1">Account details</h2>
                            </header>
                            <div className="fig1">
                                Name:
                                <p className="nam-user">Ezra Ariwomoi</p>
                                Email:
                                <p className="email-pass-user">kropezra@gmail.com</p>
                                Password:
                                <p className="email-pass-user">********</p>
                            </div>
                        </article>
                    </div>
                    <div className="col">
                        <article className="card-blw">
                            <header className="hdr">
                                <h2 className="head1">Shipping Details</h2>
                            </header>
                            <div className="pv">
                                <div className="join">
                                    <svg className="ic-loc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <p className="def">Your shipping address:</p>
                                </div>
                                <address className="address">
                                    <p>Kahawa Wendani/ Kenyatta University, Nairobi</p>
                                </address>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountOverview;
