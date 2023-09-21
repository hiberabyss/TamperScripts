// ==UserScript==
// @name         BoHaiShiBei Image Saver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hbliu
// @match        *://www.bohaishibei.com/*
// @run-at   document-start
// @grant        GM_download
// ==/UserScript==

function saveImage(url) {
  let download_dir = "BoHaiShiBei"
  var name = url.split("/").pop()

  var local_path = download_dir + "/" + name
  console.log(local_path)

  GM_download(url, local_path)
}

function clickHandler(mouse_event) {
  mouse_event.preventDefault()
  if (!mouse_event.altKey) {
    return
  }

  click_e = document.elementFromPoint(mouse_event.clientX, mouse_event.clientY)
  if (click_e.tagName != "IMG") {
    return
  }

  saveImage(click_e.src)

  console.log(click_e)
}

(function() {
  'use strict'
  document.addEventListener('click', clickHandler)
})();
