package com.example.MyApp.service;

import java.util.List;

import com.example.MyApp.model.Car;
import com.example.MyApp.repository.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CarServiceImpl
 */
@Service
public class CarServiceImp implements CarService {
    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> getCars() {
        System.out.println(""+carRepository.findAll());
        return carRepository.findAll();
    }

}