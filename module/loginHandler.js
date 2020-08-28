import { ExtensionWrapper } from "./extensionWrapper.js";
export class LoginHandler {
    constructor() {
        this.extensionWrapper = new ExtensionWrapper();
    }
    async requestSessionCookie() {
        console.log("unofficial-ddb-api-wrapper | requesting cookie");
        this.sessionCookie = await this.extensionWrapper.getSessionCookie();
        console.log("unofficial-ddb-api-wrapper | got cookie! yay!");
        console.log("cookie value:", this.sessionCookie);
    }
}
