import { ChainablePromiseElement } from 'webdriverio';

export class MainPage{
    private getInsuranseProject(){
        return $('[href="http://demo.guru99.com/insurance/v1/index.php"]')
    }

    private getQuatationButton(){
        return $('#newquote')
    }

    public async insuranseProject(){
        return await this.getInsuranseProject()
    }

    public async quatationButton(){
        return await this.getQuatationButton()
    }
}

