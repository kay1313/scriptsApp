"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/group-error.js");

const WARNINGS = {

};

class GroupAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("group");
  }

  async removeGroup(awid, dtoIn) {
    let validationResult = this.validator.validate("groupDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Remove.InvalidDtoIn
    );

    const group = await this.dao.get(awid, dtoIn.id);

    if (!group) {
      throw new Errors.Remove.GroupDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    try {
      await this.dao.remove({ ...dtoIn, awid });
    } catch (e) {
      throw new Errors.Remove.DaoRemoveFailed({ uuAppErrorMap }, e);
    }

    return {
      uuAppErrorMap,
    };
  }

  async updateGroup(awid, dtoIn) {
    let validationResult = this.validator.validate("groupUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const group = await this.dao.get(awid, dtoIn.id);

    if (!group) {
      throw new Errors.Update.GroupDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
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

  async listGroup(awid, dtoIn) {
    let validationResult = this.validator.validate("groupListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    const dtoOut = await this.dao.list(awid);

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async getGroup(awid, dtoIn) {
    let validationResult = this.validator.validate("groupGetDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.unsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    const dtoOut = await this.dao.get(awid, dtoIn.id);

    if (!dtoOut) {
      throw new Errors.Get.GroupDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    return {
      ...dtoOut,
      uuAppErrorMap,
    };
  }

  async createGroup(awid, dtoIn) {
    let validationResult = this.validator.validate("groupCreateDtoInType", dtoIn);
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

module.exports = new GroupAbl();
