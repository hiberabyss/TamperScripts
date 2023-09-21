// ==UserScript==
// @name         Redirect JD mobile url
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hbliu
// @match        *://item.m.jd.com/product/*
// @run-at   document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict'

  let url = document.URL;

  let redirect_url = url.replace('product/', '');

  location.replace(redirect_url);

})();
