<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        /* General Reset */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f5f7fa, #eef2f6);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Email Container */
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: linear-gradient(135deg, #ffffff, #fafafa);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
            animation: fadeInUp 1s ease-in-out;
        }

        /* Header Section */
        .header {
            background: linear-gradient(135deg, #4a90e2, #6ab1f7);
            color: #ffffff;
            text-align: center;
            padding: 40px 20px;
            position: relative;
            overflow: hidden;
        }
        .header h1 {
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1px;
            margin: 0;
            animation: slideInLeft 1s ease-in-out;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -50%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            transform: skewX(-25deg);
            animation: shimmer 2s infinite alternate;
        }

        /* Content Section */
        .content {
            padding: 30px 20px;
            line-height: 1.8;
            color: #333333;
            animation: fadeIn 1s ease-in-out;
        }
        .content p {
            font-size: 18px;
            margin: 15px 0;
        }
        .content a {
            color: #4a90e2;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease-in-out;
        }
        .content a:hover {
            color: #357abd;
        }

        /* Button Animation */
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 14px 30px;
            background: linear-gradient(135deg, #4a90e2, #6ab1f7);
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(74, 144, 226, 0.3);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .button:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(74, 144, 226, 0.4);
        }

        /* Footer Section */
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666666;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            animation: fadeIn 1s ease-in-out;
        }
        .footer a {
            color: #4a90e2;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease-in-out;
        }
        .footer a:hover {
            color: #357abd;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @keyframes shimmer {
            from {
                left: -50%;
            }
            to {
                left: 150%;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <h1>We've Got Your Message!</h1>
        </div>

        <!-- Content Section -->
        <div class="content">
            <p>Hey {{ $mailData['name'] }},</p>
            <p>Thanks for reaching out! We’re excited to hear from you and will get back to you shortly.</p>
            <p>In the meantime, if you have any urgent questions, feel free to drop us a line at <a href="mailto:support@example.com">support@example.com</a>.</p>
            <p>We’re here to help and can’t wait to assist you further!</p>
            <a href="http://localhost:5173/" class="button">Visit Our Website</a>
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; {{ date('Y') }} iFISH. All rights reserved.</p>
            <p>
                Follow us on:
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a> |
                <a href="#">LinkedIn</a>
            </p>
        </div>
    </div>
</body>
</html>
