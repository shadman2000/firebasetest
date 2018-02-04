(function () {
    
    
    // Initialize Firebase
    /*global firebase*/
    var config = {
        apiKey: "AIzaSyBqb86TuRh3E6FJ5kiz_wpfVtw02bXYXEE",
        authDomain: "fir-test-a6a28.firebaseapp.com",
        databaseURL: "https://fir-test-a6a28.firebaseio.com",
        projectId: "fir-test-a6a28",
        storageBucket: "fir-test-a6a28.appspot.com",
        messagingSenderId: "842861710427"
    };
    firebase.initializeApp(config);
    
    
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    const logout = document.getElementById("logout");
    
    
}());