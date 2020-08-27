export class Utils {
    static sendCustomEvent(data) {
        const event = new CustomEvent("UDAW", { "detail": data });
        console.log("dispatching event:", event);
        document.dispatchEvent(event);
    }
}
