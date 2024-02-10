package com.bug.seleniumtest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import org.testng.annotations.Test;

import ch.qos.logback.core.util.Duration;

import org.openqa.selenium.JavascriptExecutor;

public class MyResolveBugTest {

	@Test
	public void ResolveBug() {

		WebDriver driver;

		JavascriptExecutor js;
		System.setProperty("Webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();

		// Log in as Admin

		driver.get("http://localhost:54534/");

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		// login

		driver.findElement(By.name("userName")).click();
		driver.findElement(By.name("userName")).sendKeys("aravinds");
		driver.findElement(By.name("password")).click();
		driver.findElement(By.id("password")).sendKeys("12345");
		driver.findElement(By.name("insert")).click();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		// Resolve bug

		driver.findElement(By.id("bugId")).click();
		driver.findElement(By.id("bugId")).sendKeys("1");
		driver.findElement(By.id("bugName")).click();
		driver.findElement(By.id("bugName")).sendKeys("laptop error");
		driver.findElement(By.name("description")).click();
		driver.findElement(By.name("description")).sendKeys("error occured while openning laptop");
		driver.findElement(By.id("userName")).click();
		driver.findElement(By.id("userName")).sendKeys("siva");
		
		
		
		driver.findElement(By.id("status")).click();
		driver.findElement(By.id("status")).sendKeys("closed");
		
		driver.findElement(By.id("solution")).click();
		driver.findElement(By.id("solution")).sendKeys("restart you laptop and check");
		
		
		
		driver.findElement(By.id("resolve")).click();

		driver.close();

	}

	public static void main(String[] args) {

		
	}

}
