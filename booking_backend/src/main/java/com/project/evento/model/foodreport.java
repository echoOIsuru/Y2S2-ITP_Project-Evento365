package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;

public class foodreport {
	
	private String fimage;	
	
	private String food_package_name;
	
	private String food_package_id;
	
	private Long count;	
	
	public foodreport() {
		
	}
	
	

	public foodreport(String fimage, String food_package_name, String food_package_id, Long count) {
		super();
		this.fimage = fimage;
		this.food_package_name = food_package_name;
		this.food_package_id = food_package_id;
		this.count = count;
	}



	public String getFimage() {
		return fimage;
	}

	public void setFimage(String fimage) {
		this.fimage = fimage;
	}

	public String getFood_package_name() {
		return food_package_name;
	}

	public void setFood_package_name(String food_package_name) {
		this.food_package_name = food_package_name;
	}

	public String getFood_package_id() {
		return food_package_id;
	}

	public void setFood_package_id(String food_package_id) {
		this.food_package_id = food_package_id;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "foodreport [fimage=" + fimage + ", food_package_name=" + food_package_name + ", food_package_id=" + food_package_id + ", count="
				+ count + "]";
	}

}
