package com.example.MyApp.controller;

import com.example.MyApp.model.Car;

/**
 * CarBuilder
 */
public class CarBuilder {

    Car car = new Car();

    public CarBuilder id(Long id) {
        car.setId(id);
        return this;
    }

    public CarBuilder name(String name) {
        car.setName(name);
        return this;
    }

    public Car build() {
        return this.car;
    }
}