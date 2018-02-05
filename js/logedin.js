(function () {
    
    
    // Initialize Firebase
    /*global firebase*/
    /*global promise*/
    /*global name*/
    var config = {
        apiKey: "AIzaSyBqb86TuRh3E6FJ5kiz_wpfVtw02bXYXEE",
        authDomain: "fir-test-a6a28.firebaseapp.com",
        databaseURL: "https://fir-test-a6a28.firebaseio.com",
        projectId: "fir-test-a6a28",
        storageBucket: "fir-test-a6a28.appspot.com",
        messagingSenderId: "842861710427"
    };
    firebase.initializeApp(config);
    
    const progress = document.getElementById('progress');
    const uploader = document.getElementById('files');
    const uploaded = document.getElementById('uploaded');
    const imgTest = document.getElementById("imgtest");
    const picview = document.getElementById("picview");
    
    uploader.addEventListener('change' , e => {
        var ref = firebase.database().ref("storageUrls");
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('testFolder/' + file.name);
        var task = storageRef.put(file);
        
        console.log(firebase.storage().ref('testFolder/').fullPath);
        
        task.on('state_changed' , 
        snap => {
            var perc = (snap.bytesTransferred / snap.totalBytes)*100;    
            progress.value = perc;
            if(perc == 100){
                uploaded.classList.remove('hide');
                storageRef.getDownloadURL().then(function(url){
                    ref.push(url);
                })
            }
        })
    });
    
    var ref = firebase.database().ref("storageUrls");
    ref.on('value' , data => {
        var datas = data.val();
        var keys = Object.keys(datas);
        console.log(keys);
    }, error => {
        console.log(error);
    })
    
}());