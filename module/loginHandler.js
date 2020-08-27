export class LoginHandler {
    constructor() {
        document.addEventListener("UDAW_SessionCookie", (evt) => {
            this.sessionCookie = evt.detail;
            console.log(this.sessionCookie);
        });
    }
}
