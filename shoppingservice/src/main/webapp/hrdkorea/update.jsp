<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel='stylesheet' href='index.css'>
<title>Insert title here</title>
</head>
<body>
		
	<div id="wrap">
		<jsp:include page="/hrdkorea/header.jsp"></jsp:include>
		<jsp:include page="/hrdkorea/menu.jsp"></jsp:include>
		
		<div id="index">
			<h2> 홈쇼핑 회원 정보 수정 </h2>
			<div>
				<table border="1">
					<tr>
						<th> 회원번호(자동발생) </th>
						<td width="400px"> <input class="custnoInput" maxlength="6" disabled="disabled"/> </td>
					</tr>
					<tr>
						<th> 회원성명 </th>
						<td> <input class="custnameInput" type="text" maxlength="20" /> </td>
					</tr>
					<tr>
						<th> 회원전화 </th>
						<td> <input class="phoneInput" type="tel" maxlength="13" placeholder="예: 010-1234-5678" /> </td>
					</tr>
					<tr>
						<th> 회원주소 </th>
						<td> <input class="addressInput" Style="width: 250px;" type="text" maxlength="60" /> </td>
					</tr>
					<tr>
						<th> 가입일자 </th>
						<td> <input class="joindateInput" type="text" /> </td>
					</tr>
					<tr>
						<th> 고객등급 [ A:VIP, B:일반, C:직원 ] </th>
						<td> <input class="gradeInput" type="text" maxlength="1" /> </td>
					</tr>
					<tr>
						<th> 도시코드 </th>
						<td> <input class="cityInput" maxlength="2" /> </td>
					</tr>
					<tr>
						<td class="btn" colspan="2">
							<button onclick="memberUpdate()" type="button" > 수 정 </button>
							<button onclick="location.href='memberview.jsp'" type="button" > 조 회 </button>
						</td>
					</tr>
				</table>
			</div>
		</div>
		
		<jsp:include page="/hrdkorea/footer.jsp"></jsp:include>
	</div>
	
	<script src="./js/index.js"></script>
	<script> memberFind() </script>

</body>
</html>