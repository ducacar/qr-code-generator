QR Code Generator
This is a web application that allows users to generate QR codes from URLs. It provides a simple interface where users can input a URL, and the application generates a downloadable QR code image.

Features
Input a URL and generate a QR code.
Honey Pot mechanism to prevent bot submissions.
Error handling for invalid URLs and bot detections.
Rate limiting to prevent abuse.
Technologies Used
Frontend: React
Backend: Node.js, Express
QR Code Generation: qrcode library
Validation: validator library
Security: Helmet, rate-limiting with express-rate-limit
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/ducacar/qr-code-generator.git
cd qr-code-generator
Install dependencies for both frontend and backend:

bash
Copy code
# Navigate to frontend directory
cd frontend
npm install

# Navigate to backend directory
cd ../backend
npm install
Create a .env file in the root of the backend directory and configure environment variables as needed (e.g., PORT, NODE_ENV, etc.).

# Make sure you are in the backend directory
cd ../backend
node index.js

# Make sure you are in the frontend directory
open new terminal
cd ../frontend
npm run dev
Open your browser and navigate to (http://localhost:5173/) to view the application.

Usage
Enter a valid URL in the input field.
Click on "Generate QR Code" to generate and download the QR code image.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
