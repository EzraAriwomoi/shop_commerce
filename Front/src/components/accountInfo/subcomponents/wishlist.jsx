// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../../css/myaccount/wishlist.css";

const SavedItems = () => {
  return (
    <section className="sect">
      <div className="card">
        <header className="header">
          <h2 className="">Saved items</h2>
        </header>
        <div className="rowpass">
          <div className="colu">
            <article className="article">
              <a href="" className="linkimg">
                <img
                  src="public/26.jpg"
                  className="imgprod"
                  width="104"
                  height="104"
                />
              </a>
              <div className="details">
                <div className="nameproduct">Product name :</div>
                <div className="gp">
                  <p className="price">Price :</p>
                </div>
              </div>
              <div className="btns">
                <form method="post" action="">
                  <button className="btn_buy">Buy Now</button>
                </form>
                <form
                  className="b-remove"
                  method="post"
                  action=""
                  data-track-onsubmit="true"
                >
                  <button className="btnremove">
                    <svg
                      className="bin"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                    Remove
                  </button>
                  <input
                    name="csrfToken"
                    value="904ca39d82abb1fe6d4c1239da96a939"
                    type="hidden"
                  />
                </form>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavedItems;
