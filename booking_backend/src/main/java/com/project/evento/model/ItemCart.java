package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item_cart")

public class ItemCart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rentalid;
	
	@Column(name = "booking_id")
	private int bookingid;
	
	@Column(name = "item_name")
	private String name;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "price")
	private double price;
	
	public ItemCart() {
		
	}

	public ItemCart(int bookingid, String name, int quantity, double price) {
		super();
		this.bookingid = bookingid;
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
	
	

	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public int getRentalid() {
		return rentalid;
	}

	public void setRentalid(int rentalitemid) {
		this.rentalid = rentalitemid;
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
	

}
