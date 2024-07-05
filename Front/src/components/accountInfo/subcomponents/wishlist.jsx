import React, { useState, useEffect } from 'react';
import "../../../css/myaccount/wishlist.css";

const SavedItems = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        // Fetch wishlist items from backend when component mounts
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/wishlist/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming you store JWT in localStorage
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
            }

            const data = await response.json();
            setWishlistItems(data); // Update state with fetched wishlist items
        } catch (error) {
            console.error('Error fetching wishlist items:', error);
            // Handle error if needed
        }
    };

    return (
        <section className="sect">
            <div className="card">
                <header className="header">
                    <h2 className="">Saved items</h2>
                </header>
                <div className="rowpass">
                    {wishlistItems.map(item => (
                        <div className="colu" key={item.id}>
                            <article className="article">
                                <a href="#" className="linkimg">
                                    <img
                                        src={item.product.image_url} // Replace with actual image URL field from your API
                                        className="imgprod"
                                        width="104"
                                        height="104"
                                        alt={item.product.name} // Replace with actual product name field from your API
                                    />
                                </a>
                                <div className="details">
                                    <div className="nameproduct">
                                        {item.product.name} {/* Replace with actual product name field from your API */}
                                    </div>
                                    <div className="gp">
                                        <p className="price">{item.product.price}</p> {/* Replace with actual price field from your API */}
                                    </div>
                                </div>
                                <div className="btns">
                                    <form method="post" action="">
                                        <button className="btn_buy">Buy Now</button>
                                    </form>
                                    <form className='b-remove' method="post" action="" data-track-onsubmit="true">
                                        <button className="btnremove">
                                            <svg className='bin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                            </svg>
                                            Remove
                                        </button>
                                        <input name="csrfToken" value="904ca39d82abb1fe6d4c1239da96a939" type="hidden" />
                                    </form>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SavedItems;
