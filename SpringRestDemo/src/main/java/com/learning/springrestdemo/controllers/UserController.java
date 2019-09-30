package com.learning.springrestdemo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.learning.springrestdemo.models.UserModel;

@RestController
public class UserController {

	@Autowired
	IUserDAO iuserDao;

	
	@RequestMapping(path="/users",produces = {"application/json"})
	public String index() {
		System.out.println("Success");
		return "home";
	}

	@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
	@GetMapping("/users")
	@ResponseBody
	public List<UserModel> getAllUsers() {
		//List<UserModel> model = iuserDao.findAll();
		//System.out.println("Details: "+model.size());
		return iuserDao.findAll();
	}
	
	@PostMapping(path="/users",consumes = {"application/json"})
	public ResponseEntity addDetails(@RequestBody UserModel model) {
		iuserDao.save(model);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PutMapping(path="/users",consumes = {"application/json"})
	public ResponseEntity updateDetails(@RequestBody UserModel model) {
		iuserDao.save(model);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping(path="users/{id}",consumes = {"application/json"})
	public ResponseEntity deleteData(@PathVariable("id") int id)
	{
		iuserDao.deleteById(id);
		return new ResponseEntity<>(HttpStatus.GONE);
	}
	
	@GetMapping(path="users/{id}",consumes = {"application/json"})
	public Optional<UserModel> getUserbyId(@PathVariable("id") int id)
	{
		
		return iuserDao.findById(id);
	}
}
