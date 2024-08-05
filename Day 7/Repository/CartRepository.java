package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> { 
}
