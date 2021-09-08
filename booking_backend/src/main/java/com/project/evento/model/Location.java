package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "location")


public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long location_id;
	
	@Column(name = "name")
	private String locationName;
	
	@Column(name = "price")
	private String locationPrice;
	
	@Column(name = "picture")
	private String picture;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "max_count")
	private String maxCount;
	
	
	
	public Location(long location_id, String locationName, String locationPrice, String picture, String address,
			String maxCount) {
		super();
		this.location_id = location_id;
		this.locationName = locationName;
		this.locationPrice = locationPrice;
		this.picture = picture;
		this.address = address;
		this.maxCount = maxCount;
	}

	public Location(){
		
	}

	public long getLocation_id() {
		return location_id;
	}

	public void setLocation_id(long location_id) {
		this.location_id = location_id;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public String getLocationPrice() {
		return locationPrice;
	}

	public void setLocationPrice(String locationPrice) {
		this.locationPrice = locationPrice;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMaxCount() {
		return maxCount;
	}

	public void setMaxCount(String maxCount) {
		this.maxCount = maxCount;
	}
	
	
	
}
