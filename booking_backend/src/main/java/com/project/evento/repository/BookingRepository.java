package com.project.evento.repository;



import java.util.List;

import org.springframework.data.domain.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.evento.model.Booking;



public interface BookingRepository extends JpaRepository<Booking, Long>{
	
	@Query(value="select * from Booking order by booking_id desc limit 1", nativeQuery= true)
	public List<Booking>ggwp();

	@Query("select book from Booking book where book.location_id=:searchText or book.status like %:name% or book.booking_date like %:name% or book.event_type like %:name%" )
	public List<Booking>findAllSearchBooking(@Param("searchText") Long searchText, @Param("name") String name);
	
//	@Query("select book from Booking book where book.location_id=:searchText or book.status like :name% or book.gusts=:name or book.booking_date=:name or book.location_id=:name or book.event_type=:name")
//	public List<Booking>findAllSearchBooking(@Param("searchText") Long searchText, @Param("name") String name);
}
