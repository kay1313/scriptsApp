"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/script-main-error.js");
const { exec } = require("uu_appg01_devkit/src/tools/helpers");

const WARNINGS = {
  unsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
};

class ScriptMainAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("scriptMain");
  }

  async executeScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptGetDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    const dtoOut = await this.dao.get(awid, dtoIn.id);

    if (!dtoOut) {
      throw new Errors.Get.ScriptDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }
    let s = ""
await eval("s = 'jupi'")
    return {
      ...dtoOut,
      s,
      uuAppErrorMap,
    };
  }

  async listScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptListDtoInType", dtoIn);
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

  async getScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptGetDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    const dtoOut = await this.dao.get(awid, dtoIn.id);

    if (!dtoOut) {
      throw new Errors.Get.ScriptDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async deleteScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    const script = await this.dao.get(awid, dtoIn.id);

    if (!script) {
      throw new Errors.Delete.ScriptDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    try {
      await this.dao.remove(awid, dtoIn.id);
    } catch (e) {
      throw new Errors.Delete.DaoRemoveFailed({ uuAppErrorMap }, e);
    }

    return {
      uuAppErrorMap,
    };
  }

  async updateScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const script = await this.dao.get(awid, dtoIn.id);

    if (!script) {
      throw new Errors.Update.ScriptDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
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

  async createScript(awid, dtoIn) {
    let validationResult = this.validator.validate("scriptCreateDtoInType", dtoIn);
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

module.exports = new ScriptMainAbl();
