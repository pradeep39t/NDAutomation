function myFunction(){
	var today=new Date();
	if(document.getElementById('Heading_1').innerHTML=='Register Application'){
		document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
		document.getElementsByName('datedateReceived')[0].value=today.getDate();
		document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
		document.getElementsByName('applicationSigned')[0].value='Y';
		document.getElementsByName('appModeCd')[0].value='IP';
		document.getElementsByName('appSubmittedBy')[0].value='SF';
		document.getElementsByName('firstName')[0].value='Husband';
		document.getElementsByName('lastName')[0].value='NDTest';
		document.getElementById('nextButton2').click();      
    	}
	if(document.getElementById('Heading_1').innerHTML=='Register Application - Address' && document.getElementsByName('arDcAddressCargoPA_addressLine1')[0].value==''){
		document.getElementsByName('arDcAddressCargoPA_addressLine1')[0].value='Richmond Circle';
		document.getElementsByName('arDcAddressCargoPA_addressLine22')[0].value='11th Street';
				document.getElementsByName('arDcAddressCargoPA_city')[0].value='Bismarck';
		document.getElementsByName('arDcAddressCargoPA_zipCode5')[0].value='58503';
		document.getElementById('arDcAddressCargoPA_validateAddr').click();
	} 
	if(document.getElementById('Heading_1').innerHTML=='Register Application - Address' && document.getElementsByName('arDcAddressCargoPA_addressLine1')[0].value!==''){
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Register Individual - Individual'){
		document.getElementsByName('lastName')[0].value='NDTest';
		document.getElementById('gender').value='M';
		document.getElementById('monthdateOfBirth1').value=Math.floor(Math.random() * 12)+1;
		document.getElementById('datedateOfBirth1').value=Math.floor(Math.random() * 28)+1;
		document.getElementById('yeardateOfBirth1').value=Math.floor(Math.random() * 11)+1980;
		document.getElementById('ssn1ssn').value=Math.floor(Math.random() * 899+100);
		document.getElementById('ssn2ssn').value=Math.floor(Math.random() * 99+10);
		document.getElementById('ssn3ssn').value=Math.floor(Math.random() * 8999+1000);
		if(document.getElementsByName('firstName')[0].value!==''){
			document.getElementById('actionButtonNext').click();
		}
	}
	if(document.getElementById('Heading_1').innerHTML=='File Clearance - Results'){
		document.getElementById('button2').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Register Individual - Summary'){
		document.getElementById('button4').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Register Program - Program'){
		document.getElementById('maFormCd').value='AFA';
		document.getElementById('Medicaid').checked = false;
		document.getElementById('Cash').checked =false;
		document.getElementById('SNAP').checked = true;
		document.getElementById('selAll').checked = true;
		document.getElementById('button4').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Register Program - Expedited Screening'){
		document.getElementById('expeditedCountableGrossIncome').value='200';
		document.getElementById('expeditedRentMortgage').value='10';
		document.getElementById('expeditedMigrant').value='N';
		document.getElementById('button3').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Register Application - Summary'){
		document.getElementById('workerAssignment').value='115046';
		document.getElementById('initiateDC').value='Y';
		document.getElementById('button4').click();
	}
}myFunction()
