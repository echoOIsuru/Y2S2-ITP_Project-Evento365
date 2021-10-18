package com.project.evento.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "orders")

public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long order_id;
	
	
	@Column(name ="cus_id")
	private int cus_id;
	
	@Column(name = "total")
	private Double total;
	
	
	
	@Column(name = "total_items")
	private String total_items;
	
	@Column(name = "quantity")
	private String quantity;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "date")
	private String date;
	
	
	
	
	public Long getOrder_id() {
		return order_id;
	}

	public void setOrder_id(long order_id) {
		this.order_id = order_id;
	}

	public int getCus_id() {
		return cus_id;
	}

	public void setCus_id(int cus_id) {
		this.cus_id = cus_id;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
	
	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity=quantity;
	}
	
	public String getTotal_items() {
		return total_items;
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
	public Order() {
		
	}
	
	public Order(int cus_id, Double total , String total_items,String quantity,String address,String email,String date) {
		super();
		
		this.cus_id = cus_id;
		this.total = total;
		this.total_items = total_items;
		this.quantity=quantity;
		this.address= address;
		this.email= email;
		this.date =date;
		
		
		
	}
	
	

	

	
	
}
