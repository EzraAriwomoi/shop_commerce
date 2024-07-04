// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../../../css/myaccount/edit.css";
// import NavBar from "../layout/NavBar";

const Edit = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value,} = e.target;
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
                        <label className="lbl" htmlFor="fi-lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="wth">
                        <div className="ent-email">
                            <input
                                placeholder="Enter your email"
                                required
                                className="fN"
                                type="email"
                                value={formData.email}
                                id="fi-email"
                                name="email"
                                onChange={handleChange}
                            />
                            <label className="lbl" htmlFor="fi-phone">Email</label>
                        </div>
                    </div>
                <div className="col4">
                    <div className="gen-loc">
                        <select
                            required
                            className="location"
                            id="locid"
                            name="locId"
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
                            <option value="1008">Kasarani - Clay City / Kasarani / Mwiki</option>
                            <option value="1197">Kibra - Jamhuri / Woodley</option>
                            <option value="1199">Kibra - Makina / Sarangombe</option>
                            <option value="1528">Kileleshwa/Dennis pritt/State hse road</option>
                            <option value="1527">Kileleshwa/Riverside</option>
                            <option value="1548">Kilimani</option>
                            <option value="1471">komarock / Kangundo Road/Saika/Obama</option>
                            <option value="1472">Laini Saba / Lindi/Makina / Sarangombe</option>
                            <option value="1473">Langata - Dam Estate / Nyayo Highrise/Ngumo</option>
                            <option value="1012">Langata - Nairobi West / South C</option>
                            <option value="1542">Lavington/valley arcade/James Gichuru</option>
                            <option value="1474">Lower Kabete / Kangemi/Mountain View</option>
                            <option value="1535">Lower Kabete / Kangemi/Mountain View/Loresho</option>
                            <option value="1553">Mihango/Njiru/Chokaa/Ruai</option>
                            <option value="1539">Muthaiga/CID/Karura</option>
                            <option value="1523">Naivasha Rd/Kawangware/ Gatina/Waithaka</option>
                            <option value="1544">Parklands/Highridge</option>
                            <option value="1360">Railways/Muthurwa/ BS/ OTC</option>
                            <option value="1456">Roysambu/Zimmerman</option>
                            <option value="1206">Ruaraka - Babadogo/ Lucky Summer</option>
                            <option value="1207">Ruaraka - Mathare N./Survey/Utalii</option>
                            <option value="1538">Runda/Roslyn</option>
                            <option value="1358">Spring Valley/Kyuna</option>
                            <option value="1520">Starehe - Kariokor/Ziwani/Majengo/Gikomba</option>
                            <option value="1521">Starehe - Ngara/Desai Road/Equity/Park Road</option>
                            <option value="1522">Starehe - Pangani/Juja Road</option>
                            <option value="1519">Starehe - Pumwani/Madiwa</option>
                            <option value="1264">Umoja/ Tena Estate/Nasra</option>
                            <option value="1208">Upperhill - Community / KNH</option>
                            <option value="1559">Upperhill-Kiambere Rd/Mara Rd/Elgon Rd/Lower Hill</option>
                            <option value="1023">Westlands - Central</option>
                            <option value="1024">Westlands - Highridge / Parklands</option>
                        </select>
                        <label className="lbl" htmlFor="locationId">Location</label>
                    </div>
                </div>
                <div className="row">
                <div className="wth">
                        <div className="ent-email">
                            <input
                                placeholder="Enter new password"
                                required
                                className="fN"
                                type="password"
                                value={formData.password}
                                id="fi-pass"
                                name="password"
                                onChange={handleChange}
                            />
                            <label className="lbl" htmlFor="fi-phone">Password</label>
                        </div>
                    </div>
                    <div className="wth">
                        <div className="ent-email">
                            <input
                                placeholder="Confirm password"
                                required
                                className="fN"
                                type="password"
                                value={formData.password}
                                id="fi-pass"
                                name="password"
                                onChange={handleChange}
                            />
                            <label className="lbl" htmlFor="fi-phone">Confirm Password</label>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="col5">
                    <div className="divbtn">
                        <button className="btnsave">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;
