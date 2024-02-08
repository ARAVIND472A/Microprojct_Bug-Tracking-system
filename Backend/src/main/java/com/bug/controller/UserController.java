package com.bug.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bug.bean.User;
import com.bug.dao.UserRepo;
import com.bug.service.UserService;

import jakarta.servlet.annotation.MultipartConfig;


@RestController
@CrossOrigin("http://localhost:54534/")
public class UserController {
	
	@Autowired
	UserService service;
	
	
	
	@PostMapping("/Register")
	public String performResgister(@RequestBody User user) {
		
		user.setUserType("User");
		service.registerUser(user);
		return"inserted";
		
	}

	

}
