
function ckeckValidation() {
  
	var f_name = document.getElementById('First_Name').value;
	var l_name=document.getElementById('Last_name').value;
	var mail_value=document.getElementById('E-mail_address').value;
	var mielage_value=document.getElementById('Mileage').value;
	var donate_value=document.getElementById('Donate_mileage');
		
	var regExp_for_name= /[A-Za-z]{3,20}/;
	var regExp_for_mail_value=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	var regExp_for_mielage_value=/^(0|[1-9][0-9]*)$/;
	var regExp_for_donate_value=/^(0|[1-9][0-9]*)$/;

	var isNamecorrect = (regExp_for_name.test(f_name)&&regExp_for_name.test(l_name));
	var isMailcorrect = regExp_for_mail_value.test(mail_value);
	var isMielegecorrect = regExp_for_mielage_value.test(mielage_value);
	var isDonatecorrect = regExp_for_donate_value.test(donate_value.value);

	if(isNamecorrect && isMailcorrect && isMielegecorrect && isDonatecorrect)
	{
		if(donate_value.value<2500)
		{
			document.getElementById('donate_error').style.display= 'block';
		}
		else{
				document.getElementById('register-part').style.display='none';
				document.getElementById('registered-part').style.display='block';
			}
}
}