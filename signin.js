const toast = (message, bgColor = "red", color = "white", fontWeight = "bold" , marginTop = "50px", borderRadius = "50px") => {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: bgColor,
            color: color,
            fontWeight: fontWeight,
            marginTop,
            borderRadius,
        },
        onClick: function () {},
    }).showToast();
};

const signIn = () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        toast("Please fill in all fields.", "red");
        return;
    }

    // Retrieve users from local storage
    const allUsers = JSON.parse(localStorage.getItem("user")) || [];

    // Check if the user exists
    const user = allUsers.find((u) => u.email === email && u.password === password);

    if (user) {
        toast("Sign in successful!", "green");
        setTimeout(() => {
            window.location.href = 'express.html'; // Redirect to the next page
        }, 2000); // Delay redirection for 2 seconds to show the success message
    } else {
        toast("Invalid email or password. Please try again.", "red");
    }
};