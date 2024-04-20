"use strict";

const AppMainUseCaseError = require("./app-main-use-case-error.js");
const TOKEN_ERROR_PREFIX = `${AppMainUseCaseError.ERROR_PREFIX}token/`;

const Create = {
  UC_CODE: `${TOKEN_ERROR_PREFIX}createToken/`,

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
      this.message = "Creating token by dao create has failed.";
    }
  },
};

const Update = {
  UC_CODE: `${TOKEN_ERROR_PREFIX}updateToken/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  TokenDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}tokenDoesNotExist`;
      this.message = "Token with inserted id does not exist.";
    }
  },

  DaoUpdateFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}daoUpdateFailed`;
      this.message = "Updating token by dao update has failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${TOKEN_ERROR_PREFIX}deleteToken/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  TokenDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}tokenDoesNotExist`;
      this.message = "Token does not exist.";
    }
  },

  DaoRemoveFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}daoRemoveFailed`;
      this.message = "Removing token by dao remove has failed.";
    }
  },
};

const Get = {
  UC_CODE: `${TOKEN_ERROR_PREFIX}getToken/`,

  TokenDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}tokenDoesNotExist`;
      this.message = "Token does not exist.";
    }
  },
};

const List = {
  UC_CODE: `${TOKEN_ERROR_PREFIX}listToken/`,

  TokenDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}tokenDoesNotExist`;
      this.message = "Token does not exist.";
    }
  },
};

module.exports = {
  List,
  Get,
  Delete,
  Update,
  Create
};
