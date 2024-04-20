"use strict";

const AppMainUseCaseError = require("./app-main-use-case-error.js");
const SCRIPT_MAIN_ERROR_PREFIX = `${AppMainUseCaseError.ERROR_PREFIX}scriptMain/`;

const Create = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  DaoCreateFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}daoCreateFailed`;
      this.message = "Creating script by dao create has failed.";
    }
  },
};

const Update = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}update/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ScriptDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}scriptDoesNotExist`;
      this.message = "Script with inserted id does not exist.";
    }
  },

  DaoUpdateFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}daoUpdateFailed`;
      this.message = "Updating script by dao update has failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}delete/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ScriptDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}scriptDoesNotExist`;
      this.message = "Script does not exist.";
    }
  },

  DaoRemoveFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}daoRemoveFailed`;
      this.message = "Removing script by dao remove has failed.";
    }
  },
};

const Get = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}get/`,

  ScriptDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}scriptDoesNotExist`;
      this.message = "Script does not exist.";
    }
  },
};

const List = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}list/`,

  ScriptDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}scriptDoesNotExist`;
      this.message = "Script does not exist.";
    }
  },
};

const ExecuteScript = {
  UC_CODE: `${SCRIPT_MAIN_ERROR_PREFIX}executeScript/`,
  
};

module.exports = {
  ExecuteScript,
  List,
  Get,
  Delete,
  Update,
  Create
};
