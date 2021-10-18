package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;


public class EventaplannerReport {
	
	
	private String name;	
	
	private String img;
	
	private String event_planner;
	
	
	private Long count;	

	public EventaplannerReport() {
		
					
		
	}
	
   
	public EventaplannerReport(String name, String img, String event_planner,  Long count) {
		super();
		this.name = name;
		this.img = img;
		this.event_planner =event_planner ;
		this.count = count;	
		
		
		
	}
	
	
	
	
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getEvent_planner() {
		return event_planner;
	}

	public void setEvent_planner(String event_planner) {
		this.event_planner = event_planner;
	}

	public  Long getCount() {
		return count;
	}

	public void setCount( Long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "EventaplannerReport [name=" + name + ", img=" + img + ", event_planner=" + event_planner + ", count="
				+ count + "]";
	}


}
