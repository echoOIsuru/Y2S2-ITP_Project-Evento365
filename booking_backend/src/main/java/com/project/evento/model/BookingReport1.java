package com.project.evento.model;

public class BookingReport1 {

	String location;
	Long count;
	
	
	public BookingReport1() {
		super();
	}


	public BookingReport1(String location, Long count) {
		super();
		this.location = location;
		this.count = count;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public Long getCount() {
		return count;
	}


	public void setCount(Long count) {
		this.count = count;
	}


	@Override
	public String toString() {
		return "BookingReport1 [location=" + location + ", count=" + count + "]";
	}
	
	
	
	
}
