package com.bug.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bug.bean.Bug;

import com.bug.dao.BugRepo;

@Service
public class BugService {
	
	@Autowired
	BugRepo dao;
	
	public boolean registerBug(Bug bug)
	{
		
		dao.save(bug);
		
		return true;
	}
	
	public boolean updateBug(Bug bug)
	{
		dao.save(bug);
		return true;
	}
	
	public List<Bug> getBugs()
	{
		
		Iterator<Bug> it=dao.findAll().iterator();
		ArrayList<Bug> list=new ArrayList<>();
		while(it.hasNext())
		{
			list.add(it.next());
		}
		return list;
		
		
	}
	
//	public Bug getBug(String userName)
//	{
//		Bug bug=dao.findByUserName(userName).get();
//		return bug;
//	}
	
	public List<Bug> getBug(String userName) {
		Iterator<Bug> it1=dao.findByUserName(userName).iterator();
		ArrayList<Bug> bugList=new ArrayList<>();
		while(it1.hasNext()) {
			bugList.add(it1.next());
		}
		return bugList;
	}

	
	

}
