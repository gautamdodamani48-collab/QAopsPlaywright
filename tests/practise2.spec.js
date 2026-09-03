const {test, expect}=require('@playwright/test');

test.only('all test',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const prouctName='ZARA COAT 3';
    const products = page.locator(".card-body");
    const userName=page.locator("#userEmail");
    const passward=page.locator("#userPassword");
    const signIn=page.locator("#login");
    await userName.fill("Gautamdodamani48@gmail.com");
    await passward.fill("Gautamnd@5683");
    await signIn.click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const title=await page.locator(".card-body b").allTextContents();
    console.log(title);
    const count= await products.count();
    for (let i=0; i<count; ++i)
    {
       if( await products.nth(i).locator("b").textContent() === prouctName)
       {
        await products.nth(i).locator("text= Add To Cart").click();
        break;
       }
    
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Select Country']").pressSequentially("ind");
    const options= page.locator(".ta-results");
    await options.waitFor();
    const optioncount=await options.locator("button").count();
    for(let i = 0; i<optioncount; ++i)
    {
    const  text = await options.locator("button").nth(i).textContent();
     if(text===" India")
     {
      await options.locator("button").nth(i).click();
      break;
     }
     }

  await expect(page.locator(".user__name.mt-5 [type='text']").first()).toHaveText("Gautamdodamani48@gmail.com");
  await page.locator(".btnn.action__submit.ng-star-inserted").click();
  await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order. ");
  const orderid=await page.locator(".em-spacer-1 .ng-star-inserted ").textContent();
  console.log(orderid); 
  await page.locator("button[routerlink$='/dashboard/myorders']").click();
  await page.locator("tbody").waitFor();
  const alltable=await page.locator("tbody tr");
 
  for (let i=0; i<await alltable.count(); ++i)
  {
   const iteamid=await alltable.nth(i).locator("th").textContent();
   if (orderid.includes(iteamid))
       {
         await alltable.nth(i).locator(".btn.btn-primary").click();
         break;
       }
   
 }
 const finalid=await page.locator(".col-text.-main").textContent();
 await expect(orderid.includes(finalid)).toBeTruthy();
 console.log(finalid);
await page.pause();

 });


