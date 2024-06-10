import Realm, { BSON } from 'realm'

export class UserRealmModel extends Realm.Object<UserRealmModel> {
  _id!: BSON.ObjectId
  name!: string

  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      password: 'string',
    },
  }
}
