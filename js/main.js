
var cookie_enabled = navigator.cookieEnabled;
if (cookie_enabled == true) {
    cookie_enabled = "Enabled";
} else if (cookie_enabled == false) {
    cookie_enabled = "Disabled";
} else {
    cookie_enabled = "Couldn't Detect!"
}
document.getElementById("cookies").innerHTML = "Cookie Status: " + cookie_enabled;

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var nameOffset, verOffset, ix;
if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
} else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
} else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
} else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
} else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
} else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
    }
} else {
    browserName = "Not Detected!";
}

var browserPlatform = navigator.platform;
var browserJavaEnabled = navigator.javaEnabled();
var browserLanguage = navigator.language;

if (browserJavaEnabled == true) {
    browserJavaEnabled = "Enabled";
} else if (browserJavaEnabled == false) {
    browserJavaEnabled = "Disabled";
} else {
    browserJavaEnabled = "Couldn't Detect!"
}

document.getElementById("browser").innerHTML = browserName;
document.getElementById("platform").innerHTML = "Platform: " + browserPlatform;
document.getElementById("java").innerHTML = "Java Enabled: " + browserJavaEnabled;
document.getElementById("language").innerHTML = "Language: " + browserLanguage;

var screenWidth = screen.width;
var screenHeight = screen.height;
var screenColorDepth = screen.colorDepth;
var user_geolocation = navigator.geolocation;

function browser_window_size() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var d = window.devicePixelRatio;
    var s = w + "x" + h + "x" + d;
    return s;
}

document.getElementById("screen").innerHTML = "Screen Resulation " + screenWidth + "px" + " × " + screenHeight + "px";
document.getElementById("color").innerHTML = "Color Depth: " + screenColorDepth + " bits";
document.getElementById("geolocation").innerHTML = "Geolocation: " + user_geolocation;

