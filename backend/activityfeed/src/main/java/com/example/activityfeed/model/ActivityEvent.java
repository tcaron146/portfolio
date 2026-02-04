package com.example.activityfeed.model;

import java.time.LocalDateTime;

public class ActivityEvent {
    private String userId;
    private String activityType; // run, hike, ski, fish
    private LocalDateTime timestamp;
    private int relevanceScore;

    public ActivityEvent(String userId, String activityType, LocalDateTime timestamp, int relevanceScore) {
        this.userId = userId;
        this.activityType = activityType;
        this.timestamp = timestamp;
        this.relevanceScore = relevanceScore;
    }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public String getActivityType() { return activityType; }
    public void setActivityType(String activityType) { this.activityType = activityType; }
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    public int getRelevanceScore() { return relevanceScore; }
    public void setRelevanceScore(int relevanceScore) { this.relevanceScore = relevanceScore; }
}
