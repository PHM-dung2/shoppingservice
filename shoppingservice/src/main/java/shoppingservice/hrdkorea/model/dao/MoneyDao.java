package shoppingservice.hrdkorea.model.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import shoppingservice.hrdkorea.model.dto.MemberDto;


public class MoneyDao extends Dao{
//	싱글톤	
	private MoneyDao() {}
	private static MoneyDao instance = new MoneyDao();
	public static MoneyDao getinstance() { return instance; }
	
//	2. 회원 조회
	public ArrayList<MemberDto> moneyFindAll(){
		ArrayList<MemberDto> result = new ArrayList<>();
		try {
			String sql = "select me.custno , me.custname , me.grade , sum( mo.price ) 매출 "
					+ "from MEMBER_TBL_02 me join MONEY_TBL_02 mo on me.custno = mo.custno "
					+ "group by me.custno , me.custname , me.grade order by 매출 desc";
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while( rs.next() ) {
				MemberDto memberDto = new MemberDto();
				memberDto.setCustno(rs.getInt("custno"));
				memberDto.setCustname(rs.getString("custname"));
				memberDto.setGrade(rs.getString("grade"));
				memberDto.set매출(rs.getInt("매출"));
				result.add(memberDto);
;			} // w end
		}catch( SQLException e ) { System.out.println(e); }
		return result;
	} // f end
	
}
