package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Vehicle;
import com.project.evento.model.VehicleReport;


@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Long>{
	@Query(value = "select * from vehicles ve where ve.reg_no not in (select r.reg_no from vehicle_rent r)", nativeQuery = true)
	public List<Vehicle> orderdVehicle();

	//Search query
	@Query("select c from Vehicle c where c.vBrand like concat('%',:keyword,'%') or c.vName like concat('%',:keyword,'%') "
			+ "or c.price like concat('%',:keyword,'%')")
			List<Vehicle> findByVBrandOrVNameOrPrice(@Param("keyword") String keyword);
	
	//Show available vehicles regarding to the booking date
	@Query(value = "select * from vehicles v where v.reg_no not in(select vr.reg_no from vehicle_rent vr where vr.rentdate like %:date%)", nativeQuery = true)
	public List <Vehicle> findDate(@Param("date")String date);
	
	//Show maximum hired Vehicle
	@Query(value ="SELECT v.*,`MAX_COUNT` From evento.vehicles as v INNER JOIN (SELECT reg_no, COUNT(reg_no) AS `MAX_COUNT` FROM evento.vehicle_rent GROUP BY reg_no ORDER BY `MAX_COUNT` DESC LIMIT 1) as v2 ON v.reg_no = v2.reg_no", nativeQuery = true)
	public List<Vehicle> maxVehicle();
	
	//Show Vehicle Hired summary
	@Query("SELECT new com.project.evento.model.VehicleReport (v.vImage,v.vBrand,v.vName,v.driver, count(rv.regNo)) FROM Vehicle v, VehicleRent rv WHERE v.regNo = rv.regNo GROUP BY v.regNo,v.vBrand,v.vName,v.driver")
	public List<VehicleReport >findSummary();
	
	//Total income from Vehicle
	@Query(value ="SELECT SUM(v.price) FROM evento.vehicles v, evento.vehicle_rent rv where v.reg_no = rv.reg_no", nativeQuery = true)
	public int vehicleIncome();
}