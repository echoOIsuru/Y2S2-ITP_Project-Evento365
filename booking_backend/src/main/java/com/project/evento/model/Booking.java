package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "booking")

public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long booking_id;
	
	@Column(name = "customer_id")
	private String customer_id;
	
	@Column(name ="booking_date")
	private String booking_date;
	
	@Column(name = "event_type")
	private String event_type;
	
	@Column(name = "location_id")
	private long location_id;
	
	@Column(name = "gusts_count")
	private long gusts;
	
	@Column(name = "total_amount")
	private String total;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "status")
	private String status;
	
	public Booking() {
		
	}
	
	public Booking(String customer_id, String booking_date, String event_type, long location_id, long gusts,
			String total, String date, String status) {
		super();
		this.customer_id = customer_id;
		this.booking_date = booking_date;
		this.event_type = event_type;
		this.location_id = location_id;
		this.gusts = gusts;
		this.total = total;
		this.date = date;
		this.status = status;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public long getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(long booking_id) {
		this.booking_id = booking_id;
	}
	public String getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}
	public String getBooking_date() {
		return booking_date;
	}
	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
	}
	public String getEvent_type() {
		return event_type;
	}
	public void setEvent_type(String event_type) {
		this.event_type = event_type;
	}
	public long getLocation_id() {
		return location_id;
	}
	public void setLocation_id(long location_id) {
		this.location_id = location_id;
	}
	public long getGusts() {
		return gusts;
	}
	public void setGusts(long gusts) {
		this.gusts = gusts;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
}
