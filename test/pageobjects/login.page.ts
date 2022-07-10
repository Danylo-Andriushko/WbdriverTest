import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

export class LoginPage extends Page {
    
    private getInputUsername () {
        return $('#email');
    }

    private getInputPassword () {
        return $('#password');
    }

    private getBtnSubmit () {
        return $('.btn.btn-default[value="Log in"]');
    }
    

    
    public async login (username: string, password: string) {
        await this.getInputUsername().setValue(username);
        await this.getInputPassword().setValue(password);
        await this.getBtnSubmit().click();
        
    }

    public  open () {
        return  super.open();
    }
}


