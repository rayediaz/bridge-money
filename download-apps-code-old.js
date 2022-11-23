
(function () {
  var app = {
    androidAppLink: "kvcore-openhouse://open",
    appStoreLink: "https://apps.apple.com/us/app/core-open-house/id1465324840?ls=1",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.insiderealestate.coreopenhouse",
    getMobileOperatingSystem: function () {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

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
      return "unknown";
    },
    launchApp: function () {
      var mobileOS = this.getMobileOperatingSystem()
      if (mobileOS === 'iOS') {
        this.openAppStore();
      } else if (mobileOS === 'Android') {
        app.openAndroidApp();
        setTimeout(app.openPlayStore, 100);
      }
    },
    openAndroidApp: function () {
      window.location.replace(app.androidAppLink);
    },
    openAppStore: function () {
      window.location.replace(app.appStoreLink);
    },
    openPlayStore: function () {
      window.location.replace(app.playStoreLink);
    }
  };

  app.launchApp();
})();
