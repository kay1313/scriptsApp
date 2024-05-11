"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/token-error.js");

const WARNINGS = {
  unsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
};

class TokenAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("token");
  }

  async listToken(awid, dtoIn) {
    let validationResult = this.validator.validate("tokenListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    const dtoOut = await this.dao.list({ awid: awid });

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async getToken(awid, dtoIn) {
    let validationResult = this.validator.validate("tokenGetDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    const dtoOut = await this.dao.get(awid, dtoIn.id);

    if (!dtoOut) {
      throw new Errors.Get.TokenDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async deleteToken(awid, dtoIn) {
    let validationResult = this.validator.validate("tokenDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    const token = await this.dao.get(awid, dtoIn.id);

    if (!token) {
      throw new Errors.Delete.TokenDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    try {
      await this.dao.remove({ ...dtoIn, awid });
    } catch (e) {
      throw new Errors.Delete.DaoRemoveFailed({ uuAppErrorMap }, e);
    }

    return {
      uuAppErrorMap,
    };
  }

  async updateToken(awid, dtoIn) {
    let validationResult = this.validator.validate("tokenUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const token = await this.dao.get(awid, dtoIn.id);

    if (!token) {
      throw new Errors.Update.TokenDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    let dtoOut;
    try {
      dtoOut = await this.dao.update({ ...dtoIn, awid });
    } catch (e) {
      throw new Errors.Update.DaoUpdateFailed({ uuAppErrorMap }, e);
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async createToken(awid, dtoIn) {
    let validationResult = this.validator.validate("tokenCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    let dtoOut;
    try {
      dtoOut = await this.dao.create({ ...dtoIn, awid });
    } catch (e) {
      throw new Errors.Create.DaoCreateFailed({ uuAppErrorMap }, e);
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

}

module.exports = new TokenAbl();
