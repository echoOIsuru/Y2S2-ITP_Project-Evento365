package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY )
private long id;


@Column(name = "cus_id")
private String cus_name;

@Column(name = "eventplanner_name")
private String eventplanner_name;

@Column(name = "feedback")
private String feedback;

public Feedback() {
	
	
	
}

public Feedback(String cus_name, String eventplanner_name, String feedback) {
	super();
	this.cus_name = cus_name;
	this.eventplanner_name = eventplanner_name;
	this.feedback = feedback;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getCus_name() {
	return cus_name;
}
public void setCus_name(String cus_name) {
	this.cus_name = cus_name;
}
public String getEventplanner_name() {
	return eventplanner_name;
}
public void setEventplanner_name(String eventplanner_name) {
	this.eventplanner_name = eventplanner_name;
}
public String getFeedback() {
	return feedback;
}
public void setFeedback(String feedback) {
	this.feedback = feedback;
}




}
