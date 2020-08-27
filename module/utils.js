export class Utils {
    static sendCustomEvent(data) {
        const event = new CustomEvent("UDAW", { "detail": data });
        document.dispatchEvent(event);
    }
}
