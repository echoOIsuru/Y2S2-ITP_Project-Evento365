package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.TemporaryItemCart;

@Repository
public interface TemporaryItemCartRepository extends JpaRepository<TemporaryItemCart, Integer>{

}
