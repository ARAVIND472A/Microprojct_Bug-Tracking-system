package com.bug.seleniumtest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;
import org.openqa.selenium.JavascriptExecutor;

public class MyRegisterBugTest {

	@Test
	public void registerBug() {

		WebDriver driverRegisterBug;

		JavascriptExecutor js;
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driverRegisterBug = new ChromeDriver();
		js = (JavascriptExecutor) driverRegisterBug;

		driverRegisterBug.get("http://localhost:54534/");

		driverRegisterBug.manage().window().setSize(new Dimension(1382, 744));

		driverRegisterBug.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driverRegisterBug.findElement(By.id("userName")).click();
		driverRegisterBug.findElement(By.id("userName")).sendKeys("siva");
		driverRegisterBug.findElement(By.id("password")).click();
		driverRegisterBug.findElement(By.id("password")).sendKeys("siva@1234");
		driverRegisterBug.findElement(By.id("insert")).click();

		driverRegisterBug.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driverRegisterBug.findElement(By.name("bugName")).click();
		driverRegisterBug.findElement(By.id("bugName")).sendKeys("loptop error");
		driverRegisterBug.findElement(By.name("userName")).click();
		driverRegisterBug.findElement(By.id("userName")).sendKeys("siva");
		driverRegisterBug.findElement(By.name("description")).click();
		driverRegisterBug.findElement(By.id("description")).sendKeys("error occured while opening the lap");
		driverRegisterBug.findElement(By.name("register")).click();

		driverRegisterBug.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

//		   driverRegisterBug.findElement(By.id("checkStatus")).click();
//		   driverRegisterBug.findElement(By.id("userName")).click();
//		   driverRegisterBug.findElement(By.id("userName")).sendKeys("siva");
//		   driverRegisterBug.findElement(By.name("insert")).click();

	}

	public static void main(String[] args) {

		MyRegisterBugTest obj = new MyRegisterBugTest();
		obj.registerBug();

	}

}
