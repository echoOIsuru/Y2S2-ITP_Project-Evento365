package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class OrderReport2 {

	
	

		
	
    private Long order_id;
    
    private Double total;
    
    private int cus_id;
    
    private String quantity;
    
	private String total_items;
	
 
	
	private String address;
	
	
	private String email;
	
	
	private String date;

	
	
	

	public OrderReport2() {
		super();
	}



	public OrderReport2(Long order_id,Double total,int cus_id,String total_items, String quantity, String address, String email, String date) {
		super();
		this.order_id = order_id;
		this.total= total;
		this.cus_id=cus_id;
		 this.quantity=quantity;
		this.total_items = total_items;
		this.address = address;
		this.email = email;
		this.date = date;
	}



	public String getQuantity() {
		return quantity;
	}



	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}



	public int getCus_id() {
		return cus_id;
	}



	public void setCus_id(int cus_id) {
		this.cus_id = cus_id;
	}



	public String getTotal_items() {
		return total_items;
	}



	public Double getTotal() {
		return total;
	}



	public void setTotal(Double total) {
		this.total = total;
	}



	public void setTotal_items(String total_items) {
		this.total_items = total_items;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public Long getOrder_id() {
		return order_id;
	}



	public void setOrder_id(Long order_id) {
		this.order_id = order_id;
	}



	@Override
	public String toString() {
		return "OrderReport2 [order_id=" + order_id + ", total=" + total + ", cus_id=" + cus_id + ", quantity="
				+ quantity + ", total_items=" + total_items + ", address=" + address + ", email=" + email + ", date="
				+ date + "]";
	}






	
	
	
	
 
	




	
	
	
	
	
	
	
}
