package com.project.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Deleted_Payment")

public class DeletedPayment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long recordID;
	
	@Column(name ="paymentID")
	private long paymentID;
	
	@Column(name ="promoID")
	private long promoID;
	
	@Column(name ="PaymentType_ID")
	private long payTypeID;
	
	@Column(name ="Customer_Id")
	private String customerId;
	
	@Column(name ="Customer_Name")
	private String customerName;
	
	@Column(name ="Payment_Date")
	private String paymentDate;
	
	@Column(name ="Status")
	private String status;
	
	@Column(name ="Payment_Method")
	private String paymentMethod;
	
	@Column(name ="Description")
	private String description;
	
	@Column(name ="Amount")
	private long amount;
	
	
	
	public DeletedPayment() {}

	public DeletedPayment(long recordID, long paymentID,long promoID, long payTypeID, String customerId, String customerName, String paymentDate, String status,
			String paymentMethod, String description, long amount) {
		super();
		this.paymentID = paymentID;
		this.payTypeID = payTypeID;
		this.promoID = promoID;
		this.paymentID = paymentID;
		this.customerId = customerId;
		this.customerName = customerName;
		this.paymentDate = paymentDate;
		this.status = status;
		this.paymentMethod = paymentMethod;
		this.description = description;
		this.amount = amount;
	}

	
	public long getPayTypeID() {
		return payTypeID;
	}

	public void setPayTypeID(long payTypeID) {
		this.payTypeID = payTypeID;
	}

	public long getPromoID() {
		return promoID;
	}

	public void setPromoID(long promoID) {
		this.promoID = promoID;
	}

	public long getPaymentID() {
		return paymentID;
	}

	public void setPaymentID(long paymentID) {
		this.paymentID = paymentID;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getRecordID() {
		return recordID;
	}

	public void setRecordID(long recordID) {
		this.recordID = recordID;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}
	
	

}
