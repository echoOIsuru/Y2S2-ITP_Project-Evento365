package com.project.evento.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Admin;
import com.project.evento.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long>{

	Optional<Customer> findByUsernameAndPassword (String username, String password);
	Optional<Customer> findByEmail(String email); 
	
	
	@Query("select c from Customer c where c.name like concat('%',:keyword,'%') or c.email like concat('%',:keyword,'%') "
			+ "or c.address like concat('%',:keyword,'%') or c.nic like concat('%',:keyword,'%') or  c.birthday like concat('%',:keyword,'%') "
			+ "or c.mobile like concat('%',:keyword,'%') or c.gender like concat('%',:keyword,'%')")
	List<Customer> findByNameOrEmailOrAddressOrNicOrBirthdayOrMobileOrGenderOrCustomerType(@Param("keyword") String keyword);
	
	@Query(value ="SELECT COUNT(c.Id) FROM customer c WHERE c.Gender like 'Male' ", nativeQuery = true)
	public int customerGenderMaleCount();
	
	@Query(value ="SELECT COUNT(c.Id) FROM customer c WHERE c.Gender like 'Female' ", nativeQuery = true)
	public int customerGenderFemaleCount();
	
	
}
