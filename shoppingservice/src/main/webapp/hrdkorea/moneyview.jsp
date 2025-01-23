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
			<h2> 회원매출조회 </h2>
			<div>
				<table class="viewtable" border="1">
					<thead>
						<tr>
							<th> 회원번호 </th>
							<th> 회원성명 </th>
							<th width="150px"> 고객등급 </th>
							<th width="150px"> 매출 </th>
						</tr>
					</thead>
					
					<tbody class="moneytbody">	
						
					</tbody>
				</table>
			</div>
		</div>
		
		<jsp:include page="/hrdkorea/footer.jsp"></jsp:include>
	</div> 

	<script src="./js/index.js"></script>
	<script> moneyFindAll() </script>
</body>
</html>