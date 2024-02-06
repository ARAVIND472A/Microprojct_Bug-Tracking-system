package com.bug.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bug.bean.Bug;
import com.bug.bean.User;
import com.bug.dao.BugRepo;
import com.bug.service.BugService;



@RestController
@CrossOrigin("http://localhost:54534/")
public class BugController {

	@Autowired
	BugService bugService;

	@PostMapping("/registerbug")
	public String Register(@RequestBody Bug bug) {
		
		bug.setStatus("Open");
		bug.setSolution("Waiting to debug");
		
		bugService.registerBug(bug);
		return "inserted";

	}
	
	@PutMapping("/PerformUpdate")
	public String update(@RequestBody Bug bug) {
		bugService.updateBug(bug);
		return "Updated";

	}
	@GetMapping("/ViewAll")
	public List<Bug> getAllBugs()
	{
		
		List<Bug> list=new ArrayList();
		list=bugService.getBugs();
		
		return list;
		
	}
	

	
	@GetMapping("/View/{userName}")
	public List<Bug> viewBugDetails(@PathVariable("userName") String userName){
		List<Bug> bugList=bugService.getBug(userName);
		return bugList;
	}


}

//@GetMapping("/View/{userName}")
//public Bug viewDetail(@PathVariable ("userName") String  userName) {
//	Bug bug=bugService.getBug(userName);
//	return bug;
//}
