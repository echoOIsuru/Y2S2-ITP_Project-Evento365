package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Promo_Code")

public class Promocode {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long promo_ID;
	
	@Column(unique = true ,name ="code")
	private String code;
	
	@Column(name ="amount")
	private Integer amount;
	
	@Column(name ="count")
	private Integer count;
	
	public Promocode() {
		
	}
	
	public Promocode(String code, Integer amount, Integer count) {
		super();
		this.code = code;
		this.amount = amount;
		this.count = count;
	}
	public long getPromo_ID() {
		return promo_ID;
	}
	public void setPromo_ID(long promo_ID) {
		this.promo_ID = promo_ID;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Integer getAmount() {
		return amount;
	}
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
	

}
