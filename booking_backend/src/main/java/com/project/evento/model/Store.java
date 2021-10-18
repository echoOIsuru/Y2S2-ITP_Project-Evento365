package com.project.evento.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "store")

public class Store {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long item_id;
	
	
	@Column(name ="item_title")
	private String item_title;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "itemcategory")
	private String itemcategory;
	
	@Column(name = "colour")
	private String colour;
	
	
	
	@Column(name = "additional")
	private String additional;
	
	@Column(name = "price")
	private Double price;
	
	@Column(name = "img_url")
	private String img_url;
	
	@Column(name = "availability")
	private String availability;
	
	
	
	public Store() {
		
	}
	
	public Store(String item_title, String description , String itemcategory,String colour ,
			String additional,Double price, String img_url,String availability ) {
		super();
		
		this.item_title = item_title;
		this.description = description;
		this.itemcategory = itemcategory;
		this.colour = colour;
		
		this.additional = additional;
		this.price = price;
		this.img_url = img_url;
		
	}
	
	public long getItem_id() {
		return item_id;
	}


	public void setItem_id(long item_id) {
		this.item_id = item_id;
	}

	

	public String getItem_title() {
		return item_title;
	}
	

	public void setItem_title(String item_title) {
		this.item_title = item_title;
	}
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	

	

	public void setItemcategory(String itemcategory) {
		this.itemcategory = itemcategory;
	}

	public String getColour() {
		return colour;
	}

	public void setColour(String colour) {
		this.colour = colour;
	}

	
	public String getAdditional() {
		return additional;
	}

	public void setAdditional(String additional) {
		this.additional = additional;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getImg_url() {
		return img_url;
	}

	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}

	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}

	public String getItemcategory() {
		return itemcategory;
	}

	

	
}
