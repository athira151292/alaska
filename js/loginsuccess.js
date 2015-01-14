function login(submit_id) 
{
	var email = document.getElementById('field_mail').value;
	var mileage = document.getElementById('field_mileage').value;

	if(email== "" || email==null)
	{
		document.getElementById('field_mail').style.display='none';
		document.getElementById('email_empty_error').style.display='block';
	}
	if (mileage == "" || mileage==null)
	 {
	 	show('mileage_empty_error');
	 }

}
function show(text)
{
	document.getElementById(text).style.display = 'block';
	document.getElementById(text).style.display = 'block';
	return;
}