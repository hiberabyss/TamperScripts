// ==UserScript==
// @name         Change Weibo homepage to latest weibo
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       hbliu
// @match        https://weibo.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

function jumpLatestWb() {
  let latest_wb_arr = document.querySelectorAll('[title="最新微博"]')
  console.log("begin process latest: " + latest_wb_arr.length)
  if (latest_wb_arr.length == 0) {
    return
  }

  let group_href = latest_wb_arr[0].parentElement.href
  console.log("my url: " + group_href)

  location.replace(group_href);
}

(function() {
  'use strict'

  window.addEventListener('load', jumpLatestWb);
})();
