package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Cart;
import com.example.demo.Service.CartService;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    
    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getAllCarts() {
        return cartService.getAllCarts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable int id) { // Changed Long to int
        Cart cart = cartService.getCartById(id);
        return cart != null ? ResponseEntity.ok(cart) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Cart> createCart(@RequestBody Cart cart) {
        if (cart != null) {
            Cart createdCart = cartService.saveCart(cart);
            return ResponseEntity.ok(createdCart);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable int id, @RequestBody Cart cartDetails) { // Changed Long to int
        Cart cart = cartService.getCartById(id);
        if (cart != null) {
            cart.setName(cartDetails.getName());
            cart.setPrice(cartDetails.getPrice());
            cart.setTotalPrice(cartDetails.getTotalPrice());
            Cart updatedCart = cartService.saveCart(cart);
            return ResponseEntity.ok(updatedCart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable int id) { // Changed Long to int
        Cart cart = cartService.getCartById(id);
        if (cart != null) {
            cartService.deleteCart(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
