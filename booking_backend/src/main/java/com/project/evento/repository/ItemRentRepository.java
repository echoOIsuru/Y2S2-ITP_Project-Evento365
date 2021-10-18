package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.ItemRent;

@Repository
public interface ItemRentRepository extends JpaRepository<ItemRent, Integer>{

}
