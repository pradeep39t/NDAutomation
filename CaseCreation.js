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
		document.getElementsByName('arDcAddressCargoPA_zipCode5').onchange();
		document.getElementById('arDcAddressCargoPA_residencyCounty').onchange();
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
		document.getElementById('monthdateRequestedIndv_0').onchange();
		setTimeout(function() {}, 10000);
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
	if(document.getElementById('Heading_1').innerHTML=='Initiate Data Collection'){
		document.getElementById('caseAction').value='PI';
		document.getElementsByName('SUBMIT')[0].click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Case Action Confirmation'){
		document.getElementById('caseModeConfirmation').value='Y';
		document.getElementById('actionButtonNext').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Household Information'){
		document.getElementById('fbSNAPSw').value='N';
		document.getElementById('button2').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Household Address - Summary' || 
	document.getElementById('Heading_1').innerHTML=='Primary Individual' || 
	document.getElementById('Heading_1').innerHTML=='Program Request - Summary' || 
	document.getElementById('Heading_1').innerHTML=='Person Demographics - SSN Application/Armed Services' || document.getElementById('Heading_1').innerHTML=='Person Demographics - Summary' ||
	document.getElementById('Heading_1').innerHTML=='ABAWD - Clock' ||
	document.getElementById('Heading_1').innerHTML=='Non Financial - Questions' ||
	document.getElementById('Heading_1').innerHTML=='Compliance - Questions' ||
	document.getElementById('Heading_1').innerHTML=='Issuance - Details' ||
	document.getElementById('Heading_1').innerHTML=='Liquid Asset - Summary' ||
	document.getElementById('Heading_1').innerHTML=='Unearned Income - Converted Income Summary' ||
	document.getElementById('Heading_1').innerHTML=='Earned Income - Converted Income Summary'){
		document.getElementById('actionButtonNext').click();		
	}	
	if(document.getElementById('Heading_1').innerHTML=='Person Details'){
		document.getElementsByName('verifications')[0].value='HC';
		document.getElementsByName('verificationSource')[0].value='HC';
		document.getElementById('maritalStatus').value='MA';
		document.getElementById('primaryRace').value='AS';
		document.getElementById('ethnicity').value='NH';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Person Household Status'){
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();		
		document.getElementsByName('householdVerification')[0].value='HC';
		document.getElementById('actionButtonNext').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Individual Interviewed / Applicant - Details'){
		document.getElementsByName('interviewType')[0].value='SH';
		document.getElementsByName('interviewMode')[0].value='A';
		document.getElementById('all').checked=true;
		document.getElementById('cin').selectedIndex=1;
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Education - Details'){
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();				
		document.getElementById('highestLevel').value='NF';
		document.getElementById('highestLevelVerification').value='HC';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Living Arrangement - Details'){
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementById('stlLivingArng').value='HO';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Person Demographics - Details'){
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();		
		document.getElementsByName('identityDocumentTypeHcc')[0].value='PPT';
		document.getElementsByName('identityVerification')[0].value='HC';
		document.getElementsByName('identityDocumentViewed')[0].value='OR';
		document.getElementById('monthidDocViewedDt').value=today.getMonth()+1;
		document.getElementById('dateidDocViewedDt').value=today.getDate();
		document.getElementById('yearidDocViewedDt').value=today.getFullYear();
		document.getElementsByName('identityDocumentComments')[0].value='Test';
		document.getElementsByName('citizenship')[0].value='US';
		document.getElementsByName('citizenVerificationCode')[0].value='HC';
		document.getElementsByName('citizenshipDocumentViewed')[0].value='ORIG';	
		document.getElementById('monthcitizenDocViewedDt').value=today.getMonth()+1;
		document.getElementById('datecitizenDocViewedDt').value=today.getDate();
		document.getElementById('yearcitizenDocViewedDt').value=today.getFullYear();
		document.getElementsByName('citizenshipSVESStatus')[0].value='VE';
		document.getElementById('monthcitizenSvesDt').value=today.getMonth()+1;
		document.getElementById('datecitizenSvesDt').value=today.getDate();
		document.getElementById('yearcitizenSvesDt').value=today.getFullYear();			
		document.getElementsByName('citizenshipDocumentComments')[0].value='Test';
		document.getElementsByName('northDakotaResident')[0].value='Y';
		document.getElementsByName('residentVerification')[0].value='HC';
		document.getElementsByName('personMovedToMontana')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Person Demographics - Conviction / Rehabilitation / Strike'){		
		document.getElementsByName('felonyDrugConviction')[0].value='N';
		document.getElementsByName('hidingOrRunning')[0].value='N';
		document.getElementsByName('warrant')[0].value='N';
		document.getElementsByName('violatingParole')[0].value='N';
		document.getElementsByName('snapBnfForDrugs')[0].value='N';
		document.getElementsByName('buySellSnapBnf')[0].value='N';
		document.getElementsByName('snapBnfForGuns')[0].value='N';
		document.getElementsByName('duplicateSnapBenefits')[0].value='N';
		document.getElementsByName('disqualifiedFromSnapTanf')[0].value='N';
		document.getElementsByName('isIndvStrike')[0].value='N';		
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='SNAP Work Registrant - Details'){
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementById('formStatus').value='FSG';
		document.getElementsByName('monthdateSNAPWorkRegFormSigned')[0].value=today.getMonth()+1;
		document.getElementsByName('datedateSNAPWorkRegFormSigned')[0].value=today.getDate();
		document.getElementsByName('yeardateSNAPWorkRegFormSigned')[0].value=today.getFullYear();
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='ABAWD - Details'){
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementById('workHrsWeek').value='Y';
		document.getElementById('workHrsWeekVerf').value='HC';
		document.getElementById('fitToParticipate').value='Y';
		document.getElementById('participationVerf').value='HC';		
		document.getElementById('indivCombMthlyHrsAvg').value='Y';
		document.getElementById('indivCombMthlyHrsAvgVerf').value='HC';		
		document.getElementById('actionButtonNext').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Household Individuals - Questions'){		
		document.getElementsByName('disabled')[0].value='N';
		document.getElementsByName('receiveOtherStateBenefit')[0].value='N';
		document.getElementsByName('receiveRoom')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Asset Questions'){		
		document.getElementsByName('resourcesEDTestSw')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Income Questions'){		
		document.getElementsByName('incomeEDTestSw')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Expense - Questions'){		
		document.getElementsByName('requireDependentCare')[0].value='N';
		document.getElementsByName('hasMedicalDeductions')[0].value='N';
		document.getElementsByName('hasSupportDeductions')[0].value='N';
		document.getElementsByName('shelterExpensesQuestion')[0].value='N';
		document.getElementsByName('utilityExpensesQuestion')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('Heading_1').innerHTML=='Wrapup - Run Eligibility'){
		document.getElementById('SUBMIT').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Wrapup - Eligibility Summary'){
		document.getElementById('next').click();
	}
	if(document.getElementById('Heading_1').innerHTML=='Benefit Authorization'){
		document.getElementsByName('changeReason_9966123')[0].value='NCH';
		document.getElementById('selectAll').checked = true;		
		document.getElementById('authorizeButton').click();
	}	
	if(document.getElementById('Heading_1').innerHTML=='Pregnancy - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();		
		document.getElementsByName('monthpregnancyDueDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datepregnancyDueDate')[0].value=new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
		document.getElementsByName('yearpregnancyDueDate')[0].value=today.getFullYear();			
		document.getElementsByName('numberOfUnborns')[0].value='1';
		document.getElementsByName('pregnancyDeterminedBy')[0].value='MV';
		document.getElementsByName('pregnancyVerification')[0].value='HC';
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('Heading_1').innerHTML=='Liquid Assets - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();					
		document.getElementsByName('typeCd')[0].value='CAS';
		document.getElementsByName('verification')[0].value='HC';
		document.getElementsByName('grossValue')[0].value='50';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Unearned Income - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();				
		document.getElementsByName('unearnedIncomeTp')[0].value='SS';
		document.getElementsByName('incomeSubType')[0].value='RET';
		document.getElementsByName('incomeSource')[0].value='Retirement';
		document.getElementsByName('amount')[0].value='30';
		document.getElementsByName('verification')[0].value='HC';
		document.getElementsByName('monthdateIncomeReceived')[0].value=today.getMonth()+1;
		document.getElementsByName('datedateIncomeReceived')[0].value=today.getDate();
		document.getElementsByName('yeardateIncomeReceived')[0].value=today.getFullYear();		
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Earned Income - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();			
		document.getElementsByName('type')[0].value='WA';
		document.getElementsByName('contractualIncomeSw')[0].value='N';
		document.getElementsByName('incomeFrequency')[0].value='MO';
		document.getElementsByName('incomeSource')[0].value='Salary';		
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Earned Income - Records'){
		document.getElementsByName('monthworksheetStart')[0].value=today.getMonth()+1;
		document.getElementsByName('monthfirstPayDateOnAfter')[0].value=today.getMonth()+1;
		document.getElementsByName('datefirstPayDateOnAfter')[0].value=today.getDate();
		document.getElementsByName('yearfirstPayDateOnAfter')[0].value=today.getFullYear();	
		document.getElementById('buildWs').click();			
		document.getElementsByName('wsAmount')[0].value='500';
		document.getElementsByName('numberOfHoursWorked')[0].value='80';		
		document.getElementsByName('verification')[0].value='HC';
		document.getElementById('actionButtonNext').click()		
	}
	if(document.getElementById('Heading_1').innerHTML=='Shelter Expense - Details'){
		document.getElementById('personIncurringExpense').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();				
		document.getElementsByName('expenseTypeCd')[0].value='SURE';
		document.getElementsByName('frequencyOfExpense')[0].value='MO';
		document.getElementsByName('isHouseholdCurrentlyOccupying')[0].value='Y';		
		document.getElementsByName('verification')[0].value='HC';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('Heading_1').innerHTML=='Shelter Expenses - Records'){
		document.getElementsByName('monthworksheetStart')[0].value=today.getMonth()+1;
		document.getElementsByName('monthfirstExpDateOnAfter')[0].value=today.getMonth()+1;
		document.getElementsByName('datefirstExpDateOnAfter')[0].value=today.getDate();
		document.getElementsByName('yearfirstExpDateOnAfter')[0].value=today.getFullYear();	
		document.getElementsByName('incurredPaidOnLastDay')[0].value='N';	
		document.getElementById('buildWs').click();			
		document.getElementsByName('wsAmount')[0].value='50';
		document.getElementById('actionButtonNext').click()		
	}
	if(document.getElementById('Heading_1').innerHTML=='Utility Expenses - Details'){
		document.getElementById('personIncurringExpense').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthreportDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datereportDate')[0].value=today.getDate();
		document.getElementsByName('yearreportDate')[0].value=today.getFullYear();
		document.getElementsByName('monthdiscoveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datediscoveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardiscoveryDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();				
		document.getElementsByName('utilityExpensesType')[0].value='WA';		
		document.getElementsByName('utilityVerification')[0].value='HC';
		document.getElementById('actionButtonNext').click()
	}		
}myFunction()
