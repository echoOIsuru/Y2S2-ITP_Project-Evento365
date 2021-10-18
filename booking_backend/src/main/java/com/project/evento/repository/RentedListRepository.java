package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.RentedList;

@Repository
public interface RentedListRepository extends JpaRepository<RentedList, Integer> {

}
