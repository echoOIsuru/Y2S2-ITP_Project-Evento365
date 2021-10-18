package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Deleted_Promo")

public class DeletedPromo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long record_ID;
	
	@Column(name ="promo_ID")
	private long promo_ID;
	
	@Column(name ="code")
	private String code;
	
	@Column(name ="amount")
	private Integer amount;
	
	@Column(name ="count")
	private Integer count;
	
	public DeletedPromo() {
		
	}
	
	public DeletedPromo(long promo_ID, String code, Integer amount, Integer count) {
		super();
		this.promo_ID = promo_ID;
		this.code = code;
		this.amount = amount;
		this.count = count;
	}
	public long getRecord_ID() {
		return record_ID;
	}

	public void setRecord_ID(long record_ID) {
		this.record_ID = record_ID;
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

