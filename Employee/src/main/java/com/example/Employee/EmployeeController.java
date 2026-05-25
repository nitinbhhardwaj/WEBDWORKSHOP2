package com.example.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // POST - Add new employee
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.addEmployee(employee);
    }

    // GET - Get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    // GET - Get employee by ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {
        return service.getEmployeeById(id);
    }

    // PUT - Update employee
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        return service.updateEmployee(id, employee);
    }

    // DELETE - Delete employee
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        return service.deleteEmployee(id);
    }
}