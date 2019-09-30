package com.learning.springrestdemo.controllers;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.springrestdemo.models.UserModel;

public interface IUserDAO extends JpaRepository<UserModel, Integer> {
	
}
