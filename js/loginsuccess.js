function login() 
{
	var email = document.getElementById('field_mail').value;
	var mileage = document.getElementById('field_mileage').value;
	var regExp_for_mail_value=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	var regExp_for_mielage_value=/^(0|[1-9][0-9]*)$/;
	var isMailcorrect = regExp_for_mail_value.test(email);
	var isMielegecorrect = regExp_for_mielage_value.test(mileage);
	if(isMailcorrect==false)
	{
	 	show('error_email');
	}
	if(isMielegecorrect==false)
	{
	 	show('error_mileage');
	}
	if(isMailcorrect && isMielegecorrect)
	{
		window.location="registration.html";
	}
}
function show(text)
{
	document.getElementById(text).style.display = 'block';
	return;
}