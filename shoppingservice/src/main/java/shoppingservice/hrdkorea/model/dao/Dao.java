package shoppingservice.hrdkorea.model.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Dao {
	protected Connection conn;
	
	protected Dao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/shoppingservice" , "root" , "1234");
		}catch( Exception e ) { System.out.println(e); }
	}
	private static Dao instance = new Dao();
	public static Dao getinstance() { return instance; }
}
