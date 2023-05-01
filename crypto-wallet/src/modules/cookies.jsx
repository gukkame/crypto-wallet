export function getCookie() {
    var decodedCookie = decodeURIComponent(document.cookie);
    if (decodedCookie != "") {
        var ca = decodedCookie.split(';');
        var ca1 = ca[0].split('=');
        var ca2 = ca1[1].split(':');
        ca2.reverse()
        return ca2;
    }
    return []
}

//checks cookie and updates it
export function checkCookie() {
    var cookie = getCookie();
    var cookieCheck = true;
    if (cookie == "") {
        cookieCheck = false;

    } else {
        document.cookie =
            "session=" + cookie[1] + ":" + cookie[0] + ";" + "max-age=" + 20 * 60 + ";path=/";
        cookieCheck = true;
    }
    return cookieCheck
}

export function removeCookie(value) {
    document.cookie = 'session=' + value + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    console.log("donee");
}
