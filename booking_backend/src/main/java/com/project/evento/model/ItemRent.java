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
	private int rent;
	
	@Column(name = "booking_id")
	private int bookingid;
	
	@Column(name = "total_price")
	private double totalprice;
	
	public ItemRent() {
		
	}
	
	public ItemRent(int bookingid, double totalprice) {
		super();
		this.bookingid = bookingid;
		this.totalprice = totalprice;
	}
	public int getRent() {
		return rent;
	}
	public void setRent(int rent) {
		this.rent = rent;
	}
	public int getBookingid() {
		return bookingid;
	}
	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}
	public double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(float totalprice) {
		this.totalprice = totalprice;
	}
}
