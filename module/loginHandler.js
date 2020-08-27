import { Utils } from "./utils.js";
export class LoginHandler {
    constructor() {
        document.addEventListener("UDAW_SessionCookie", (evt) => {
            this.sessionCookie = evt.detail;
            console.log("unofficial-ddb-api-wrapper | cookie recieved:", this.sessionCookie);
        });
    }
    requestSessionCookie() {
        console.log("unofficial-ddb-api-wrapper | requesting cookie");
        Utils.sendCustomEvent("get-session-cookie");
    }
}
