import { Device } from "../types/resolution";

export const getDeviceType = (): Device => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const ipad = /iPad/i.test(userAgent);
    if (mobile) {
        return Device.Mobile;
    } else if (ipad) {
        return Device.Tablet;
    } else {
        return Device.Desktop;
    }
}

export const isMobile = () => getDeviceType() === Device.Mobile;
