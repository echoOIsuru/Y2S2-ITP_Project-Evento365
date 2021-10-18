package com.project.evento.model;

public class VehicleReport {
	
	private String vimage;
	private String v_brand;
	private String v_name;
	private String driver;
	
	private Long count;
	
	public VehicleReport() {
		
	}

	public VehicleReport(String vimage, String v_brand, String v_name, String driver, Long count) {
		super();
		this.vimage = vimage;
		this.v_brand = v_brand;
		this.v_name = v_name;
		this.driver = driver;
		this.count = count;
	}
	
	public String getVimage() {
		return vimage;
	}

	public void setVimage(String vimage) {
		this.vimage = vimage;
	}

	public String getV_brand() {
		return v_brand;
	}

	public void setV_brand(String v_brand) {
		this.v_brand = v_brand;
	}

	public String getV_name() {
		return v_name;
	}

	public void setV_name(String v_name) {
		this.v_name = v_name;
	}

	public String getDriver() {
		return driver;
	}

	public void setDriver(String driver) {
		this.driver = driver;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "VehicleReport [vimage=" + vimage + ", v_brand=" + v_brand + ", v_name=" + v_name + ", driver=" + driver
				+ ", count=" + count + "]";
	}
}
