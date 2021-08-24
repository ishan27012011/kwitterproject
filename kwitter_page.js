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
 var room_name=localStorage.getItem("room_name");
 function send() {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";   
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag = "<h4>"+ names +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
dislike_button="<button class='btn btn-danger' id="+firebase_message_id+" value="+dislike+" onclick='updateDislike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-down'>Dislike: "+ Dislike +"</span></button><hr>";
row = name_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("index.html")
}
function back() {
window.location.replace("kwitter_room.html");
};
function updateLike(message_id) {
button_id=message_id;
like=document.getElementById(button_id).value;
updated_likes=Number(like)+1;
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}
function updateDislike(message_id) {
      button_id=message_id;
      dislike=document.getElementById(button_id).value;
      updated_dislikes=Number(dislike)+1;
      firebase.database().ref(room_name).child(message_id).update({
      dislike:updated_dislikes
      });
      }