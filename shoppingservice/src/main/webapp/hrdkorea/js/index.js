// input dom 객체 가져오기
const domInput = () => {
	let custnoInput = document.querySelector('.custnoInput');
	let custnameInput = document.querySelector('.custnameInput');
	let phoneInput = document.querySelector('.phoneInput');
	let addressInput = document.querySelector('.addressInput');
	let joindateInput = document.querySelector('.joindateInput');
	let gradeInput = document.querySelector('.gradeInput');
	let cityInput = document.querySelector('.cityInput');
	
	let input = { 
		custnoInput : custnoInput , custnameInput : custnameInput , 
		phoneInput : phoneInput , addressInput : addressInput , 
		joindateInput : joindateInput , gradeInput : gradeInput , 
		cityInput : cityInput 
	};
	
	return input;
} // f end

// input 값 객체화
const inputValue = () => {
	// 원하는 dom객체 가져오기
	let input = domInput();
	
	let custno = input.custnoInput.value;
	let custname = input.custnameInput.value;
	let phone = input.phoneInput.value;
	let address = input.addressInput.value;
	let joindate = input.joindateInput.value;
	let grade = input.gradeInput.value;
	let city = input.cityInput.value;
	
	let value = {
		custno : custno , custname : custname , phone : phone , 
		address : address , joindate : joindate , grade : grade ,
		city : city
	};
	
	return value;
} // f end

// 등급 조회
const gradeState = ( objgrade ) => {
	let grade = null;
	if( objgrade == 'A' ){ grade = 'VIP'; }
	else if( objgrade == 'B' ){ grade = '일반'; }
	else if( objgrade == 'C' ){ grade = '직원'; }
	return grade;
} // f end

// 회원 등록시 회원번호 자동발생
const autoCustno = () => {
	let wno = null;
	const option = { method : 'GET' }
	fetch( '/shoppingservice/hrdkorea/member' , option )
		.then( r => r.json() )
		.then( data => {
			data.forEach( obj => {	
				wno = obj.custno + 1;
			}) // for end
		domInput().custnoInput.value = wno;
		}) // then end
		.catch( e => { console.log(e); } );
} // f end

// 가입일자 자동 발생
const autoJoindate = () => {
	let today = new Date();
	let year = today.getFullYear();
	let month = (today.getMonth()+1).toString().padStart(2, '0');
	let date = today.getDate().toString().padStart(2, '0');
	let wjoindate = year + '' + month + '' + date + '';
	domInput().joindateInput.value = wjoindate;
} // f end

const focusToInput = ( input ) => {
    // 특정 클래스를 가진 요소를 선택
    const inputElement = document.querySelector(`.${ input }`);

    if (inputElement) {
        // 해당 요소로 포커스를 이동
        inputElement.focus();
    } else {
        console.error('클래스 요소를 찾을 수 없습니다.');
    }
}

// 1. 회원 등록
const memberWrite = () => {
	// 입력객체 가져오기
	let dataObj = inputValue();
	// 유효성 검사
	if( !dataObj.custname ){ alert('회원성명이 입력되지 않았습니다.'); 
		focusToInput( 'custnameInput' ); return; }
	if( !dataObj.phone ){ alert('회원전화가 입력되지 않았습니다.');
		focusToInput( 'phoneInput' ); return; }
	if( !dataObj.address ){ alert('회원주소가 입력되지 않았습니다.'); 
		focusToInput( 'addressInput' ); return;	}
	if( !dataObj.grade ){ alert('고객등급이 입력되지 않았습니다.'); 
		focusToInput( 'gradeInput' ); return; }
	if( !dataObj.city ){ alert('도시코드가 입력되지 않았습니다.'); 
		focusToInput( 'cityInput' ); return; }
	
	if( !confirm('회원 등록을 하시겠습니까?') ){ return; } 
	// fetch 통신
	const option = {
		method : 'POST',
		headers : { 'Content-Type' : 'application/json' },
		body : JSON.stringify ( dataObj )
	} // o end
	fetch( `/shoppingservice/hrdkorea/member` , option )
		.then( r => r.json() )
		.then( data => {
			if( data == true ){ 
				alert(`회원등록이 완료되었습니다.`);
				domInput().custnameInput.value = '';
				domInput().phoneInput.value = '';
				domInput().addressInput.value = '';
				domInput().gradeInput.value = '';
				domInput().cityInput.value = '';
				autoCustno();
				autoJoindate();
			}
		}) // for end
		.catch( e => { console.log(e) } )

} // f end

