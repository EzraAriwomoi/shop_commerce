import React, { useState } from "react";
import "../accountInfo/subcomponents/Component.css";

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locations = [
    "A.S.K. Showground/Wanye",
    "Adams Arcade / Dagoretti Corner",
    "Bahati / Marish / Viwandani / Jeri",
    "Bomas/CUEA/Galleria",
    "Buruburu / Hamza / Harambee",
    "CBD - GPO/City Market/Nation Centre",
    "CBD - KICC/Parliament/Kencom",
    "CBD - Luthuli/Afya Centre/ R. Ngala",
    "CBD - UON/Globe/Koja/River Road",
    "City Stadium/Makongeni/Mbotela",
    "Embakasi East-Pipeline/Transami/Airport North Rd",
    "Embakasi North - Dandora / Kariobangi North",
    "Embakasi South - Bunyala Road / South B",
    "Embakasi South - Mombasa Road/Sameer Park/General Motors/ICD",
    "Embakasi South-Landimawe/KwaReuben/Kware/Pipeline",
    "Garden Estate/Thome/Marurui",
    "Gigiri/Village market/UN",
    "Githurai/Kahawa Sukari",
    "Hurlingham/DOD/Yaya center",
    "Huruma / Kiamaiko / Mbatini / Ngei",
    "Imara Daima/AA/Maziwa/Kwa Njenga",
    "Kahawa Wendani/ Kenyatta University",
    "Kahawa west/Githurai 44",
    "Kamukunji - Airbase/Mlango Kubwa",
    "Kamukunji - Eastleigh/California/Shauri Moyo",
    "Kamulu",
    "Karen",
    "Kariobangi South/Dandora/Airbase",
    "Kawangware/Stage 56",
    "Kilimani/State House/Denis Pritt",
    "Kinoo/Zambezi/Ngecha",
    "Kiserian/Corner Baridi/Ongata Rongai",
    "Korogocho / Baraka / Gitathuru / Grogan",
    "Langata/Hardy/Mbagathi",
    "Lavington/Mziima/James Gichuru",
    "Muthaiga/Parklands",
    "Ngara/Pangani",
    "Ngong/Kibiku",
    "Nyayo Highrise/Nairobi West",
    "Roy Sambu/Kasarani",
    "Ruai",
    "Ruiru",
    "Runda/Estate/Muthaiga",
    "Rwaka/Two Rivers",
    "South C",
    "Thindigua/Kasarini",
    "Umoja/Infill",
    "Utawala",
    "Valley Road / Community / Kenyatta Hospital",
    "Waiyaki Way/Kangemi",
    "Westlands",
    "Ziwani/Zimmerman/Githurai 45"
  ];

  return (
    <div className="container">
      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Sidebar content */}
        <div className="flex items-center gap-4 mb-8">
          <div className="avatar">
            <img src="/placeholder-user.jpg" alt="User Avatar" className="avatar-image" />
            <div className="avatar-fallback">User</div>
          </div>
          <div className={isMobileMenuOpen ? 'hidden' : ''}>
            <h2 className="text-lg font-semibold">User</h2>
            <p className="text-sm text-muted-foreground">email@example.com</p>
          </div>
        </div>
        {/* Navigation links */}
        <nav className="nav-link">
          <a href="#" className="custom-link">
            <PackageIcon className="icon" />
            <span className="label">Orders</span>
          </a>
          <a href="#" className="custom-link">
            <HeartIcon className="icon" />
            <span className="label">Wishlist</span>
          </a>
          <a href="#" className="custom-link">
            <UserIcon className="icon" />
            <span className="label">Account</span>
          </a>
          <button className="custom-link">
            <LogOutIcon className="icon" />
            <span className="label">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main content container */}
      <div className="component-container">
        <div className="component-inner-container">
          <div className="component-header">
            <div className="component-header-content">
              <div className="avatar">
                <img src="/placeholder-user.jpg" alt="User Avatar" className="avatar-image" />
                <div className="avatar-fallback">User</div>
              </div>
              <div>
                <h1 className="component-title">User</h1>
                <p className="component-subtitle">email@example.com</p>
              </div>
            </div>
            <button
                className="icon-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MenuIcon className="menu-icon" />
              </button>
          </div>
          <div className="component-body">
            <Section title="Personal Details">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="lbl">First Name</label>
                  <InputField id="firstName"/>
                </div>
                <div>
                  <label className="lbl">Last Name</label>
                  <InputField id="lastName"/>
                </div>
              </div>
              <div>
                <label className="lbl">Email</label>
                <InputField id="email"/>
              </div>
              <div>
                <label className="lbl">Phone Number</label>
                <InputField id="phone"/>
              </div>
            </Section>
            <Section title="Shipping Address">
              <div>
                <label className="lbl">Location</label>
                <SelectField id="location" options={locations}/>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="lbl">County</label>
                  <InputField id="county"/>
                </div>
                <div>
                  <label className="lbl">Zip code</label>
                  <InputField id="zip"/>
                </div>
              </div>
            </Section>
            <Section title="Payment Information">
              <div>
                <label className="lbl">M-PESA Number</label>
                <InputField id="phone"/>
              </div>
              <div className="available-payments">
                Current available payments : 
                <img src="/mpesa.png" className="mpesa-logo" alt="M-Pesa" width={90} height={60} />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="button-outline small-button">
          <PencilIcon className="pencil-icon" />
          Edit
        </button>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function InputField({ label, id, type = "text"}) {
  return (
    <div className="inputField">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

function SelectField({ id, options }) {
  return (
    <div className="select-field">
      <label htmlFor={id}></label>
      <select id={id}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="13" rx="2" ry="2" />
      <line x1="7" y1="2" x2="17" y2="7" />
      <line x1="7" y1="14" x2="17" y2="14" />
      <line x1="3" y1="9" x2="7" y2="9" />
      <line x1="3" y1="15" x2="7" y2="15" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 3h-13a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2z" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}