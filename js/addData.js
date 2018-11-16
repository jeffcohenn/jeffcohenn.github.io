const form = document.querySelector('#add-user-input');

form.addEventListener('submit', function(evt) {
	evt.preventDefault(); 
	db.collection('userInput').add({
		// created
		name: form.name.value, 
		email: form.email.value, 
		phone: form.phone.value,
		message: form.message.value,
		
});
	form.name.value = '';
	form.email.value = '';
	form.phone.value = '';
	form.message.value = '';
	
})