"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ScriptMainMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
  }

  async list(uuObject) {
    let filter = {
      awid: uuObject.awid,
    };
    return await super.find(filter);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async remove(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.deleteOne(filter);
  }

}

module.exports = ScriptMainMongo;
