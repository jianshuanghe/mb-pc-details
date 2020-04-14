function isWeiXin () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    console.log('--------------WX---------------');
    localStorage.setItem('browserType', 'WX');
    return true;
  } else {
    console.log('-------------FWX----------------');
    localStorage.setItem('browserType', 'FWX');
    return false;
  }
}
export {isWeiXin};
