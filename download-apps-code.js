(function () {
  var operatingSystem, userAgentString = navigator.userAgent;

  if (userAgentString.indexOf("iPhone") > -1 || userAgentString.indexOf("iPod") > -1 || userAgentString.indexOf("iPad") > -1) {
    operatingSystem = "iOS";
    window.location.replace("https://apps.apple.com/us/app/bridge-debit-card/id1562008274")
  } else if (/Android/.test(userAgentString)) {
    operatingSystem = "Android";
    window.location.replace("https://play.google.com/store/apps/details?id=co.bridgemoney.bridge_debit_card")
  } else if (navigator.appVersion.indexOf("Win") != -1) {
    console.log('Windows');
    operatingSystem = "Windows";
    window.location.replace("https://www.bridgemoney.co/")
  } else if (navigator.appVersion.indexOf("Mac") != -1) {
    operatingSystem = "Mac";
    window.location.replace("https://www.bridgemoney.co/")
  }
})();