// 2. 회원 목록 조회
const memberFindAll = () => {
	let membertbody = document.querySelector('.membertbody');
	
	let html = '';
	const option = { method : 'GET' }
	fetch( '/shoppingservice/hrdkorea/member' , option )
		.then( r => r.json() )
		.then( data => {
			data.forEach( obj => {
				let grade = gradeState( obj.grade );
				
			 	html += `<tr>
							<td> <a href="/shoppingservice/hrdkorea/update.jsp?custno=${obj.custno}"> ${ obj.custno } </a> </td>
							<td> ${ obj.custname } </td>
							<td> ${ obj.phone } </td>
							<td> ${ obj.address } </td>
							<td> ${ obj.joindate } </td>
							<td> ${ grade } </td>
							<td> ${ obj.city } </td>
						</tr>`
						
				wno = obj.custno + 1;
			}) // for end
			membertbody.innerHTML = html;
		}) // then end
		.catch( e => { console.log(e); } );
} // f end

// 3. 회원매출조회
const moneyFindAll = () => {
	let moneytbody = document.querySelector('.moneytbody');
	
	let html = '';
		
	const option = { method : 'GET' }
	fetch( `/shoppingservice/hrdkorea/money` , option )
		.then( e => e.json() )
		.then( data => {
			data.forEach( obj => {
				let grade = gradeState( obj.grade );
				
				html += `<tr>
							<td> ${ obj.custno } </td>
							<td> ${ obj.custname } </td>
							<td> ${ grade } </td>
							<td> ${ obj.매출 } </td>
						</tr>`
			}) // for end
			moneytbody.innerHTML = html;
		}) // then end
} // f end

// 수정할 회원번호 가져오기
const custnoFind = () => {
	let custno = new URL( location.href ).searchParams.get('custno');
	return custno;
} // f end

// 3. 개별 회원 정보 가져오기
const memberFind = () => {
	const option = { method : 'GET' }
	fetch( `/shoppingservice/hrdkorea/member` , option )
		.then( r => r.json() )
		.then( data => {
			data.forEach( obj => {
				if( obj.custno == custnoFind() ){
					domInput().custnoInput.value = obj.custno;
					domInput().custnameInput.value = obj.custname;
					domInput().phoneInput.value = obj.phone;
					domInput().addressInput.value = obj.address;
					domInput().joindateInput.value = obj.joindate;
					domInput().gradeInput.value = obj.grade;
					domInput().cityInput.value = obj.city;
					return;
				} // if end
			}) // for end
		}) // then end
		.catch( e => { console.log( e ) } )
} // f end

// 4. 회원 수정
const memberUpdate = () => {
	// 입력객체 가져오기
		let dataObj = inputValue();
		// 유효성 검사
		if( !dataObj.custname ){ alert('회원성명이 입력되지 않았습니다.'); 
			focusToInput( 'custnameInput' ); return; }
		if( !dataObj.phone ){ alert('회원전화가 입력되지 않았습니다.');
			focusToInput( 'phoneInput' ); return; }
		if( !dataObj.address ){ alert('회원주소가 입력되지 않았습니다.'); 
			focusToInput( 'addressInput' ); return;	}
		if( !dataObj.grade ){ alert('고객등급이 입력되지 않았습니다.'); 
			focusToInput( 'gradeInput' ); return; }
		if( !dataObj.city ){ alert('도시코드가 입력되지 않았습니다.'); 
			focusToInput( 'cityInput' ); return; }
		
		if( !confirm('회원 수정을 하시겠습니까?') ){ return; } 
		// fetch 통신
		const option = {
			method : 'PUT',
			headers : { 'Content-Type' : 'application/json' },
			body : JSON.stringify ( dataObj )
		} // o end
		fetch( `/shoppingservice/hrdkorea/member` , option )
			.then( r => r.json() )
			.then( data => {
				if( data == true ){ alert(`회원수정이 완료되었습니다.`); }
			}) // for end
			.catch( e => { console.log(e) } )
	
} // f end