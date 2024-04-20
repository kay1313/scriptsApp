"use strict";

const AppMainUseCaseError = require("./app-main-use-case-error.js");
const GROUP_ERROR_PREFIX = `${AppMainUseCaseError.ERROR_PREFIX}group/`;

const Create = {
  UC_CODE: `${GROUP_ERROR_PREFIX}createGroup/`,

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
      this.message = "Creating group by dao create has failed.";
    }
  },
};

const Get = {
  UC_CODE: `${GROUP_ERROR_PREFIX}getGroup/`,

  GroupDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}groupDoesNotExist`;
      this.message = "Group does not exist.";
    }
  },
};

const List = {
  UC_CODE: `${GROUP_ERROR_PREFIX}listGroup/`,

  GroupDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}groupDoesNotExist`;
      this.message = "Group does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${GROUP_ERROR_PREFIX}updateGroup/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  GroupDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}groupDoesNotExist`;
      this.message = "Group with inserted id does not exist.";
    }
  },

  DaoUpdateFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}daoUpdateFailed`;
      this.message = "Updating group by dao update has failed.";
    }
  },
};

const Remove = {
  UC_CODE: `${GROUP_ERROR_PREFIX}removeGroup/`,

  InvalidDtoIn: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Remove.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  GroupDoesNotExist: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Remove.UC_CODE}groupDoesNotExist`;
      this.message = "Group does not exist.";
    }
  },

  DaoRemoveFailed: class extends AppMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Remove.UC_CODE}daoRemoveFailed`;
      this.message = "Removing group by dao remove has failed.";
    }
  },
};

module.exports = {
  Remove,
  Update,
  List,
  Get,
  Create
};
