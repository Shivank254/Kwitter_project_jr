
//firebase links

var firebaseConfig = {
    apiKey: "AIzaSyBlnKxo5FKs6yb2UhWOkDyFo9FCRph5zQU",
    authDomain: "kwiiter-project.firebaseapp.com",
    databaseURL: "https://kwiiter-project.firebaseio.com",
    projectId: "kwiiter-project",
    storageBucket: "kwiiter-project.appspot.com",
    messagingSenderId: "1047951990650",
    appId: "1:1047951990650:web:47b5b9e4f290f06d0800c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function add_user(){

    user_login_username = document.getElementById("username").value;

    if( user_login_username == ""){

        alert("Please enter your username to get registered");

    }

    else{

        localStorage.setItem("user_login_userID", user_login_username);

        window.location = "kwitter_room.html";

    }

    document.getElementById("username").innerHTML = "";

}

user_login_userID_get = localStorage.getItem("user_login_userID");

document.getElementById("welcome_user").innerHTML = "Welcome " + user_login_userID_get;

function logout_fn(){

    localStorage.removeItem("user_login_userID");

    window.location = "index.html";

}

