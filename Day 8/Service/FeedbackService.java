package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Feedback;
import com.example.demo.Repository.FeedbackRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getFeedbackById(int id) {
        return feedbackRepository.findById(id);
    }

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }

    public Feedback updateFeedback(int id, Feedback feedbackDetails) {
        Feedback feedback = feedbackRepository.findById(id).orElseThrow();
        feedback.setUsername(feedbackDetails.getUsername());
        feedback.setRating(feedbackDetails.getRating());
        feedback.setMessage(feedbackDetails.getMessage());
        feedback.setEmail(feedbackDetails.getEmail());
        return feedbackRepository.save(feedback);
    }
}