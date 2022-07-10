import Data from '../data/data'
import { LoginPage } from "../pageobjects/login.page"
import { MainPage } from '../pageobjects/main.page';
import { InsuranceOptions } from '../pageobjects/Insurance.options'

describe('Insuranse paget est', ()=>{
    it('should navigate to the login page', async()=>{
        await new LoginPage().open()
        await browser.pause(1000)
    })

    it('should navigate to the main page', async()=>{
        await (await new MainPage().insuranseProject()).click()
        await browser.pause(1000)
        await new LoginPage().login(Data.insuranceData.login, Data.insuranceData.password)
        await (await new MainPage().quatationButton()).click()
    })

    it('should fill insurance form', async()=>{
         await browser.pause(2000)
         expect (await new InsuranceOptions().brokePlace().selectByIndex(2)).toHaveText('At home')
         await browser.pause(1000)
         await (await new InsuranceOptions().windscreenRapair()).click()
         await (await new InsuranceOptions().incidents()).setValue('Road crash')
         await (await new InsuranceOptions().registration()).setValue('Lviv region')
         await (await new InsuranceOptions().mileage()).setValue('75 000км')
         await (await new InsuranceOptions().vehicleValue()).setValue('$25 000')
         expect (await new InsuranceOptions().parkingLocation().selectByIndex(2)).toHaveText('Locked Garage')
         expect (await new InsuranceOptions().selectYear().selectByIndex(8)).toHaveText('2022')
         await browser.pause(1000)
         expect (await new InsuranceOptions().selectMonth().selectByIndex(2)).toHaveText('March')
         await browser.pause(1000)
         expect (await new InsuranceOptions().selectDay().selectByIndex(4)).toHaveText('5')
         await browser.pause(1000)
         await (await new InsuranceOptions().saveButton()).click()
         await browser.pause(1000)
         await browser.url('https://demo.guru99.com/insurance/v1/new_quotation.php')
    })
})