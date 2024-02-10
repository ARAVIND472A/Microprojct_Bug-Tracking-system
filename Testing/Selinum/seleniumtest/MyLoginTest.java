package com.bug.seleniumtest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;

import ch.qos.logback.core.util.Duration;

import org.openqa.selenium.JavascriptExecutor;
public class MyLoginTest {
	
	@Test
	public void login() {

		WebDriver driverLogin;

		JavascriptExecutor js;
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverLogin = new ChromeDriver();
	
		
	
		driverLogin.get("http://localhost:54534/");
	
		driverLogin.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		

		driverLogin.findElement(By.name("userName")).click();
		driverLogin.findElement(By.name("userName")).sendKeys("siva");
		driverLogin.findElement(By.name("password")).click();
		driverLogin.findElement(By.id("password")).sendKeys("siva@1234");
		driverLogin.findElement(By.name("insert")).click();
		System.out.println(driverLogin.getTitle());
		
		 driverLogin.close();

	}

	public static void main(String[] args) {
		
		MyLoginTest obj = new MyLoginTest();
	
			obj.login();
		

	}

}
