package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.project.evento.model.RentalItem;


@Repository
public interface RentRepository extends JpaRepository <RentalItem, Integer>{

	@Query("select c from RentalItem c where c.name like concat('%',:keyword,'%') or c.description like concat('%',:keyword,'%') "
			+ "or c.rentalperday like concat('%',:keyword,'%') or c.totalunits like concat('%',:keyword,'%') or  c.availableunits like concat('%',:keyword,'%')")
	List<RentalItem> findByNameOrDescriptionOrRentalperdayOrTotalunitsOrAvailableunits(@Param("keyword") String keyword);
}
