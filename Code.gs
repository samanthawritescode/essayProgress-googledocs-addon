/**
 * @OnlyCurrentDoc  Limits the script to only accessing the current document.
 */

var SIDEBAR_TITLE = 'Essay Progress';

/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  DocumentApp.getUi()
      .createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle(SIDEBAR_TITLE);
  DocumentApp.getUi().showSidebar(ui);
}


/**
* Returns the number of words in the document
* 
* @return {int} the number of words in the document
*/
function getWordCount() { 
  // Retrieve and return the information requsted by the sidebar.
  var text = DocumentApp.getActiveDocument().getBody().getText();
  var listOfWords = text.split(" ");
  var numWords = listOfWords.length;
  Logger.log(numWords); // testing
  return numWords;
} 