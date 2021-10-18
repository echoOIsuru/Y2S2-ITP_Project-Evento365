package com.project.evento.projectioninterface;

public interface PayemntInterface {
	
	 Long getCusid();
	 String getCustomerName();
	 String getEmail();
	 String getMethod();
	 Long getSumtotal();
	 Long getDistotal();
	 Float getDiscountPercent();
	 Float getOtherpercent();
	 
	 //"sum(e.amount) AS Distotal, (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100 AS DiscountPercent
	 //, 100 - (sum(e.amount)/(sum(p.amount)-sum(e.amount)))*100 AS Otherpercent

}
