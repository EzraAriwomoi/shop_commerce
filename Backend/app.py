import re
from flask import Flask, request, jsonify, render_template, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)  # Enable CORS

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'  # Add a secret key for flashing messages
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# Define the Customer model
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    phonenumber = db.Column(db.String(15), nullable=False)

# Define the Merchant model
class Merchant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    merchant_name = db.Column(db.String(100), nullable=False)
    contact_person = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    physical_address = db.Column(db.String(200), nullable=False)
    business_type = db.Column(db.String(100), nullable=False)
    business_registration_number = db.Column(db.String(100), nullable=False)
    tax_identification_number = db.Column(db.String(100), nullable=False)
    years_in_operation = db.Column(db.Integer, nullable=False)
    website_url = db.Column(db.String(100), nullable=True)
    bank_account_details = db.Column(db.String(100), nullable=False)
    payment_methods_accepted = db.Column(db.String(100), nullable=False)
    transaction_fees = db.Column(db.String(100), nullable=False)
    product_categories = db.Column(db.String(100), nullable=False)
    product_listings = db.Column(db.String(100), nullable=False)
    sku_numbers = db.Column(db.String(100), nullable=False)

def validate_email(email):
    email_regex = r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    return re.match(email_regex, email)

def validate_password(password):
    password_regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    return re.match(password_regex, password)

def validate_phone(phone):
    phone_regex = r'^07\d{8}$'
    return re.match(phone_regex, phone)

@app.route('/register_customer', methods=['POST'])
def register_customer():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')
    phonenumber = data.get('phonenumber')

    if not all([first_name, last_name, email, password, phonenumber]):
        return jsonify({"error": "All fields are required"}), 400

    if not validate_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    if not validate_password(password):
        return jsonify({"error": "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character."}), 400

    if not validate_phone(phonenumber):
        return jsonify({"error": "Phone number must be in the format 07XXXXXXXX."}), 400

    hashed_password = generate_password_hash(password)

    try:
        new_customer = Customer(first_name=first_name, last_name=last_name, email=email, password=hashed_password, phonenumber=phonenumber)
        db.session.add(new_customer)
        db.session.commit()
        return jsonify({"message": "Customer registered successfully"}), 201
    except Exception as e:
        if "UNIQUE constraint failed: customer.email" in str(e):
            return jsonify({"error": "Customer with this email already exists"}), 400
        return jsonify({"error": str(e)}), 400

@app.route('/register_merchant', methods=['POST'])
def register_merchant():
    data = request.get_json()
    merchant_name = data.get('merchantName')
    contact_person = data.get('contactPerson')
    email = data.get('email')
    phone_number = data.get('phoneNumber')
    physical_address = data.get('physicalAddress')
    business_type = data.get('businessType')
    business_registration_number = data.get('businessRegistrationNumber')
    tax_identification_number = data.get('taxIdentificationNumber')
    years_in_operation = data.get('yearsInOperation')
    website_url = data.get('websiteURL')
    bank_account_details = data.get('bankAccountDetails')
    payment_methods_accepted = data.get('paymentMethodsAccepted')
    transaction_fees = data.get('transactionFees')
    product_categories = data.get('productCategories')
    product_listings = data.get('productListings')
    sku_numbers = data.get('skuNumbers')

    if not all([merchant_name, contact_person, email, phone_number, physical_address, business_type, business_registration_number, tax_identification_number, years_in_operation, bank_account_details, payment_methods_accepted, transaction_fees, product_categories, product_listings, sku_numbers]):
        return jsonify({"error": "All fields are required"}), 400

    if not validate_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    if not validate_phone(phone_number):
        return jsonify({"error": "Phone number must be in the format 07XXXXXXXX."}), 400

    try:
        new_merchant = Merchant(
            merchant_name=merchant_name,
            contact_person=contact_person,
            email=email,
            phone_number=phone_number,
            physical_address=physical_address,
            business_type=business_type,
            business_registration_number=business_registration_number,
            tax_identification_number=tax_identification_number,
            years_in_operation=years_in_operation,
            website_url=website_url,
            bank_account_details=bank_account_details,
            payment_methods_accepted=payment_methods_accepted,
            transaction_fees=transaction_fees,
            product_categories=product_categories,
            product_listings=product_listings,
            sku_numbers=sku_numbers
        )
        db.session.add(new_merchant)
        db.session.commit()
        return jsonify({"message": "Merchant registered successfully"}), 201
    except Exception as e:
        if "UNIQUE constraint failed: merchant.email" in str(e):
            return jsonify({"error": "Merchant with this email already exists"}), 400
        return jsonify({"error": str(e)}), 400
    
@app.route('/login_customer', methods=['POST'])
def login_customer():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not all([email, password]):
            return jsonify({"error": "Email and password are required"}), 400

        customer = Customer.query.filter_by(email=email).first()

        if not customer or not check_password_hash(customer.password, password):
            return jsonify({"error": "Invalid email or password"}), 401


        return jsonify({"message": "Login successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    with app.app_context():
        # db.drop_all()
        db.create_all()
    app.run(debug=True)