const {test}=require('@playwright/test');

test('login practice',async({page})=>
{
    await page.goto("https://www.redbus.in/");
    await page.waitForLoadState('networkidle');
    await page.locator("#srcinput").pressSequentially("Haliyal");
    await page.getByText("Haliyal", {exact:true}).last().click();
    await page.locator("#destinput").pressSequentially("bengaluru")
    await page.getByText("bengaluru", true).last().click();
    await page.locator('[aria-label="Select date of journey"]').click();
    await page.locator('[aria-label="Saturday, August 29, 2026"]').click();
    await page.getByRole("button",{name:'search bus'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator("//li[@id='33158883']").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#U2").click();
    await page.locator('[aria-label="Select boarding & dropping points"]').click();
    await page.locator('div[aria-label="06:10, 30 Aug Jalhalli Cross, People Tree Hospital, Dropping points, 2 of 29"]').click();
    await page.locator('[aria-label="Fill passenger details"]').click();
    await page.locator(".inputField___01e53c").fill("9380549837");
    await page.locator('input[id="0_5"]').fill("gautamdodamani48@gmail.com");
    await page.getByLabel("Name").fill("Gautam dodamani");
    await page.getByLabel("Age *").fill("27");
    await page.getByLabel("Male").click();
    await page.getByLabel("Don't add Free Cancellation, ").click();
    await page.getByLabel("Don’t add Trip Guarantee").click();
    await page.getByLabel("Don’t add Travel Insurance").click();
    await page.getByLabel("Continue booking, Amount ₹750, (Tax excluded)").click();




    await page.pause();


}
);