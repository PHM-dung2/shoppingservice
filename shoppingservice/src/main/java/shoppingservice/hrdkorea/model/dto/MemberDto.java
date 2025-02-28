package shoppingservice.hrdkorea.model.dto;

public class MemberDto {
//	1. 멤버변수
	private int custno;
	private String custname;
	private String phone;
	private String address;
	private String joindate;
	private String grade;
	private String city;
	private int 매출;
//	2. 생성자
	public MemberDto() {}
	public MemberDto(int custno, String custname, String phone, String address, String joindate, String grade, String city,
		int 매출) {
	super();
	this.custno = custno;
	this.custname = custname;
	this.phone = phone;
	this.address = address;
	this.joindate = joindate;
	this.grade = grade;
	this.city = city;
	this.매출 = 매출;
}
//	3. 메소드
	public int getCustno() {
		return custno;
	}
	public void setCustno(int custno) {
		this.custno = custno;
	}
	public String getCustname() {
		return custname;
	}
	public void setCustname(String custname) {
		this.custname = custname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getJoindate() {
		return joindate;
	}
	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	public int get매출() {
		return 매출;
	}
	public void set매출(int 매출) {
		this.매출 = 매출;
	}
	@Override
	public String toString() {
		return "MemberDto [custno=" + custno + ", custname=" + custname + ", phone=" + phone + ", address=" + address
				+ ", joindate=" + joindate + ", grade=" + grade + ", city=" + city + ", 매출=" + 매출 + "]";
	}
	
	
}
