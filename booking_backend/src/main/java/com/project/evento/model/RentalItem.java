package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RentalItem")

public class RentalItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rentalitemid;
	
	@Column(name = "item_name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "rental_per_day")
	private double rentalperday;
	
	@Column(name = "total_units")
	private int totalunits;
	
	@Column(name = "available_units")
	private int availableunits;
	
	

	@Column(name = "image")
	private String image;
	

	public RentalItem() {
		
	}
	
	public RentalItem(String name, String description, double rentalperday, int totalunits, String image, int availableunits) {
		super();
		this.name = name;
		this.description = description;
		this.rentalperday = rentalperday;
		this.totalunits = totalunits;
		this.image = image;
		this.availableunits = availableunits;
	}
	
	public int getRentalitemid() {
		return rentalitemid;
	}
	public void setRentalitemid(int rentalitemid) {
		this.rentalitemid = rentalitemid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getRentalperday() {
		return rentalperday;
	}
	public void setRentalperday(double rentalperday) {
		this.rentalperday = rentalperday;
	}
	public int getTotalunits() {
		return totalunits;
	}
	public void setTotalunits(int totalunits) {
		this.totalunits = totalunits;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	public int getAvailableunits() {
		return availableunits;
	}

	public void setAvailableunits(int availableunits) {
		this.availableunits = availableunits;
	}
	
}
