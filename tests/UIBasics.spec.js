const {test, expect} = require('@playwright/test');


test('Browzer Plawright test',async ({browser})=>
{
   
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles =  page.locator("card-boby a");
    await page.goto("https://rahulshettyacademy.com/loginpagepractice");
    console.log(await page.title());
    await page.userName('#username').fill("Gautam nd");
    await page.locator('#password').fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent('Incorrect'));
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const alltitle = await cardTitles.allTextContents();
    console.log(alltitle);
});

test.only('page Plawright test',async ({page})=>
{
      
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=16348039510977667560&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9154550&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=16348039510977667560--&hvexpln=nav&gad_source=1");
    await page.locator(".a-button-text").click();
    await page.locator("//span[normalize-space()='& Orders']").click();

    await page.locator("#ap_email_login").fill("+919380549837");
    await page.locator("input[type='submit']").click();
    await page.locator("#ap_password").fill("Gautamnd@5683");
    await page.locator("#signInSubmit").click();

    await page.pause();
});