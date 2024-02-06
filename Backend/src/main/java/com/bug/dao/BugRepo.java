package com.bug.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bug.bean.Bug;
import com.bug.bean.User;

public interface BugRepo extends JpaRepository<Bug, Long> {

//	Optional<Bug> findByUserName(String userName);
	
	
	public List<Bug> findByUserName(String userName);

}
