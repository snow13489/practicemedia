var firebaseConfig = {
    apiKey: "AIzaSyB5H253yvwnnvASMpV0qHV_5rfE_ZNlOrc",
    authDomain: "socialmedia-9e49f.firebaseapp.com",
    databaseURL: "https://socialmedia-9e49f-default-rtdb.firebaseio.com",
    projectId: "socialmedia-9e49f",
    storageBucket: "socialmedia-9e49f.appspot.com",
    messagingSenderId: "195128157802",
    appId: "1:195128157802:web:338cdcdaf1d8c986be4c13",
    measurementId: "G-Y5BMNPREQC"
  };
  firebase.initializeApp(firebaseConfig);


  function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose: "media interacting"
    });
        
  }