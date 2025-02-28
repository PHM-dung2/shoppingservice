package shoppingservice.hrdkorea.controller;

import java.io.IOException;
import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import shoppingservice.hrdkorea.model.dao.MoneyDao;
import shoppingservice.hrdkorea.model.dto.MemberDto;

@WebServlet("/hrdkorea/money")
public class MoneyController extends HttpServlet{
//	1. 회원매출 조회
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ArrayList<MemberDto> result = MoneyDao.getinstance().moneyFindAll();
			ObjectMapper mapper = new ObjectMapper();
			String jsonResult = mapper.writeValueAsString(result);
		resp.setContentType( "application/json" );
		resp.getWriter().print( jsonResult );
	} // f end
	
}
