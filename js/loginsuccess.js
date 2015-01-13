function login () 
{
	var empty="";
	var email = document.getElementById('field_mail').value;
	var mileage = document.getElementById('field_mileage').value;
	if(email == empty)
		show('email_empty_error');
	if (mileage == empty)
	 {
	 	show('mileage_empty_error');
	 }
}
function show(text)
{
	document.getElementById(text).style.display = 'block';
}