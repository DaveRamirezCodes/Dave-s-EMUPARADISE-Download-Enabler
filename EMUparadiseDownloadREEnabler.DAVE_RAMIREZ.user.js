// ==UserScript==
// @name         EmuParadise Download REEnabler
// @version      1
// @description  Permette di nuovo di scaricare ROMS da EMUparadise !!
// @author       DaveRamirez (Basato sull'obsoleto: emuparadise.eptun.user.js)
// @match        https://www.emuparadise.me/*/*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = ((document.URL).split("/"))[5];
    $(".download-link a").each(function() { this.href = "/roms/get-download.php?gid="+id+"&test=true" });
})();