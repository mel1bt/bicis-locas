function validateForm(){
	var nom = document.getElementById("name").value;
	var ape = document.getElementById("lastname").value;
	var cor = document.getElementById("input-email").value;
	var contr = document.getElementById("input-password").value;
	//var opcion = document.getElementById("checkbox").selectedIndex;

    if(nom == null || nom.length == 0 || /^\s+$/.test(nom) ) {
        alert("Ingresa tu nombre.");
        return false;
    }

    if(ape == null || ape.length == 0 || /^\s+$/.test(ape) ) {
        alert("Ingresa tu apellido");
        return false;
    }
    
    if(cor == null || cor.length == 0 || /^\s+$/.test(cor) ) {
        alert("Debes completar las casillas!");
        return false;
    }
    
    if (contr.length <= 6 || contr.length == 0 || contr == "123456" || contr == "98754" || contr == "password" ) {
  		alert("Contraseña no válida.");
  		return false; 
	}
	/*
	if( opcion == null || opcion == "" ) {
	  alert("Por favor, seleccione una opción en checkbox.");
	}

	return true;    */
}