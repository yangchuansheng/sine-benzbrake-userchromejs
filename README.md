# Sine benzBrake userChromeJS collection

This repository repackages scripts from [`benzBrake/FirefoxCustomize/userChromeJS`](https://github.com/benzBrake/FirefoxCustomize/tree/master/userChromeJS) as Sine-compatible custom mods.

## Important

- The upstream repository does not provide a single repository-wide LICENSE file. Individual scripts may contain their own license metadata. This repository preserves original script headers and does not add a new blanket license.
- These scripts run with browser chrome privileges. Review each script before installing it.
- Do not install the repository root in Sine if you expect scripts to run. The root `theme.json` is intentionally inert; install one `mods/<id>` folder at a time.
- Some scripts were written for specific Firefox versions or userChromeJS loaders. Sine can package and load them, but compatibility is not guaranteed.
- `.uc.mjs` scripts that rely on JSWindowActor metadata from other loaders may need additional adaptation. The original files are preserved.

## How to install with Sine

1. Install Sine and restart the browser.
2. In Sine settings, enable installing JS from unofficial sources (`sine.allow-unsafe-js`).
3. Install a specific mod folder from this repository, for example:

```text
yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/locationbar
```

Use a path from the table below.

## Scripts

| Sine install path | Source path | Loaded by default | License metadata |
| --- | --- | --- | --- |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/000` | `000-$.sys.mjs` | no, helper only | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/000-syncify` | `000-syncify.sys.mjs` | no, helper only | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/100__browsertoolbox` | `100/browsertoolbox.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/102__bmmulticolumn` | `102/BMMultiColumn.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/103__privatetab` | `103/privateTab.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/103__verticaltabspane` | `103/verticalTabsPane.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/104__unifiedextensionsenhance` | `104/unifiedExtensionsEnhance.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/107__locationbar` | `107/LocationBar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/107__sidebarmodoki` | `107/SidebarModoki.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/107__statusbar` | `107/StatusBar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/109__autopopup` | `109/AutoPopup.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/109__unifiedextensionsenhance` | `109/unifiedExtensionsEnhance.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/113__sidebarmodoki` | `113/SidebarModoki.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/113__privatetabs` | `113/privateTabs.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/117__baidutranslator` | `117/BaiduTranslator.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/127__autosavescreenshot` | `127/AutoSaveScreenshot.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/134__unreadtabmods` | `134/unreadTabMods.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/134__verticaltabspane` | `134/verticalTabsPane.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/135__tabplus` | `135/TabPlus.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/136__aboutconfig_menu` | `136/aboutconfig_menu.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/136__revivaloldhistorysidebar` | `136/revivalOldHistorySidebar.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/137__statusbar` | `137/StatusBar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/57__autopopup` | `57/AutoPopup.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/57__bookmarkopt` | `57/BookmarkOpt.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/57__reloadalltabs` | `57/ReloadAllTabs.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/68__addbookmarkhere` | `68/AddBookmarkHere.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/68__downloadplus` | `68/downloadPlus.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/69__autopopup` | `69/autoPopup++.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/70__firefox_toolbarbuttons` | `70/Firefox_ToolBarButtons.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/70__tabplus` | `70/Tabplus.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/70__saveucjs` | `70/saveUCJS.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/70__verticaladdonbar` | `70/verticalAddOnBar.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/72__addmenuplus_fx72` | `72/addMenuPlus_fx72.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/72__adjustpanelviewposition` | `72/adjustPanelViewPosition.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/78__baidutranslator` | `78/BaiduTranslator.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/78__openwith` | `78/OpenWith.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/78__syncstyles` | `78/SyncStyles.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/80__copycat__copycat` | `80/CopyCat/CopyCat.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/80__saveucjs` | `80/saveUCJS.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/80__ucf_drag_modr` | `80/ucf_drag_ModR.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__custombuttons` | `90/CustomButtons.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__personaltoolbarautohide` | `90/PersonalToolbarAutoHide.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__quicksnapshot_mod` | `90/QuickSnapshot_Mod.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__updatebookmarklite` | `90/UpdateBookmarkLite.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__yougetbtn` | `90/YouGetBtn.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__addtoolbarinsidelocationbar` | `90/addToolbarInsideLocationBar.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__downloadsbtnmod` | `90/downloadsBtnMod.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__rightclickopenclipboard` | `90/rightClickOpenClipboard.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/90__showpersonaltoolbarondemand` | `90/showPersonalToolbarOnDemand.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/95__bookmarksmenu_scrollbar` | `95/bookmarksmenu_scrollbar.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/96__privatetab` | `96/privateTab.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/addonspage_fx72` | `AddonsPage_fx72.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/appmenumods` | `aminomancer/uc.css.js/JS/appMenuMods.uc.js` | yes | CC BY-NC-SA 4.0 |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/autocompletedeletebutton` | `AutoCompleteDeleteButton.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/autocopyselectiontext__autocopyselectiontext.loader` | `AutoCopySelectionText/AutoCopySelectionText.loader.uc.js` | no, helper only | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/autocopyselectiontext__autocopyselectiontext` | `AutoCopySelectionText/AutoCopySelectionText.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/autocopyselectiontext__autocopyselectiontext-2` | `AutoCopySelectionText/AutoCopySelectionText.uc.mjs` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/autohidetabstoolbar` | `AutoHideTabsToolbar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/bmmulticolumn` | `BMMultiColumn.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/bookmarkopt` | `BookmarkOpt.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/colorfultabs` | `ColorfulTabs.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/copycattheme__copycattheme` | `CopyCatTheme/CopyCatTheme.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/copyplaintext` | `CopyPlainText.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/custombuttons` | `CustomButtons.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/extensionsoptionsmenu__extension-options-menu` | `ExtensionsOptionsMenu/Extension Options Menu.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/extensionsoptionsmenu__extensionoptionsmenu` | `ExtensionsOptionsMenu/extensionOptionsMenu.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/homeendfixer` | `HomeEndFixer.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/keychanger__keychanger` | `KeyChanger/KeyChanger.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/keychanger__keychanger_fx70` | `KeyChanger/KeyChanger_fx70.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/linkgopher` | `LinkGopher.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/locationbar` | `LocationBar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/menubarreplacewithbutton` | `MenubarReplaceWithButton.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/openwithhelper__openwithhelper` | `OpenWithHelper/OpenWithHelper.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/pipmod` | `PipMod.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/saveaspng` | `SaveAsPNG.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/screenshottools` | `ScreenshotTools.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/sidebarmodoki__sidebarmodoki` | `SidebarModoki/SidebarModoki.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/statusbar` | `StatusBar.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/tabplus` | `TabPlus.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/toolbarautohide` | `ToolbarAutoHide.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/undoclosetabbuttonn` | `UndoCloseTabButtonN.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/unifiedextensionssearch` | `UnifiedExtensionsSearch.uc.js` | yes | MIT |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/usercssloader__usercssloader` | `UserCSSLoader/UserCSSLoader.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/addmenuplus__addmenuplus.loader` | `addMenuPlus/addMenuPlus.loader.uc.js` | no, helper only | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/addmenuplus__addmenuplus` | `addMenuPlus/addMenuPlus.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/addmenuplus__addmenuplus-2` | `addMenuPlus/addMenuPlus.uc.mjs` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/contextmenuslidedown` | `contextMenuSlideDown.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/dav_linkifieslocationbar` | `dav_LinkifiesLocationBar.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/extensionstylesheetloader` | `extensionStylesheetLoader.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/middleclickopentabcontextmenu` | `middleClickOpenTabContextMenu.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/miscmods` | `miscMods.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/movableoverflowbutton` | `movableOverflowButton.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/movablepaneluibutton` | `movablePanelUIButton.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/movereloadintourl` | `moveReloadIntoUrl.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/newtab-aboutconfig` | `newtab-aboutconfig.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/patchforbug1894910_allow_search_with_empty_text` | `patchForBug1894910_allow_search_with_empty_text.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/privatetab__privatetab` | `privateTab/privateTab.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/privatetab__privatetabs` | `privateTab/privateTabs.uc.js` | yes | This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA. |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/rebuild_userchrome` | `rebuild_userChrome.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/restoreoldstylecleanhistory` | `restoreOldStyleCleanHistory.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/restoreoldstylelaunchapplication` | `restoreOldStyleLaunchApplication.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/saveucjs` | `saveUCJS.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/setviewsourceeditor` | `setViewSourceEditor.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/showlimitedtimetheme` | `showLimitedTimeTheme.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/sidebarattrubesdetector` | `sidebarAttrubesDetector.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/synctabsmod` | `syncTabsMod.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/tabnotifitionbadge` | `tabNotifitionBadge.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/textzoomperdomain_e10s` | `textZoomPerDomain_e10s.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/textzoomtool` | `textZoomTool.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/toggleextensions` | `toggleExtensions.uc.js` | yes | MIT License |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/ucf_autopopup` | `ucf_autoPopup.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/ucf_drag_modr` | `ucf_drag_ModR.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/uidensity` | `uiDensity.uc.js` | yes | not specified |
| `yangchuansheng/sine-benzbrake-userchromejs/tree/main/mods/unifiedextensionsenhance` | `unifiedExtensionsEnhance.uc.js` | yes | not specified |
