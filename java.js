function validate()
{if(document.myForm.Zip.value==""||
isNaN(document.myForm.Zip.value)||
document.myForm.Zip.value.length!=5)
{
	alert("please provide a zip in a format#####.");
	document.myForm.Zip.focus();
	return false;
}
if(document.myForm.Cvv.value.length!=3)
{
	alert("please provide a correct cvv in the format ***.");
	document.myForm.Cvv.focus();
	return false;
}
if(document.myForm.Email.value=="")
{
	alert("please provide your email");
	document.myForm.Email.focus();
	return false;
}
if(document.myForm.NAME.value=="")
{
	alert("please provide your name on the card");
	document.myForm.NAME.focus();
	return false;
}
if(document.myForm.Cr.value.length!=15)
{
	alert("please provide a correct credit/debit card number");
	document.myForm.Cr.focus();
	return false;
}
}
function validateEmail()
{
	var emailID=document.myForm.Email.value;
	atpos=emailID.indexOf("@");
	dotpos=emailID.lastIndexOf(".");
	if(atpos<1||(dotpos-atpos<2))
	{
		alert("please enter correct email");
		document.myForm.Email.focus();
		return false;
	}return(true);
	}

function confir()
{
	window.confirm("money transfer is on the process");
}
