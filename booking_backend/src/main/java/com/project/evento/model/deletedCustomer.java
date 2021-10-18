package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "deletedCustomer")
public class deletedCustomer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long deletedid;
	
	@Column (name="id")
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "nic")
	private String nic;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "birthday")
	private String birthday;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "reg_date")
	private String reg_date;
	
	@Column(unique = true ,name = "email")
	private String email;
	
	@Column(name = "sec_ques_no")
	private int sec_ques_no;
	
	@Column(name = "sec_ques_answer")
	private String sec_ques_answer;
	
	@Column(name = "image")
	private String image;
	

	
	public deletedCustomer() {
		
	}

	
	public deletedCustomer( long id, String name, String address, String nic, String gender,
			String username, String password, String birthday, String mobile, String reg_date, String email,
			int sec_ques_no, String sec_ques_answer, String image) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.nic = nic;
		this.gender = gender;
		this.username = username;
		this.password = password;
		this.birthday = birthday;
		this.mobile = mobile;
		this.reg_date = reg_date;
		this.email = email;
		this.sec_ques_no = sec_ques_no;
		this.sec_ques_answer = sec_ques_answer;
		this.image = image;
	}






	public long getDeletedId() {
		return deletedid;
	}

	public void setDeletedId(long deletedId) {
		this.deletedid = deletedId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNic() {
		return nic;
	}

	public void setNic(String nic) {
		this.nic = nic;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getSec_ques_no() {
		return sec_ques_no;
	}

	public void setSec_ques_no(int sec_ques_no) {
		this.sec_ques_no = sec_ques_no;
	}

	public String getSec_ques_answer() {
		return sec_ques_answer;
	}

	public void setSec_ques_answer(String sec_ques_answer) {
		this.sec_ques_answer = sec_ques_answer;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "deletedCustomer [deletedId=" + deletedid + ", id=" + id + ", name=" + name + ", address=" + address
				+ ", nic=" + nic + ", gender=" + gender + ", username=" + username + ", password=" + password
				+ ", birthday=" + birthday + ", mobile=" + mobile + ", reg_date=" + reg_date + ", email=" + email
				+ ", sec_ques_no=" + sec_ques_no + ", sec_ques_answer=" + sec_ques_answer + ", image=" + image + "]";
	}

	


}
