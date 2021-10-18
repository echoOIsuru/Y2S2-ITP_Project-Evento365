package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.evento.model.Booking;
import com.project.evento.model.DeletedBooking;

public interface DeletedBookingRepository extends JpaRepository<DeletedBooking, Long>{

	
	@Query(value="select * from deletebooking where customer_id like :cusID ",nativeQuery =true)
	public List<DeletedBooking> myDeletedBookings(@Param("cusID") String cusID);

	
}
