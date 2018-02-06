(function () {
    
    
    // Initialize Firebase
    /*global firebase*/
    /*global promise*/
    /*global name*/
    /*global keys*/
    /*global datas*/
    /*global i*/
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
        var perc = 0;
        var ref = firebase.database().ref("storageUrls");
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref().child('testFolder/' + file.name);
        var task = storageRef.put(file);
        task.on('state_changed' , 
        snap => {
            perc = (snap.bytesTransferred / snap.totalBytes)*100;    
            progress.value = perc;
        }, err =>{
            console.log(err);
        }, done =>{
            console.log("image is uploaded");
            if(perc == 100){
                uploaded.classList.remove('hide');
                    storageRef.getDownloadURL().then(function(url){
                        ref.push(url);
                })
            }
        })
    });
    
    var ref = firebase.database().ref("storageUrls/");
    ref.on('value' , data => {
        
        if(data.val() != null){
            var toberemoved = document.querySelectorAll(".toberemoved");
            for(var i = 0; i < toberemoved.length; i ++){
                toberemoved[i].remove();
            }
            
            var datas = data.val();
            var keys = Object.keys(datas);
            for(var i = 0; i < keys.length; i++){
                var k = keys[i];
                var urls = datas[k];
                console.log(urls);
                var img = document.createElement("IMG");
                img.setAttribute("src", urls);
                img.className = "toberemoved";
                img.style.height = "25vh";
                img.style.padding = "1vh";
                img.style.border = "1px solid";
                picview.append(img);
            }
        }
    }, error => {
        console.log(error);
    })
    
}());