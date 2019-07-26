package com.example.MyApp.repository;

import com.example.MyApp.model.Car;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * CarRepository
 */
public interface CarRepository extends JpaRepository<Car,Long>{

    
}
