const {test}=require('@playwright/test');
let webcontext;
const fakepayload ={data:[],message:"No Orders"};

test.beforeAll( async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage(); 
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("Gautamdodamani48@gmail.com");
await page.locator("#userPassword").fill("Gautamnd@5683");
await page.locator("#login").click();
await page.waitForURL("**/dashboard/dash");
await context.storageState({path:'state.json'});
 webcontext=await browser.newContext({storageState:'state.json'});


}

);

test('all test',async()=>
{
    
    const page= await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const alliteam=await page.locator(".card-body");
   await alliteam.first().waitFor();
    
    const count=await alliteam.count();
    for (let i=0;i<count;i++)
    {
      await alliteam.nth(i).locator(".btn.w-10.rounded").click();
   }
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a822b1121054ba465d9036b",
    async  route=>
    {
       const response= await page.request.fetch(route.request());
       let body= JSON.stringify(fakepayload); 
      await route.fulfill(
        {
            response,
            body, 
        }
       );
    });
    const myorder=await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
    

    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a822b1121054ba465d9036b");
console.log(await page.locator(".mt-4").textContent());

  
    await myorder.click();
    await page.pause();
  
    
   
   

 });
