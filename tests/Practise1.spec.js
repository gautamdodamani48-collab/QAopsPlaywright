const {test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');




test('ui selection',async ({browser})=>
{
    const context=await browser.newContext();
const page=await context.newPage(); 

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator('#username').fill("Gautamdodamani48@gmail.com");
await page.locator('#password').fill("Gautamnd@5683");
//await page.click('#login');
await page.locator(".checkmark").last().click();
await page.locator("#okayBtn").click();
const dropdown=page.locator("select.form-control");
await dropdown.selectOption("consult");
await page.locator("#terms").click();
const Documentlink=page.locator("[href*='documents-request']");
await expect(Documentlink).toHaveAttribute("class","blinkingText"); 

});

test('child window',async ({browser})=>
{

const context=await browser.newContext();
const page=await context.newPage();
const Username= page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const Documentlink=page.locator("[href*='documents-request']");
const [newPage]= await Promise.all([
                             context.waitForEvent('page'),
                             Documentlink.click(),])
const word= await newPage.locator(".red").textContent();
const arraytext=word.split("@")
const domain=arraytext[1].split(" ")[0] 
console.log(domain);
await page.locator("#username").fill(domain);
await page.pause();
});