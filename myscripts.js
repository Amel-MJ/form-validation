
document.getElementById('form').addEventListener('submit', function(event){

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var pass= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/

  let name = document.getElementById("name");
  let adress = document.getElementById("adress");
  let mail = document.getElementById("mail");
  let passw = document.getElementById("passw");
  let comment = document.getElementById("comment");


   
   if (name.value == "") {
    alert("merci de remplir ce champ Name!");
    }

   if (adress.value == "") {
    alert("merci de remplir ce champ Adresse!");
    }

    if ((mail.value == "")||(!re.test(mail.value))) {
    alert("merci de remplir ce champ mail correctement!");
    }

    if(passw.value=="" || !pass.test(passw.value)){
    alert("merci de remplir ce champ passeword correctement!");
    }

    if (comment.value =="") {
      alert("merci de remplir ce champ Commentaire!");
    }

})
