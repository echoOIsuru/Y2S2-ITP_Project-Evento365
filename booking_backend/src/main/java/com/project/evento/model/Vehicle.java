package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //These are called as annotations 
@Table(name = "vehicles")   // create table

public class Vehicle {
	
	@Id    // create primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long regNo;
	
	@Column(name = "v_brand")    //create column name
	private String vBrand;
	
	@Column(name = "v_name")
	private String vName;
	
	@Column(name = "v_type")
	private String vType;
	
	@Column(name = "seats")
	private int seat;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "driver")
	private String driver;
	
	@Column(name = "vimage")
	private String vImage;
	
	@Column(name = "diverTpno")
	private String driverTpNo;
	
	@Column(name = "features")
	private String features;
		
	public Vehicle() {
		
	}
	
	public Vehicle(String vBrand, String vName, String vType, int seat, int price, String driver, String vImage, String driverTpNo, String features) {
		super();
		this.vBrand = vBrand;
		this.vName = vName;
		this.vType = vType;
		this.seat = seat;
		this.price = price;
		this.driver = driver;
		this.vImage = vImage;
		this.driverTpNo = driverTpNo;
		this.features = features;
	}
	
	public long getRegNo() {
		return regNo;
	}
	public void setRegNo(long regNo) {
		this.regNo = regNo;
	}
	public String getvBrand() {
		return vBrand;
	}
	public void setvBrand(String vBrand) {
		this.vBrand = vBrand;
	}
	public String getvName() {
		return vName;
	}
	public void setvName(String vName) {
		this.vName = vName;
	}
	public String getvType() {
		return vType;
	}
	public void setvType(String vType) {
		this.vType = vType;
	}
	public int getSeat() {
		return seat;
	}
	public void setSeat(int seat) {
		this.seat = seat;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
	}

	public String getvImage() {
		return vImage;
	}

	public void setvImage(String vImage) {
		this.vImage = vImage;
	}

	public String getDriverTpNo() {
		return driverTpNo;
	}

	public void setDriverTpNo(String driverTpNo) {
		this.driverTpNo = driverTpNo;
	}

	public String getFeatures() {
		return features;
	}

	public void setFeatures(String features) {
		this.features = features;
	}
	
	
}
