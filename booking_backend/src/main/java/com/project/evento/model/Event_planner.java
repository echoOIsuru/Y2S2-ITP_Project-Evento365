package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event_planners")
public class Event_planner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	
	private long event_planner_id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "phone_number")
	private String phone_number;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "skills")
	private String skills;
	
	@Column(name = "experience")
	private String experience;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "img")
	private String img;
	
	
	public Event_planner() {
		
		
		
	}
	
	
	
	
	
	public Event_planner(String name, String phone_number, String email, String skills, String experience, String price,
			String img) {
		super();
		this.name = name;
		this.phone_number = phone_number;
		this.email = email;
		this.skills = skills;
		this.experience = experience;
		this.price = price;
		this.img = img;
	}
	public long getEvent_planner_id() {
		return event_planner_id;
	}
	public void setEvent_planner_id(long event_planner_id) {
		this.event_planner_id = event_planner_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
	
	
	
}


