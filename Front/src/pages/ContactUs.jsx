// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../css/contactuscss/contactus.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="outer-container">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="head-contactus">CONTACT US</h2>
                <p className="text-muted-foreground">
                  Have a question or want to work together? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="input-field"
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="input-field"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="textarea-field"
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button className="send-button" type="submit">Send</button>
              </form>
            </div>
            <div className="space-y-6">
              <img
                src="contact_img.jpg"
                alt="Company Location"
                className="rounded-lg w-full h-auto image-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
