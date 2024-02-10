package com.bug.seleniumtest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;
import org.openqa.selenium.JavascriptExecutor;

public class MyCheckStatusTest {

	@Test
	public void checkStatus() {

		WebDriver driverCheckStatus;

		JavascriptExecutor js;
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverCheckStatus = new ChromeDriver();
		js = (JavascriptExecutor) driverCheckStatus;

		driverCheckStatus.get("http://localhost:54534/");

		driverCheckStatus.manage().window().setSize(new Dimension(1382, 744));

		driverCheckStatus.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//Login
		
		driverCheckStatus.findElement(By.id("userName")).click();
		driverCheckStatus.findElement(By.id("userName")).sendKeys("siva");
		driverCheckStatus.findElement(By.id("password")).click();
		driverCheckStatus.findElement(By.id("password")).sendKeys("siva@1234");
		driverCheckStatus.findElement(By.id("insert")).click();



		driverCheckStatus.findElement(By.id("checkStatus")).click();

		
	
	//Check Status
		
		
		driverCheckStatus.findElement(By.id("userName")).click();
		driverCheckStatus.findElement(By.id("userName")).sendKeys("siva");
		driverCheckStatus.findElement(By.name("insert")).click();

	}

	public static void main(String[] args) {

	}

}
