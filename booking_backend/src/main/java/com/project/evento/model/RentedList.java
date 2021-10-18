package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rented_list")

public class RentedList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rentid;
	
	@Column(name = "rental_item_id")
	private int rentalitemid;
	
	@Column(name = "quantity")
	private int quantity;
	
	public RentedList() {
		
	}
	
	public RentedList(int quantity) {
		super();
		this.quantity = quantity;
	}
	public int getRentid() {
		return rentid;
	}
	public void setRentid(int rentid) {
		this.rentid = rentid;
	}
	public int getRentalitemid() {
		return rentalitemid;
	}
	public void setRentalitemid(int rentalitemid) {
		this.rentalitemid = rentalitemid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
}
