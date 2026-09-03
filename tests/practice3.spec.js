const {test, expect} = require('@playwright/test')

test('practice',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    const email="Gautamdodamani48@gmail.com";
    const imageName="iphone 13 pro";
    const Products=await page.locator(".card-body");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Gautamnd@5683");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body").first().waitFor();
    const counts=await Products.count();
    for(let i=0; i<counts; ++i)
        {
         if(await Products.nth(i).locator("b").textContent()===imageName)
        {
         await Products.nth(i).locator("text= Add To Cart").click();
         break;         
        }
        }
        await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
        await page.locator("div li").first().waitFor();
        const checkoutpage=await page.locator("h3:has-text('iphone 13 pro')").isVisible();
        expect(checkoutpage).toBeTruthy();
        await page.locator("//button[normalize-space()='Checkout']").click();
        await page.locator("(//input[@type='text'])[2]").fill("123");
        await page.locator("(//input[@type='text'])[3]").fill("Gautam dodamani");
        await page.locator("[placeholder*='Select Country']").pressSequentially("ind");
        const country=page.locator(".ta-results.list-group.ng-star-inserted");
        await country.waitFor();
        const countryName=await page.locator("button").count();
        for(let i=0;i<countryName;++i)
        {
            const ctext=await country.locator("button").nth(i).textContent();
            if (ctext===" India")
            {
             await country.locator("button").nth(i).click();
             break;
            }
        }
        await expect(page.locator("label[type='text']").first()).toHaveText(email);
        await page.locator(".btnn.action__submit.ng-star-inserted").click();
        await page.locator(".box.box-ext.order-summary-box").first().waitFor();
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderid=await page.locator("label[class='ng-star-inserted']").textContent();
        console.log(orderid);
        await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();
        await page.locator("tbody").waitFor();
        const table=await page.locator("tbody tr");
        for(let i=0;i<await table.count();++i)
        {
            const row=await table.nth(i).locator("th").textContent();
            if(orderid.includes(row)) 
            {
                await table.nth(i).locator(".btn.btn-primary").click();
                break;
            }
        }
        const finalid=await page.locator(".col-text.-main").textContent();
        await expect(orderid.includes(finalid)).toBeTruthy();
        await page.locator(".btn.-teal").click();
       
        await page.locator(".btn.btn-primary.col-md-2.offset-md-4").click();
        await page.waitForLoadState('networkidle');
        await page.locator("(//input[@type='checkbox'])[12]").click();
        await page.locator("li:nth-child(1) button:nth-child(1)").click();
        

    await page.pause();

});
