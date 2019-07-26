package com.example.MyApp.repository;



import com.example.MyApp.model.Team;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * TeamRepository
 */
public interface TeamRepository extends JpaRepository<Team,Long>{

    
}