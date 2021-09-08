package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "temporary_item_cart")

public class TemporaryItemCart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rentalitemid;
	
	@Column(name = "item_name")
	private String name;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "price")
	private double rentalperday;
	
	public TemporaryItemCart() {
		
	}

	public TemporaryItemCart(String name, int quantity, double rentalperday) {
		super();
		this.name = name;
		this.quantity = quantity;
		this.rentalperday = rentalperday;
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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getRentalperday() {
		return rentalperday;
	}

	public void setRentalperday(double rentalperday) {
		this.rentalperday = rentalperday;
	}
	
	
	

}
