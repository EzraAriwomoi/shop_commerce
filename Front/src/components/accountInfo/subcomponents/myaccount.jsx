// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "../../../css/myaccount/myaccount.css";
import Edit from '.././subcomponents/edit';
import EditPassword from '.././subcomponents/editpassword';

const AccountOverview = () => {
    const [editing, setEditing] = useState(false);
    const [editingPassword, setEditingPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Function to fetch user profile data
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5000/profile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const data = await response.json();
                setFullName(data.full_name);
                setEmail(data.email);
            } catch (error) {
                console.error('Error fetching profile:', error);
                // Handle error fetching profile data
            }
        };

        fetchProfileData(); // Call the function to fetch profile data when component mounts
    }, []); // Empty dependency array ensures it runs only once when component mounts

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleEditPasswordClick = () => {
        setEditingPassword(true);
    };

    if (editing) {
        return <Edit />;
    }

    if (editingPassword) {
        return <EditPassword />;
    }

    return (
        <section className="sect">
            <div className="card">
                <header className="header">
                    <h1 className="ac-over">Account Overview</h1>
                    <button className="btn-pen" aria-label="Edit Address" onClick={handleEditClick}>
                        Update
                    </button>
                </header>
                <div className="row">
                    <div className="col">
                        <article className="card-blw">
                            <header className="hdr">
                                <h2 className="head1">Account details</h2>
                            </header>
                            <div className="fig1">
                                Full names:
                                <p className="nam-user">{fullName}</p>
                                Email:
                                <p className="email-pass-user">{email}</p>
                            </div>
                        </article>
                        <header className="header-password">
                            <h1 className="ac-over">Change your password</h1>
                            <button className="btn-changepass" aria-label="Change password" onClick={handleEditPasswordClick}>
                                Change password
                            </button>
                        </header>
                        <article className="card-password">
                            Password:
                            <p className="email-pass-user">********</p>
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
                                    <p>Your location</p>
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
