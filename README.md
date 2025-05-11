
<body>
    <h1>ElevateWorks</h1>
   
 <p><img src="https://github.com/user-attachments/assets/be9f3e5b-d6be-4885-b06b-e51254fff945" alt="ElevateWorks Banner"></p> <br> <br>
 <p>A modern web platform for showcasing construction services, projects, blogs, and testimonials, built with Laravel and React.</p>

<p>
        <a href="https://laravel.com"><img src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel" alt="Laravel"></a>
        <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react" alt="React"></a>
        <a href="https://getbootstrap.com"><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap" alt="Bootstrap"></a>
        <a href="https://www.mysql.com"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql" alt="MySQL"></a>
    </p>

  <h2>Live Demo</h2>
    <p><a href="https://elevateworks.vercel.app/" target="_blank">Visit ElevateWorks</a></p>

    
<h2>Overview</h2>
    <p>ElevateWorks is a dynamic web application designed for the construction industry, offering a seamless experience for users to explore services, projects, blogs, and testimonials. It features a powerful admin panel for content management and a responsive frontend for engaging visitors. The backend is powered by Laravel, and the frontend is built with React, integrated via RESTful APIs. The contact form uses Gmail SMTP for email integration to handle user inquiries efficiently. Images are processed using Intervention Image, and APIs are tested with Postman.</p>
    <h2>Features</h2>
    <h3>Admin Panel</h3>
    <ul>
        <li>Dashboard: Displays active/inactive services, projects, articles, testimonials, members, and total users.</li>
        <li>Content Management: Create, edit, and delete services, projects, articles, testimonials, and team members.</li>
    </ul>
    <h3>User Frontend</h3>
    <ul>
        <li>Navigation: Home, About Us, Services, Projects, Blogs, and Contact Us.</li>
        <li>Home Page: Showcases the latest 4 services, 3 projects, 3 blogs, testimonials, team members, and a "Why Choose Us" section.</li>
        <li>About Us: Displays testimonials and company information.</li>
        <li>Services: Lists all services with a "Read More" option for detailed views.</li>
        <li>Projects: Showcases all projects with a "Read More" option for detailed views.</li>
        <li>Blogs: Features all blog posts with a "Read More" option for detailed views.</li>
        <li>Contact Us: Includes a contact form with Gmail SMTP integration for sending inquiries.</li>
    </ul>
    <h2>Project Structure</h2>
    <ul>
        <li><b>backend</b>: Laravel-based, handles API requests, database management, email functionality, and image processing.</li>
        <li><b>frontend</b>: React-based, provides a responsive UI with Bootstrap styling.</li>
        <li><b>Integration</b>: Frontend and backend communicate via RESTful APIs.</li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li><b>Backend</b>: Laravel, PHP, MySQL</li>
        <li><b>Frontend</b>: React, JavaScript, Bootstrap</li>
        <li><b>API</b>: RESTful APIs, tested with Postman</li>
        <li><b>Email</b>: Gmail SMTP via Laravel Mail</li>
        <li><b>Image Processing</b>: Intervention Image</li>
        <li><b>Deployment</b>: Vercel for frontend, InfinityFree for backend</li>
    </ul>
    <h2>Setup and Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>PHP >= 8.1</li>
        <li>Composer</li>
        <li>Node.js >= 16</li>
        <li>MySQL</li>
        <li>Gmail SMTP credentials for email</li>
    </ul>
    <h3>Backend (Laravel)</h3>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/imakbarsami/Construction.git</code></li>
        <li>Navigate to the backend directory: <code>cd backend</code></li>
        <li>Install dependencies: <code>composer install</code></li>
        <li>Copy <code>.env.example</code> to <code>.env</code> and configure database and Gmail SMTP settings (e.g., <code>MAIL_MAILER=smtp</code>, <code>MAIL_HOST=smtp.gmail.com</code>, <code>MAIL_USERNAME</code>, <code>MAIL_PASSWORD</code>).</li>
        <li>Generate app key: <code>php artisan key:generate</code></li>
        <li>Run migrations: <code>php artisan migrate</code></li>
        <li>Start the server: <code>php artisan serve</code> or deploy to InfinityFree.</li>
    </ol>
    <h3>Frontend (React)</h3>
    <ol>
        <li>Navigate to the frontend directory: <code>cd frontend</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Update the API base URL in the frontend configuration (e.g., <code>.env</code> file) to point to your backend (e.g., InfinityFree URL or <code>http://localhost:8000</code>).</li>
        <li>Start the development server: <code>npm start</code></li>
    </ol>
    <h2>Usage</h2>
    <ul>
        <li><b>Admin Panel</b>: Access at <code>/admin</code> (requires authentication). Manage content and view statistics.</li>
        <li><b>User Interface</b>: Explore services, projects, blogs, and more. Use the contact form to send inquiries, which are delivered via Gmail SMTP.</li>
        <li><b>Email Integration</b>: Configured in the backend <code>.env</code> file with Gmail SMTP to send contact form submissions.</li>
        <li><b>Image Processing</b>: Uses Intervention Image for handling image uploads and processing in the backend.</li>
        <li><b>API Testing</b>: APIs are tested using Postman to ensure functionality.</li>
    </ul>
    <h2>Contributing</h2>
    <p>We welcome contributions! Follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch: <code>git checkout -b feature-name</code></li>
        <li>Make changes and commit: <code>git commit -m "Add feature"</code></li>
        <li>Push to the branch: <code>git push origin feature-name</code></li>
        <li>Submit a pull request.</li>
    </ol>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
    <hr>
    <p>© 2025 ElevateWorks. All rights reserved.</p>
</body>
</html>
