$(document).ready(function() {
    const styles = `
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #555;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                background-color: #fff;
                padding: 2rem;
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.51);
                border-radius: 18px;
                width: 300px;
                text-align: center;
            }
            h1 {
                margin-bottom: 1rem;
                color: #333;
            }
            form {
                display: flex;
                flex-direction: column;
            }
            label {
                margin-bottom: 0.5rem;
                color: #555;
            }
            input, select, button {
                margin-bottom: 1rem;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 14px;
                font-size: 1rem;
            }
            button {
                background-color: #007bff;
                color: #fff;
                border: none;
                cursor: pointer;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    `;

    $('head').append(styles);

    const loginFormHTML = `
        <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <br>
                <label for="loginType">Login Type:</label>
                <select id="loginType" name="loginType">
                    <option value="manager">Manager</option>
                    <option value="customer">Customer</option>
                </select>
                <br>
                <button type="submit">Login</button>
            </form>
        </div>
    `;

    $('body').append(loginFormHTML);

    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        let username = $('#username').val();
        let password = $('#password').val();
        let loginType = $('#loginType').val();

        $.ajax({
            url: 'http://localhost:8080/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username: username, password: password, loginType: loginType }),
            success: function(response) {
                alert('Login successful!');
                if (loginType === 'manager') {
                    window.location.href = 'dishcreate.html';
                } else {
                    window.location.href = 'dishview.html';
                }
            },
            error: function(xhr, status, error) {
                alert('Login failed: ' + xhr.responseText);
                // Handle login error (e.g., show error message)
            }
        });
    });
});
