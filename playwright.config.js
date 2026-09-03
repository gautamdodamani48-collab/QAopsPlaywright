
import { defineConfig, devices, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';


const config = ({
  testDir: './tests',
  
 
  
use : {
  browserName:'chromium'
}
});
module .exports=config