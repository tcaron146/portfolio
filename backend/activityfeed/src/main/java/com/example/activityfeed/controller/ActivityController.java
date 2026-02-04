package com.example.activityfeed.controller;

import com.example.activityfeed.model.ActivityEvent;
import com.example.activityfeed.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    // POST /api/activity
    @PostMapping("/activity")
    public String addActivity(@RequestBody ActivityEvent event) {
        if (event.getTimestamp() == null) {
            event.setTimestamp(LocalDateTime.now());
        }
        activityService.addActivity(event);
        return "Activity added!";
    }

    // GET /api/feed/{userId}?n=5
    @GetMapping("/feed/{userId}")
    public List<ActivityEvent> getFeed(@PathVariable String userId, @RequestParam(defaultValue = "5") int n) {
        return activityService.getFeed(userId, n);
    }
}
