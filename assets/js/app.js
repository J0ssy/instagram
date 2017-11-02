function add() {
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que está en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un mensaje
	if (comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	} 
	//crear checkbox
	var chck = document.createElement('input');
		chck.type = 'checkbox';

	//creamos ícono de corazón
	var heart = document.createElement('i');
		heart.classList.add('fa', 'fa-heart', 'heart'); 

	//creamos ícono de basura
	var trash = document.createElement('i');
		trash.classList.add('fa', 'fa-trash', 'trash'); 

	//nodo de texto del textarea
	var textNewComment = document.createTextNode(comments);

	//Pasamos elementos
	var contenedorElemento = document.createElement('p');
		contenedorElemento.appendChild(textNewComment);
		newComments.appendChild(chck);
		newComments.appendChild(trash);
		newComments.appendChild(heart);
		newComments.appendChild(contenedorElemento);

		cont.appendChild(newComments);

	//Evento para cambiar a color rojo el ícono de corazón
	heart.addEventListener('click', function() {
		heart.classList.toggle('red');
	})

	//Evento para borrar comentario al presionar el tarro de basura
	trash.addEventListener('click', function() {
		cont.removeChild(newComments);
	})
}

