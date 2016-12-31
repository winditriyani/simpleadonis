'use strict'

const Schema = use('Schema')

class UserTableSchema extends Schema {

  up () {
    this.create('user', (table) => {
      table.increments()
      table.string('username')
      table.string('email')
      table.string('password')
      table.timestamps()
    })
  }

  down () {
    this.drop('user')
  }

}

module.exports = UserTableSchema
