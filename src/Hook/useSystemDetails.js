export function useSystemDetails() {

    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

     // Windows Phone must come first because its UA also contains "Android"
     if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }


    if (navigator.appVersion.indexOf("Mac") != -1)
        return "MacOS";

    if (navigator.appVersion.indexOf("Win") != -1)
        return "Windows";

    if (navigator.appVersion.indexOf("Linux") != -1)
        return "Linux";
}