function ChangeText() {
    var p1 = document.getElementById("profile");
    p1.innerHTML = "Profile";
    p1.href = "Profile.html";
    sessionStorage.setItem('loggedIn', 'true');
}

function handleLogout() {
    resetNavBarToLogin();
    location.href = 'index.html';
}

function resetNavBarToLogin() {
    sessionStorage.removeItem('loggedIn');
    var p1 = document.getElementById("profile");
    p1.innerHTML = "Login";
    p1.href = "login.html";
}

function updateNavigationBar() {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
        var p1 = document.getElementById("profile");
        p1.innerHTML = "Profile";
        p1.href = "profile.html";
    }
}

window.addEventListener('load', updateNavigationBar);
