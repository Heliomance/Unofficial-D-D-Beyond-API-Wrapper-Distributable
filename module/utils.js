export class Utils {
    static sendCustomEvent(name, data) {
        const event = new CustomEvent("UDAW_" + name, { "detail": data });
        document.dispatchEvent(event);
    }
}
