package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "confirmfood")

public class confirmfood {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long confoodid;
		
	@Column(name = "booking_id")
	private String booking_id;
	
	@Column(name = "foodpackageid")
	private String foodpackageid;
	
	@Column(name = "foodpackagename")
	private String foodpackagename;
	
	@Column(name = "cost")
	private String cost;
	
	@Column(name = "count")
	private String count;
	
	@Column(name = "total")
	private String total;
	
	@Column(name = "fimage")
	private String fimage;
	
	public confirmfood() {
		
	}

	public confirmfood(long confoodid, String booking_id, String foodpackageid, String foodpackagename, String cost,
			String count, String total, String fimage) {
		super();
		this.confoodid = confoodid;
		this.booking_id = booking_id;
		this.foodpackageid = foodpackageid;
		this.foodpackagename = foodpackagename;
		this.cost = cost;
		this.count = count;
		this.total = total;
		this.fimage = fimage;
	}

	public long getConfoodid() {
		return confoodid;
	}

	public void setConfoodid(long confoodid) {
		this.confoodid = confoodid;
	}

	public String getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(String booking_id) {
		this.booking_id = booking_id;
	}

	public String getFoodpackageid() {
		return foodpackageid;
	}

	public void setFoodpackageid(String foodpackageid) {
		this.foodpackageid = foodpackageid;
	}

	public String getFoodpackagename() {
		return foodpackagename;
	}

	public void setFoodpackagename(String foodpackagename) {
		this.foodpackagename = foodpackagename;
	}

	public String getCost() {
		return cost;
	}

	public void setCost(String cost) {
		this.cost = cost;
	}

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public String getFimage() {
		return fimage;
	}

	public void setFimage(String fimage) {
		this.fimage = fimage;
	}
	
	

}
