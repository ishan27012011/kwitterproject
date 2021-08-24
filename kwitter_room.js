
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCYybLcsAaT8Hnz6PYSKWdXU9nh3xyC3vI",
      authDomain: "kwitterapp-2af1a.firebaseapp.com",
      databaseURL: "https://kwitterapp-2af1a-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-2af1a",
      storageBucket: "kwitterapp-2af1a.appspot.com",
      messagingSenderId: "372330415750",
      appId: "1:372330415750:web:fb14f7ead569611e193307"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name=localStorage.getItem("user_name");
document.getElementById("show_name").innerHTML="Welcome "+user_name; 
function add_room(){
var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "Adding Room"
});
localStorage.setItem("room_name", room_name);
window.location="chatroom.html";
}
    function getData() {firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
      //Start code
console.log("Rooms_name - "+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
      };
function redirectToRoomName(name) {
localStorage.setItem("room_name", name);
window.location="chatroom.html";      
}
