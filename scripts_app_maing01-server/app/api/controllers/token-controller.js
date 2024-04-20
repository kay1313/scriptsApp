"use strict";
const TokenAbl = require("../../abl/token-abl.js");

class TokenController {

  listToken(ucEnv) {
    return TokenAbl.listToken(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  getToken(ucEnv) {
    return TokenAbl.getToken(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  deleteToken(ucEnv) {
    return TokenAbl.deleteToken(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateToken(ucEnv) {
    return TokenAbl.updateToken(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  createToken(ucEnv) {
    return TokenAbl.createToken(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new TokenController();
