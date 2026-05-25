package com.example.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository repository;

    // Add employee
    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Get all employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // Get employee by ID
    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    // Update employee
    public Employee updateEmployee(int id, Employee updatedEmployee) {
        Employee employee = repository.findById(id).orElseThrow();
        employee.setName(updatedEmployee.getName());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setSalary(updatedEmployee.getSalary());
        return repository.save(employee);
    }

    // Delete employee
    public String deleteEmployee(int id) {
        repository.deleteById(id);
        return "Employee with ID " + id + " deleted successfully.";
    }
}