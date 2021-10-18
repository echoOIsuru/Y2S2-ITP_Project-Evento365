package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="food")
@Table(name = "food")

public class food {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long foodid;
		
	@Column(name = "foodcategoryid")
	private String foodcategoryid;
	
	@Column(name = "foodcategory")
	private String foodcategory;
	
	@Column(name = "foodname")
	private String foodname;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "cost")
	private String cost;
	
	@Column(name = "fimage")
	private String fimage;

	public food() {
		
	}
	
	public food(long foodid, String foodcategoryid, String foodcategory, String foodname, String description,
			String cost ,String fimage) {
		super();
		this.foodid = foodid;
		this.foodcategoryid = foodcategoryid;
		this.foodcategory = foodcategory;
		this.foodname = foodname;
		this.description = description;
		this.cost = cost;
		this.fimage=fimage;
	}
	public long getFoodid() {
		return foodid;
	}
	public void setFoodid(long foodid) {
		this.foodid = foodid;
	}
	public String getFoodcategoryid() {
		return foodcategoryid;
	}
	public void setFoodcategoryid(String foodcategoryid) {
		this.foodcategoryid = foodcategoryid;
	}
	public String getFoodcategory() {
		return foodcategory;
	}
	public void setFoodcategory(String foodcategory) {
		this.foodcategory = foodcategory;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	
	public String getFimage() {
		return fimage;
	}
	public void setFimage(String fimage) {
		this.fimage = fimage;
	}
	
	
}
