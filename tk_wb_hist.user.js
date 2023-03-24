// ==UserScript==
// @name         Tombkeeper History Weibo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hbliu
// @match        *://weibo.com/1401527553/*
// @run-at   document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  let mobile_prefix = "http://m.weibo.cn/status/";
  let url = document.URL;

  let parts = url.split('/')
  if (parts.length < 5) {
    return
  }

  let mobile_url = mobile_prefix + parts[4];
  location.replace(mobile_url);
})();
