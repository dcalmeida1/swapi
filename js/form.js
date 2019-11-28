function showModalForm(){
  var modalForm = document.querySelector('.sw-form');
  modalForm.classList.add('sw-form--active');
}

function closeModalForm(){
  var modalForm = document.querySelector('.sw-form');
  modalForm.classList.remove('sw-form--active');
}

function validateForm(){
  var v1 = document.forms["swForm"]["name"].value;
  var v2 = document.forms["swForm"]["birth"].value;
  var v3 = document.forms["swForm"]["gender"].value;
  var v4 = document.forms["swForm"]["eye"].value;
  var v5 = document.forms["swForm"]["hair"].value;

  if ((v1 == "") || (v2 == "") || (v3 == "") || (v4 == "") || (v5 == "")){
    alert('Todos os campos são obrigatórios');
    return false;
  }else if ((v2.substr(v2.length-3) != "BBY") &&
            (v2.substr(v2.length-3) != "ABY") &&
            (isNaN(v2.substr(0,v2.length-3))) || v2.substr(0,v2.length-3) === ""){  
    alert('A data de nascimento deve começar com números e terminar com BBY ou ABY');
    return false;
  }else{
    saveCache(v1,v2,v3,v4,v5);
  }

  function saveCache(v1,v2,v3,v4,v5){
    var obj = {
      "name": v1,
      "height": null,
      "mass": null,
      "hair_color": v5,
      "skin_color": null,
      "eye_color": v4,
      "birth_year": v2,
      "gender": v3,
      "homeworld": null,
      "films": null,
      "species":null,
      "vehicles":null,
      "starships": null,
      "created": null,
      "edited": null,
      "url": null
    }


    if (localStorage.getItem('newChar') === null){
      localStorage.setItem('newChar',JSON.stringify([obj]));
    }else{
      var arr = localStorage.getItem('newChar');
      arr = JSON.parse(arr);
      arr.push(obj);
      localStorage.setItem('newChar',JSON.stringify(arr));
    }
  }
}

