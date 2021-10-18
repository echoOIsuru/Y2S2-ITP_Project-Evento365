package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hiring")

public class Hiring {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	
	private long hiring_id;
	
	@Column(name = "cus_id")
	private String cus_id;
	
	@Column(name = "cus_address")
	private String cus_address;
	
	@Column(name = "event_date")
	private String event_date;
	
	@Column(name = "event_planner")
	private String event_planner;
	
	
	public Hiring() {
		
		
		
		
		
	}
	
	
	
	
	public Hiring(String cus_id, String cus_address, String event_date, String event_planner) {
		super();
		this.cus_id = cus_id;
		this.cus_address = cus_address;
		this.event_date = event_date;
		this.event_planner = event_planner;
	}
	public long getHiring_id() {
		return hiring_id;
	}
	public void setHiring_id(long hiring_id) {
		this.hiring_id = hiring_id;
	}
	public String getCus_id() {
		return cus_id;
	}
	public void setCus_id(String cus_id) {
		this.cus_id = cus_id;
	}
	public String getCus_address() {
		return cus_address;
	}
	public void setCus_address(String cus_address) {
		this.cus_address = cus_address;
	}
	public String getEvent_date() {
		return event_date;
	}
	public void setEvent_date(String event_date) {
		this.event_date = event_date;
	}
	public String getEvent_planner() {
		return event_planner;
	}
	public void setEvent_planner(String event_planner) {
		this.event_planner = event_planner;
	}
	

}
