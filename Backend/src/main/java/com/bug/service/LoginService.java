package com.bug.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bug.bean.Response;
import com.bug.bean.User;

import com.bug.dao.LoginRepo;

@Service
public class LoginService {
	
	@Autowired
	LoginRepo dao;
	
	public Response VerifyUser(User use)
	{
		
		User ref=dao.findByUserName(use.getUserName());
		User pass=dao.findByPassword(use.getPassword());
		if(ref!=null && pass!=null) {
			String value=ref.getPassword();
			String word=pass.getPassword();
			if (value.equals(word)) {
				String res=ref.getUserType();
			if(res.equals("Admin")) {
				return new Response("Admin Success");
			} else {
				return new Response("User Success");
			}
			}
			else {
				return new Response("Login Fail");
			}
		}  else {
			return new Response("Login Fail");
		}
		
	}	
		

}
