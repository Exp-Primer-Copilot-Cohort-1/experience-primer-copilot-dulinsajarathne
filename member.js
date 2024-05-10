function skillsMember() {
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var db = firebase.firestore();
  var docRef = db.collection("users").doc(uid);
  var skills = [];
  docRef.get().then(function(doc) {
    if (doc.exists) {
      var data = doc.data();
      skills = data.skills;
    }
  });
  return skills;
}