package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "item_rent")
public class ItemRent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rentid;
	
	@Column(name = "booking_id")
	private int bookingid;
	
	@Column(name = "total_price")
	private float totalprice;
	
	public ItemRent() {
		
	}
	
	public ItemRent(float totalprice) {
		super();
		this.totalprice = totalprice;
	}
	public int getRentid() {
		return rentid;
	}
	public void setRentid(int rentid) {
		this.rentid = rentid;
	}
	public int getBookingid() {
		return bookingid;
	}
	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}
	public float getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(float totalprice) {
		this.totalprice = totalprice;
	}
}
