// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../../css/myaccount/edit.css";
// import NavBar from "../layout/NavBar";

const Edit = () => {
    const [formData, setFormData] = useState({
        firstName: 'Ezra',
        lastName: 'Ariwomoi',
        phone: '715202539',
        additionalPhone: '',
        address1: 'Not Applicable',
        address2: '',
        regionId: '233',
        cityId: '1204',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="card1">
            <header className="header-edit">
                <a className="indx" href="">
                    <svg className='na' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </a>
                <h1 className="head-edit">Edit Info</h1>
            </header>
            <form method="post" id="addressForm" className="form">
                <div className="col1">
                    <div className="fname">
                        <input
                            placeholder="Enter First Name"
                            required
                            className="fN"
                            type="text"
                            value={formData.firstName}
                            id="fN-firstName"
                            name="firstName"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-firstName">First Name</label>
                    </div>
                    <div className="lname">
                        <input
                            placeholder="Enter Last Name"
                            required
                            className="fN"
                            type="text"
                            value={formData.lastName}
                            id="fN-lastName"
                            name="lastName"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fi-lastName">Last Name</label>
                    </div>
                </div>
                <div className="col2">
                    <div className="wth">
                        <div className="fiw">
                            <div className="code">+254</div>
                            <label className="lbl">Prefix</label>
                        </div>
                        <input className="phonePrefix" value="+254" id="fi-phonePrefix" type="hidden" />
                        <div className="ent-phon">
                            <input
                                pattern="[0-9]*"
                                placeholder="Enter Phone Number"
                                required
                                className="fN"
                                type="tel"
                                value={formData.phone}
                                id="fi-phone"
                                name="phone"
                                onChange={handleChange}
                            />
                            <label className="lbl" htmlFor="fi-phone">Phone Number</label>
                        </div>
                    </div>
                    <div className="col8 -df -plm">
                        <div className="fi-w">
                            <div className="fi _fks -ltr -tal">+254</div>
                            <label className="lbl">Prefix</label>
                        </div>
                        <input name="additionalPhonePrefix" value="+254" id="fi-additionalPhonePrefix" type="hidden" />
                        <div className="fi-w -mlm -fw">
                            <input
                                pattern="[0-9]*"
                                placeholder="Enter your Additional Phone Number"
                                className="fi"
                                type="tel"
                                value={formData.additionalPhone}
                                id="fi-additionalPhone"
                                name="additionalPhone"
                                onChange={handleChange}
                            />
                            <label className="lbl" htmlFor="fi-additionalPhone">Additional Phone Number</label>
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div className="fi-w">
                        <input
                            placeholder="Enter your Address"
                            required
                            className="fi"
                            type="text"
                            value={formData.address1}
                            id="fi-address1"
                            name="address1"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fi-address1">Address</label>
                    </div>
                    <div className="fi-w">
                        <input
                            placeholder="Enter Additional Information"
                            className="fi"
                            type="text"
                            value={formData.address2}
                            id="fi-address2"
                            name="address2"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fi-address2">Additional Information</label>
                    </div>
                </div>
                <div className="col4">
                    <div className="fi-w -fw -mrxl">
                        <select
                            required
                            className="sel"
                            id="fi-regionId"
                            name="regionId"
                            value={formData.regionId}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Please select</option>
                            <option value="381">Baringo</option>
                            <option value="387">Bomet</option>
                            <option value="390">Bungoma</option>
                            <option value="391">Busia</option>
                            <option value="379">Elgeyo-Marakwet</option>
                            <option value="366">Embu</option>
                            <option value="359">Garissa</option>
                            <option value="394">Homa Bay</option>
                            <option value="363">Isiolo</option>
                            <option value="385">Kajiado</option>
                            <option value="388">Kakamega</option>
                            <option value="386">Kericho</option>
                            <option value="373">Kiambu</option>
                            <option value="355">Kilifi</option>
                            <option value="398">Kirinyaga</option>
                            <option value="396">Kisii</option>
                            <option value="393">Kisumu</option>
                            <option value="367">Kitui</option>
                            <option value="354">Kwale</option>
                            <option value="382">Laikipia</option>
                            <option value="357">Lamu</option>
                            <option value="368">Machakos</option>
                            <option value="369">Makueni</option>
                            <option value="362">Marsabit</option>
                            <option value="364">Meru</option>
                            <option value="395">Migori</option>
                            <option value="353">Mombasa</option>
                            <option value="233" selected>Nairobi</option>
                            <option value="383">Nakuru</option>
                            <option value="380">Nandi</option>
                            <option value="384">Narok</option>
                            <option value="397">Nyamira</option>
                            <option value="370">Nyandarua</option>
                            <option value="371">Nyeri</option>
                            <option value="376">Samburu</option>
                            <option value="392">Siaya</option>
                            <option value="358">Taita-Taveta</option>
                            <option value="356">Tana River</option>
                            <option value="365">Tharaka-Nithi</option>
                            <option value="377">Trans-Nzoia</option>
                            <option value="374">Turkana</option>
                            <option value="378">Uasin Gishu</option>
                            <option value="389">Vihiga</option>
                            <option value="375">West Pokot</option>
                        </select>
                        <label className="lbl" htmlFor="fi-regionId">Region</label>
                    </div>
                    <div className="fi-w -fw">
                       
                        <label className="lbl" htmlFor="fi-cityId">City</label>
                    </div>
                </div>
                <div className="col5">
                    <div className="-df -j-end -i-ctr -pam -hr">
                        <button className="btn _prim">Save</button>
                    </div>
                </div>
                <input name="csrfToken" value="1b46d43405752efead178ba209d360b6" type="hidden" />
            </form>
        </div>
    );
};

export default Edit;
