"use strict";
const ScriptMainAbl = require("../../abl/script-main-abl.js");

class ScriptMainController {

  executeScript(ucEnv) {
    return ScriptMainAbl.executeScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listScript(ucEnv) {
    return ScriptMainAbl.listScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  getScript(ucEnv) {
    return ScriptMainAbl.getScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  deleteScript(ucEnv) {
    return ScriptMainAbl.deleteScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateScript(ucEnv) {
    return ScriptMainAbl.updateScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  createScript(ucEnv) {
    return ScriptMainAbl.createScript(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ScriptMainController();
