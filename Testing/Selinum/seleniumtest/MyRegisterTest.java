package com.bug.seleniumtest;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;
import org.openqa.selenium.JavascriptExecutor;

public class MyRegisterTest {
	
	
	@Test
	public void register(){
	
		WebDriver driverRegister;
		JavascriptExecutor js;


	System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
	driverRegister = new ChromeDriver();

	

	driverRegister.get("http://localhost:54534/");
	
	driverRegister.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	driverRegister.findElement(By.linkText("Sign In")).click();
	driverRegister.findElement(By.id("userName")).click();
	driverRegister.findElement(By.id("userName")).sendKeys("thamayanthi");
	driverRegister.findElement(By.id("password")).click();
	driverRegister.findElement(By.id("password")).sendKeys("6789");
	driverRegister.findElement(By.name("insert")).click();
	driverRegister.close();
	}
	

	public static void main(String[] args) {
		

	}

}
