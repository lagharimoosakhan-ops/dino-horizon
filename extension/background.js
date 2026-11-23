// Clicking the toolbar icon (or Alt+Shift+D) opens the game, or focuses it if already open.
const GAME = chrome.runtime.getURL('game.html');
chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({ url: GAME });
  if (tab) {
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  } else {
    await chrome.tabs.create({ url: GAME });
  }
});
