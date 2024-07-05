from datetime import datetime, timedelta
from random import randint
from flask import app
from werkzeug.security import generate_password_hash
from app.models import (
    Category, User, Product, CartItem, Order, OrderItem, Notification,
    SupportTicket, WishlistItem, PaymentMethod, ShippingMethod,
    FAQ, ContactQuery, Banner, FeaturedProduct
)
from app import create_app, db  # Replace 'your_app' with the actual name of your app

app = create_app()

def populate_database():
    # Drop all tables
    db.drop_all()
    db.create_all()

    # Create categories
    categories = [
        Category(name='Watches', description='Various types of watches'),
        Category(name='Bracelets', description='Various types of bracelets'),
        Category(name='Rings', description='Various types of rings'),
        Category(name='Earrings', description='Various types of earrings'),
        Category(name='Necklaces', description='Various types of necklaces'),
    ]
    db.session.add_all(categories)
    db.session.commit()

    # Create users
    users = [
        User(full_name='Alice Smith', email='alice@example.com', password=generate_password_hash('password')),
        User(full_name='Bob Johnson', email='bob@example.com', password=generate_password_hash('password')),
        User(full_name='Charlie Lee', email='charlie@example.com', password=generate_password_hash('password')),
        User(full_name='Diana Green', email='diana@example.com', password=generate_password_hash('password'))
    ]
    db.session.add_all(users)
    db.session.commit()

    # Create products and associate them with categories
    products = [
        Product(name='Gold Watch', description='A luxurious gold watch', price=199.99, stock=10, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme%20-%20Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme.jpeg?alt=media&token=63d8ba87-2a5b-41e2-bde0-72b8a639a873', is_featured=True, featured_priority=1, categories=[categories[0]]),
        Product(name='Silver Bracelet', description='A shiny silver bracelet', price=49.99, stock=25, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme%20-%20Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme.jpeg?alt=media&token=63d8ba87-2a5b-41e2-bde0-72b8a639a873', is_featured=True, featured_priority=2, categories=[categories[1]]),
        Product(name='Silver Bracelet', description='A shiny silver bracelet', price=49.99, stock=25, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme%20-%20Bracelet%20en%20acier%20inoxydable%20plaqu%C3%A9%20or%20pour%20femme.jpeg?alt=media&token=63d8ba87-2a5b-41e2-bde0-72b8a639a873', is_featured=True, featured_priority=2, categories=[categories[3]]),
        Product(name='Diamond Ring', description='A beautiful diamond ring', price=299.99, stock=5, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/ring.jpeg?alt=media&token=2679d07e-02c9-417a-9446-9670aece0b66', is_featured=True, featured_priority=3, categories=[categories[2]]),
        Product(name='Diamond Ring', description='A beautiful diamond ring', price=299.99, stock=5, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/ring.jpeg?alt=media&token=2679d07e-02c9-417a-9446-9670aece0b66', is_featured=True, featured_priority=3, categories=[categories[4]]),
        Product(name='Pearl Earrings', description='Elegant pearl earrings', price=89.99, stock=15, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/2pcs_set%20Rings%20Butterfly%20All-match%20Butterfly%20Hollow%20Simple%20Couple%20Rings%20Alloy.jpeg?alt=media&token=4d7fb973-9a3d-43e6-9349-a0a108fa6f11', is_featured=True, featured_priority=4, categories=[categories[3]]),
        Product(name='Pearl Earrings', description='Elegant pearl earrings', price=89.99, stock=15, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/2pcs_set%20Rings%20Butterfly%20All-match%20Butterfly%20Hollow%20Simple%20Couple%20Rings%20Alloy.jpeg?alt=media&token=4d7fb973-9a3d-43e6-9349-a0a108fa6f11', is_featured=True, featured_priority=4, categories=[categories[0]]),
        Product(name='Gold Necklace', description='A stunning gold necklace', price=149.99, stock=20, image_url='https://firebasestorage.googleapis.com/v0/b/kletos-d86bc.appspot.com/o/necklace.jpeg?alt=media&token=c16f8458-a7eb-497f-b343-99d72894fd58', is_featured=True, featured_priority=5, categories=[categories[4]])
    ]
    db.session.add_all(products)
    db.session.commit()

    # Create cart items for users
    cart_items = [
        CartItem(user_id=users[0].id, product_id=products[0].id, quantity=2),
        CartItem(user_id=users[1].id, product_id=products[1].id, quantity=1),
        CartItem(user_id=users[2].id, product_id=products[2].id, quantity=1),
        CartItem(user_id=users[3].id, product_id=products[3].id, quantity=3),
        CartItem(user_id=users[2].id, product_id=products[3].id, quantity=3),
    ]
    db.session.add_all(cart_items)
    db.session.commit()

    # Create orders for users
    orders = [
        Order(user_id=users[0].id, total_price=399.98, status='Pending'),
        Order(user_id=users[1].id, total_price=49.99, status='Completed'),
        Order(user_id=users[2].id, total_price=299.99, status='Pending'),
        Order(user_id=users[3].id, total_price=269.97, status='Shipped'),
    ]
    db.session.add_all(orders)
    db.session.commit()

    # Create order items
    order_items = [
        OrderItem(order_id=orders[0].id, product_id=products[0].id, quantity=2),
        OrderItem(order_id=orders[1].id, product_id=products[1].id, quantity=1),
        OrderItem(order_id=orders[2].id, product_id=products[2].id, quantity=1),
        OrderItem(order_id=orders[3].id, product_id=products[3].id, quantity=3),
    ]
    db.session.add_all(order_items)
    db.session.commit()

    # Create notifications for users
    notifications = [
        Notification(user_id=users[0].id, title='Order Confirmation', message='Your order has been confirmed.', type='order', created_at=datetime.utcnow()),
        Notification(user_id=users[1].id, title='Shipping Update', message='Your order has been shipped.', type='shipping', created_at=datetime.utcnow()),
        Notification(user_id=users[2].id, title='Delivery Update', message='Your order is out for delivery.', type='delivery', created_at=datetime.utcnow()),
        Notification(user_id=users[3].id, title='Order Delivered', message='Your order has been delivered.', type='delivery', created_at=datetime.utcnow()),
    ]
    db.session.add_all(notifications)
    db.session.commit()

    # Create support tickets for users
    support_tickets = [
        SupportTicket(user_id=users[0].id, subject='Issue with order', message='I received a damaged product.', status='Open'),
        SupportTicket(user_id=users[1].id, subject='Payment issue', message='I was charged twice.', status='Open'),
        SupportTicket(user_id=users[2].id, subject='Shipping delay', message='My order is delayed.', status='Closed'),
        SupportTicket(user_id=users[3].id, subject='Product inquiry', message='Is this product available in other colors?', status='Open'),
    ]
    db.session.add_all(support_tickets)
    db.session.commit()

    # Create wishlist items for users
    wishlist_items = [
        WishlistItem(user_id=users[0].id, product_id=products[1].id),
        WishlistItem(user_id=users[1].id, product_id=products[2].id),
        WishlistItem(user_id=users[2].id, product_id=products[3].id),
        WishlistItem(user_id=users[3].id, product_id=products[4].id),
    ]
    db.session.add_all(wishlist_items)
    db.session.commit()

    # Create payment methods
    payment_methods = [
        PaymentMethod(name='Credit Card', description='Pay with credit card'),
        PaymentMethod(name='PayPal', description='Pay with PayPal'),
        PaymentMethod(name='Bank Transfer', description='Pay via bank transfer'),
        PaymentMethod(name='Cash on Delivery', description='Pay with cash upon delivery')
    ]
    db.session.add_all(payment_methods)
    db.session.commit()

    # Create shipping methods
    shipping_methods = [
        ShippingMethod(name='Standard Shipping', description='Delivers in 5-7 business days'),
        ShippingMethod(name='Express Shipping', description='Delivers in 2-3 business days'),
        ShippingMethod(name='Overnight Shipping', description='Delivers next day'),
        ShippingMethod(name='International Shipping', description='Delivers in 7-14 business days')
    ]
    db.session.add_all(shipping_methods)
    db.session.commit()

    # Create FAQs
    faqs = [
        FAQ(question='How can I track my order?', answer='You can track your order using the tracking number provided in the shipment confirmation email.'),
        FAQ(question='What is the return policy?', answer='You can return products within 30 days of delivery for a full refund.'),
        FAQ(question='How do I change my shipping address?', answer='You can change your shipping address from your account settings before the order is shipped.'),
        FAQ(question='How do I contact customer service?', answer='You can contact our customer service through the support page on our website.')
    ]
    db.session.add_all(faqs)
    db.session.commit()

    # Create contact queries
    contact_queries = [
        ContactQuery(name='Alice Smith', email='alice@example.com', message='I have a question about my order.'),
        ContactQuery(name='Bob Johnson', email='bob@example.com', message='I need help with a product.'),
        ContactQuery(name='Charlie Lee', email='charlie@example.com', message='I want to change my shipping address.'),
        ContactQuery(name='Diana Green', email='diana@example.com', message='I have a question about payment.')
    ]
    db.session.add_all(contact_queries)
    db.session.commit()

    # Create banners
    banners = [
        Banner(title='Summer Sale', image_url='banner_image_url_1'),
        Banner(title='New Arrivals', image_url='banner_image_url_2'),
        Banner(title='Holiday Discounts', image_url='banner_image_url_3'),
        Banner(title='Clearance Sale', image_url='banner_image_url_4')
    ]
    db.session.add_all(banners)
    db.session.commit()

    # Create featured products
    featured_products = [
        FeaturedProduct(product_id=products[0].id, priority=1),
        FeaturedProduct(product_id=products[1].id, priority=2),
        FeaturedProduct(product_id=products[2].id, priority=3),
        FeaturedProduct(product_id=products[3].id, priority=4)
    ]
    db.session.add_all(featured_products)
    db.session.commit()

    print("Database populated successfully!")

if __name__ == '__main__':
    with app.app_context():
        populate_database()
