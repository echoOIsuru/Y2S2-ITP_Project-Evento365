package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicleRent")
public class VehicleRent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long vrID;
	
	@Column(name = "reg_no")
	private long regNo;
	
	@Column(name = "rentdate")
	private String date;
	
	@Column(name = "bookingId")
	private String bookingId;
	
	public VehicleRent() {
		
	}
	
	public VehicleRent(long regNo,String date) {
		super();
		this.regNo = regNo;
		this.date = date;
	}
	public long getVrID() {
		return vrID;
	}
	public void setVrID(long vrID) {
		this.vrID = vrID;
	}
	public long getRegNo() {
		return regNo;
	}
	public void setRegNo(long regNo) {
		this.regNo = regNo;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBookingId() {
		return bookingId;
	}

	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}

}
