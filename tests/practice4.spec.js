const {test, expect}= require('@playwright/test');

test('practice4',async({page})=>
{
  test.setTimeout(60000);
  const slowExpect=expect.configure({timeout:9000});
  await page.goto("https://rahulshettyacademy.com/angularpractice");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").click();
  await page.getByLabel("Gender").selectOption("Male");
  await page.getByPlaceholder("Password").fill("abc123");
  await page.getByRole("button",{name:'Submit'}).click();
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
  slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
  await page.getByRole("link",{name:"shop"}).click();
  await page.locator("app-card").filter({hasText:"nokia edge"}).getByRole("button",{name:'add'}).click();
}

);