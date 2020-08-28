import { ActionTypes } from "./actionTypes.js";
import { v4 as uuidv4 } from "uuid";
export class ExtensionWrapper {
    constructor() {
        this.timeout = 5000;
    }
    async getSessionCookie() {
        return await this.sendRequest(ActionTypes.GetSessionCookie);
    }
    async sendRequest(action) {
        const id = uuidv4();
        const event = new CustomEvent("UDAW_module", {
            detail: {
                action: action,
                requestId: id
            }
        });
        console.log("dispatching event:", event);
        const promise = new Promise((resolve, reject) => {
            document.addEventListener("UDAW_extension", this.getEventListenerCallback(id, resolve, reject));
        });
        document.dispatchEvent(event);
        const timeoutPromise = new Promise((resolve, reject) => {
            let id = setTimeout(() => {
                clearTimeout(id);
                reject("Request timed out. Please ensure that the Unofficial D&D Beyond API Wrapper Chrome extension is installed and active.");
            }, this.timeout);
        });
        return Promise.race([promise, timeoutPromise]);
    }
    getEventListenerCallback(id, resolve, reject) {
        const callback = (e) => {
            if (e.detail.id === id) {
                document.removeEventListener("UDAW_extension", callback);
                if (e.detail.failure) {
                    reject(e.detail.errMessage);
                }
                else {
                    resolve(e.detail.value);
                }
            }
        };
        return callback;
    }
    ;
}
