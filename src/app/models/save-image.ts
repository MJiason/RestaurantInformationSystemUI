import {EntityTypes} from "./enums/EntityTypes";

export class SaveImageRequest {
  id!: number;
  entityName!: EntityTypes;

  constructor(id: number, entityName: EntityTypes) {
    this.id = id;
    this.entityName = entityName;
  }
}
