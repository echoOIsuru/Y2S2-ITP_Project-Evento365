package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bookFoods")

public class bookFood {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long order_food_id;
		
	@Column(name = "booking_id")
	private String booking_id;
	
	@Column(name = "food_package_id")
	private String food_package_id;
	
	@Column(name = "food_package_name")
	private String food_package_name;
	
	@Column(name = "cost")
	private String cost;
	
	@Column(name = "count")
	private String count;
	
	@Column(name = "total")
	private String total;
	
	@Column(name = "fimage")
	private String fimage;
	
	public bookFood() {
		
	}
	

	public bookFood(String booking_id, String food_package_id, String food_package_name, String cost , String count , String total , String fimage) {
		super();
		this.booking_id = booking_id;
		this.food_package_id = food_package_id;
		this.food_package_name = food_package_name;
		this.cost = cost;
		this.count = count;
		this.total = total;
		this.fimage = fimage;
	}

	public long getOrder_food_id() {
		return order_food_id;
	}

	public void setOrder_food_id(long order_food_id) {
		this.order_food_id = order_food_id;
	}

	public String getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(String booking_id) {
		this.booking_id = booking_id;
	}

	public String getFood_package_id() {
		return food_package_id;
	}

	public void setFood_package_id(String food_package_id) {
		this.food_package_id = food_package_id;
	}

	public String getFood_package_name() {
		return food_package_name;
	}

	public void setFood_package_name(String food_package_name) {
		this.food_package_name = food_package_name;
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
