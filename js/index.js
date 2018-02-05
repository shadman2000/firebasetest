(function () {
    
    
    // Initialize Firebase
    /*global firebase*/
    /*global promise*/
    var config = {
        apiKey: "AIzaSyBqb86TuRh3E6FJ5kiz_wpfVtw02bXYXEE",
        authDomain: "fir-test-a6a28.firebaseapp.com",
        databaseURL: "https://fir-test-a6a28.firebaseio.com",
        projectId: "fir-test-a6a28",
        storageBucket: "fir-test-a6a28.appspot.com",
        messagingSenderId: "842861710427"
    };
    firebase.initializeApp(config);
    
    
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const login = document.getElementById('login');
    const signup = document.getElementById('signup');
    const logout = document.getElementById('logout');
    const invalidpass = document.getElementById('wrongpass');
    
    login.addEventListener('click' , function() {
        const mymail = email.value;
        const mypass = pass.value;
        const auth = firebase.auth();
        //signIN
        const promise = auth.signInWithEmailAndPassword(mymail,mypass);
        promise.catch(function(e){
            if(e.message == "The password is invalid or the user does not have a password."){
                invalidpass.classList.remove('hide');
            }
            // window.location = "./logedin.html";
            console.log(e.message)
        });
    })
    
    
    signup.addEventListener('click' , function(){
        const mymail = email.value;
        const mypass = pass.value;
        const auth = firebase.auth();
        //signIN
        const promise = auth.createUserWithEmailAndPassword(mymail,mypass);
        promise.catch(function(e){ console.log(e.message)});
    })
    
    logout.addEventListener('click' , function(){
        firebase.auth().signOut();
    })
    
    firebase.auth().onAuthStateChanged(function(firebaseUser){
        if(firebaseUser){
            console.log(firebaseUser);
            logout.classList.remove('hide');
        }
        else{
            console.log("Not logged in");
            logout.classList.add('hide');
        }
    })
    
}());