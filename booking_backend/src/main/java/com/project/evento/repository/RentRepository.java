package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.RentalItem;


@Repository
public interface RentRepository extends JpaRepository <RentalItem, Integer>{

}
