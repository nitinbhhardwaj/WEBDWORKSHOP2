package com.abes.javawithnitin;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StudentController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API!";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(1, "Aarav Sharma", "B.Tech Computer Science");
    }

    @PostMapping("/student")
    public String addStudent(@RequestBody Student student) {
        return "Student added: " + student.getName() + " | Course: " + student.getCourse();
    }
}