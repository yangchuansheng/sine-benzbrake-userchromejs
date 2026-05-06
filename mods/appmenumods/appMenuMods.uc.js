// ==UserScript==
// @name           App Menu Mods
// @version        1.4.8-sine.2
// @author         aminomancer
// @homepageURL    https://github.com/aminomancer/uc.css.js
// @description    Makes some minor modifications to the app menu (the popup opened by clicking the hamburger button on the far right of the navbar). It adds a restart button to the app menu, adds a restart item to the macOS Tools menu, and it adds a separator under the "Manage Account" button in the profile/account panel. I'll continue adding more mods to this script as I think of them.
// @downloadURL    https://cdn.jsdelivr.net/gh/aminomancer/uc.css.js@master/JS/appMenuMods.uc.js
// @updateURL      https://cdn.jsdelivr.net/gh/aminomancer/uc.css.js@master/JS/appMenuMods.uc.js
// @license        This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
// @note           Sine patch: adds Restart to the macOS Tools menu for Zen Browser.
// ==/UserScript==

(function () {
  class AppMenuMods {
    constructor() {
      PanelUI._initialized || PanelUI.init(shouldSuppressPopupNotifications);
      PanelUI.mainView.addEventListener("ViewShowing", this, { once: true });
      this.initToolsMenuRestartItem();
      try {
        this.fixSyncSubviewButtonAlignment();
      } catch (err) {
        console.warn("[AppMenuMods] Failed to patch sync subview:", err);
      }
    }
    static create(aDoc, tag, props, isHTML = false) {
      let el = isHTML ? aDoc.createElement(tag) : aDoc.createXULElement(tag);
      for (let prop in props) {
        el.setAttribute(prop, props[prop]);
      }
      return el;
    }
    static sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async generateStrings() {
      if (!this.strings) {
        this.strings = await new Localization(
          ["toolkit/about/aboutSupport.ftl"],
          true
        );
      }
      await AppMenuMods.sleep(1);
      return this.strings;
    }
    get fxaPanelView() {
      return PanelMultiView.getViewNode(document, "PanelUI-fxa");
    }
    async handleEvent(_e) {
      await this.addRestartButton();
    }
    async getRestartLabel() {
      try {
        let strings = await this.generateStrings();
        return await strings.formatValue("restart-button-label");
      } catch (err) {
        console.warn("[AppMenuMods] Failed to load restart label:", err);
        return "Restart";
      }
    }
    shouldInvalidateCaches(event) {
      return (
        event.shiftKey ||
        (AppConstants.platform == "macosx" ? event.metaKey : event.ctrlKey)
      );
    }
    restartBrowser({ invalidateCaches = false } = {}) {
      if (invalidateCaches) {
        Services.appinfo.invalidateCachesOnRestart();
      }
      setTimeout(() => {
        let cancelQuit = Cc["@mozilla.org/supports-PRBool;1"].createInstance(
          Ci.nsISupportsPRBool
        );
        Services.obs.notifyObservers(
          cancelQuit,
          "quit-application-requested",
          "restart"
        );
        Services.startup.quit(
          Services.startup.eAttemptQuit | Services.startup.eRestart
        );
      }, 300);
    }
    hideContainingPanel(event) {
      let panelMultiView = event.currentTarget.closest("panelmultiview");
      if (panelMultiView) {
        PanelMultiView.forNode(panelMultiView).hidePopup();
      }
    }
    bindRestartCommand(element, { hidePanel = false } = {}) {
      element.addEventListener("command", event => {
        this.restartBrowser({
          invalidateCaches: this.shouldInvalidateCaches(event),
        });
        if (hidePanel) {
          this.hideContainingPanel(event);
        }
        event.preventDefault();
      });
    }
    async addRestartButton() {
      if (document.getElementById("appMenu-restart-button2")) return;
      let restartButton = AppMenuMods.create(document, "toolbarbutton", {
        id: "appMenu-restart-button2",
        class: "subviewbutton",
        label: await this.getRestartLabel(),
      });
      this.bindRestartCommand(restartButton, { hidePanel: true });
      restartButton.addEventListener("click", event => {
        if (event.button === 0) return;
        this.restartBrowser({ invalidateCaches: true });
        this.hideContainingPanel(event);
        event.preventDefault();
      });
      let exitButton = document.getElementById("appMenu-quit-button2");
      if (exitButton) {
        exitButton.before(restartButton);
      } else {
        PanelUI.mainView
          .querySelector(".panel-subview-body")
          .appendChild(restartButton);
      }
    }
    findToolsPopup() {
      return (
        document.getElementById("menu_ToolsPopup") ||
        document.querySelector("#tools-menu > menupopup")
      );
    }
    findToolsMenuAnchor(toolsPopup) {
      return toolsPopup.querySelector(
        "#devToolsSeparator, #browserToolsMenu, #menu_pageInfo, #menu_preferences"
      );
    }
    initToolsMenuRestartItem() {
      if (AppConstants.platform != "macosx") return;

      let attempts = 0;
      let tryAdd = async () => {
        if (await this.addToolsMenuRestartItem()) return;
        if (++attempts < 80) {
          setTimeout(tryAdd, 250);
        }
      };
      tryAdd();

      document.addEventListener(
        "popupshowing",
        event => {
          if (event.target == this.findToolsPopup()) {
            this.addToolsMenuRestartItem();
          }
        },
        true
      );
    }
    async addToolsMenuRestartItem() {
      if (AppConstants.platform != "macosx") return true;

      let toolsPopup = this.findToolsPopup();
      if (!toolsPopup) return false;

      let restartItem = document.getElementById("appMenuMods-tools-restart");
      if (!restartItem) {
        restartItem = AppMenuMods.create(document, "menuitem", {
          id: "appMenuMods-tools-restart",
          label: await this.getRestartLabel(),
          accesskey: "R",
        });
        this.bindRestartCommand(restartItem);
      }

      let anchor = this.findToolsMenuAnchor(toolsPopup);
      toolsPopup.insertBefore(restartItem, anchor);
      return true;
    }
    fixSyncSubviewButtonAlignment() {
      eval(
        `gSync._populateSendTabToDevicesView = function ${gSync._populateSendTabToDevicesView
          .toSource()
          .replace(/^_populateSendTabToDevicesView/, ``)
          .replace(/item.setAttribute\(\"align\", \"start\"\);/, ``)}`
      );
    }
  }

  if (gBrowserInit.delayedStartupFinished) {
    new AppMenuMods();
  } else {
    let delayedListener = (subject, topic) => {
      if (topic == "browser-delayed-startup-finished" && subject == window) {
        Services.obs.removeObserver(delayedListener, topic);
        new AppMenuMods();
      }
    };
    Services.obs.addObserver(
      delayedListener,
      "browser-delayed-startup-finished"
    );
  }
})();
