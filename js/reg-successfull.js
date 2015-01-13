
function ckeckValidation() 
{

		var allow_age=document.getElementById("over_age").checked
		if(allow_age)
		{

			var f_name = document.getElementById('First_Name').value;
			var l_name=document.getElementById('Last_name').value;
			var mail_value=document.getElementById('E-mail_address').value;
			var mielage_value=document.getElementById('Mileage').value;
			var donate_value=document.getElementById('Donate_mileage');
				
			var regExp_for_name= /^[A-Za-z]{3,20}$/;
			var regExp_for_mail_value=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
			var regExp_for_mielage_value=/^(0|[1-9][0-9]*)$/;
			var regExp_for_donate_value=/^(0|[1-9][0-9]*)$/;

			var isfNamecorrect = regExp_for_name.test(f_name);
			var islNamecorrect = regExp_for_name.test(l_name);
			var isMailcorrect = regExp_for_mail_value.test(mail_value);
			var isMielegecorrect = regExp_for_mielage_value.test(mielage_value);
			var isDonatecorrect = regExp_for_donate_value.test(donate_value.value);

			if(isfNamecorrect==false)
			{
				document.getElementById('first_error').style.display= 'block';
				
			}
			if(islNamecorrect==false)
			{
				document.getElementById('last_error').style.display= 'block';
				
			}
			if(isMailcorrect==false)
			{
				document.getElementById('email_error').style.display= 'block';
				
			}
			if(isMielegecorrect==false)
			{
				document.getElementById('mileage_error').style.display= 'block';
				
			}
			if(isDonatecorrect==false)
			{
				document.getElementById('donate_error').style.display= 'block';
				
			} 

			if(isfNamecorrect && islNamecorrect && isMailcorrect && isMielegecorrect && isDonatecorrect)
				{
					
							document.getElementById('register-part').style.display='none';
							document.getElementById('registered-part').style.display='block';
				}
			else if(donate_value.value<2500)
					 {
				 	document.getElementById('donate_error').style.display= 'block';
					 }
				
				
	

			
		}
		else
		{
			alert("Sorry, You are not allowed !!");
		}
}

function hide_error(id1, id2)
			{

				document.getElementById(id1).style.display='none';
				document.getElementById(id2).value="";
			}

