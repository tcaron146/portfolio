package com.example.activityfeed.service;

import com.example.activityfeed.model.ActivityEvent;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ActivityService {

    // Store user activities: userId -> deque of activities
    private final Map<String, Deque<ActivityEvent>> userActivities = new HashMap<>();

    // Add new activity
    public void addActivity(ActivityEvent event) {
        userActivities.putIfAbsent(event.getUserId(), new LinkedList<>());
        userActivities.get(event.getUserId()).addFirst(event); // recent first
    }

    // Get top N activities for a user
    public List<ActivityEvent> getFeed(String userId, int n) {
        Deque<ActivityEvent> activities = userActivities.getOrDefault(userId, new LinkedList<>());

        // Use PriorityQueue to sort by relevance descending
        PriorityQueue<ActivityEvent> pq = new PriorityQueue<>(
                Comparator.comparingInt(ActivityEvent::getRelevanceScore).reversed()
        );
        pq.addAll(activities);

        List<ActivityEvent> topActivities = new ArrayList<>();
        for (int i = 0; i < n && !pq.isEmpty(); i++) {
            topActivities.add(pq.poll());
        }
        return topActivities;
    }
}
