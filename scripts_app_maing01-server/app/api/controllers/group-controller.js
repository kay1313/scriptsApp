"use strict";
const GroupAbl = require("../../abl/group-abl.js");

class GroupController {

  removeGroup(ucEnv) {
    return GroupAbl.removeGroup(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateGroup(ucEnv) {
    return GroupAbl.updateGroup(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  listGroup(ucEnv) {
    return GroupAbl.listGroup(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  getGroup(ucEnv) {
    return GroupAbl.getGroup(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  createGroup(ucEnv) {
    return GroupAbl.createGroup(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new GroupController();
