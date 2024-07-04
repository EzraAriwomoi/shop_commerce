// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../../../css/myaccount/edit.css";

const Edit = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // eslint-disable-next-line react/prop-types
    const PasswordField = ({ name, value, onChange, placeholder, label }) => {
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div className="password-field">
                <input
                    placeholder={placeholder}
                    required
                    className="fN"
                    type={showPassword ? "text" : "password"}
                    value={value}
                    id={`fi-${name}`}
                    name={name}
                    onChange={onChange}
                />
                <button type="button" className="eye" onClick={togglePasswordVisibility}>
                {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                    </svg>
                )}
            </button>
                <label className="lbl" htmlFor={`fi-${name}`}>{label}</label>
            </div>
        );
    };

    return (
        <div className="card1">
            <header className="header-edit">
                <a className="indx" href="">
                    <svg className="na" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                </a>
                <h1 className="head-edit">Edit Info</h1>
            </header>
            <form method="post" id="addressForm" className="form">
                <div className="row">
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
                        <label className="lbl" htmlFor="fN-lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="lname">
                        <input
                            placeholder="Enter Your Email"
                            required
                            className="fN"
                            type="email"
                            id="fN-email"
                            name="email"
                            onChange={handleChange}
                        />
                        <label className="lbl" htmlFor="fN-email">Email</label>
                    </div>
                    <div className="wth">
                        <div className="gen-loc">
                            <select
                                required
                                className="location"
                                id="locid"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            >
                                <option value="1356">A.S.K. Showground/Wanye</option>
                                <option value="1189">Adams Arcade / Dagoretti Corner</option>
                                <option value="1201">Bahati / Marish / Viwandani / Jeri</option>
                                <option value="1540">Bomas/CUEA/Galleria</option>
                                <option value="1200">Buruburu / Hamza / Harambee</option>
                                <option value="1169">CBD - GPO/City Market/Nation Centre</option>
                                <option value="1168">CBD - KICC/Parliament/Kencom</option>
                                <option value="1171">CBD - Luthuli/Afya Centre/ R. Ngala</option>
                                <option value="1170">CBD - UON/Globe/Koja/River Road</option>
                                <option value="1545">City Stadium/Makongeni/Mbotela</option>
                                <option value="1486">Embakasi East-Pipeline/Transami/Airport North Rd</option>
                                <option value="998">Embakasi North - Dandora / Kariobangi North</option>
                                <option value="999">Embakasi South - Bunyala Road / South B</option>
                                <option value="1563">Embakasi South - Mombasa Road/Sameer Park/General Motors/ICD</option>
                                <option value="1558">Embakasi South-Landimawe/KwaReuben/Kware/Pipeline</option>
                                <option value="1510">Garden Estate/Thome/Marurui</option>
                                <option value="1541">Gigiri/Village market/UN</option>
                                <option value="1509">Githurai/Kahawa Sukari</option>
                                <option value="1543">Hurlingham/DOD/Yaya center</option>
                                <option value="1202">Huruma / Kiamaiko / Mbatini / Ngei</option>
                                <option value="1478">Imara Daima/AA/Maziwa/Kwa Njenga</option>
                                <option value="1204" selected>Kahawa Wendani/ Kenyatta University</option>
                                <option value="1455">Kahawa west/Githurai 44</option>
                                <option value="1517">Kamukunji - Airbase/Mlango Kubwa</option>
                                <option value="1518">Kamukunji - Eastleigh/California/Shauri Moyo</option>
                                <option value="1564">Kamulu</option>
                                <option value="1007">Karen</option>
                                <option value="1469">Kariobangi South/Dandora/Airbase</option>
                                <option value="1008">Kawangware/Stage 56</option>
                                <option value="1485">Kilimani/State House/Denis Pritt</option>
                                <option value="1474">Kinoo/Zambezi/Ngecha</option>
                                <option value="1473">Kiserian/Corner Baridi/Ongata Rongai</option>
                                <option value="1203">Korogocho / Baraka / Gitathuru / Grogan</option>
                                <option value="1495">Langata/Hardy/Mbagathi</option>
                                <option value="1496">Lavington/Mziima/James Gichuru</option>
                                <option value="1508">Muthaiga/Parklands</option>
                                <option value="1497">Ngara/Pangani</option>
                                <option value="1484">Ngong/Kibiku</option>
                                <option value="1506">Nyayo Highrise/Nairobi West</option>
                                <option value="1519">Roy Sambu/Kasarani</option>
                                <option value="1483">Ruai</option>
                                <option value="1009">Ruiru</option>
                                <option value="1468">Runda/Evergreen</option>
                                <option value="1542">South C/Bellevue</option>
                                <option value="1494">South C/Mombasa Road</option>
                                <option value="1507">South B/Mukuru</option>
                                <option value="1011">Umoja / Komarocks</option>
                                <option value="1460">Upperhill/Milimani</option>
                                <option value="1012">Utawala</option>
                                <option value="1512">Uthiru / Kibiku</option>
                                <option value="1467">Westlands/Kangemi</option>
                                <option value="1013">Zimmerman</option>
                            </select>
                            <label className="lbl" htmlFor="locid">Select your location</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="fname">
                        <PasswordField
                            name="password"
                            placeholder="Enter your password"
                            label="Password"
                        />
                    </div>
                    <div className="lname">
                        <PasswordField
                            name="confirmPassword"
                            placeholder="Confirm password"
                            label="Confirm Password"
                        />
                    </div>
                </div>
                <div className="buttonsave">
                    <div className="divbtn">
                        <button className="btnsave">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;
