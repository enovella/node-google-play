var GooglePlayAPI = require('../lib/api').GooglePlayAPI;

var use_cache = true;
var debug = false;

function getAppDetails(pkg) {
  var api = GooglePlayAPI(
    process.env.GOOGLE_LOGIN, process.env.GOOGLE_PASSWORD,
    process.env.ANDROID_ID,
    use_cache,
    debug
  );

  return api.login()
  .then(function() {
    api.details(pkg).then(function (res) {
      console.log('%j', res);
    })
    .lastly(function () {
      process.exit(0);
    });
  });
}

getAppDetails("com.viber.voip");
