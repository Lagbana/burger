const orm = require("../config/orm")

class Burger {
    constructor (options = {}) {
        this.burgerName = options.burgerName
        options.isDevoured = false
        this.isDevoured = options.isDevoured
        this.id = options.id
    }

    static async getAllBurgers () {
        const burgers = await orm.selectAll(`burgers`, `id`)
        return burgers
    }

    async save () {
        if (this.id) {
            return this.updateBurger()
        } else {
            return this.addBurger()
        }
    }
    async addBurger () {
        const burger = await orm.insertOne(
            `burgers`,
            `burger_name`,
            `devoured`,
            this.burgerName,
            this.isDevoured
        )
        this.id = burger.insertId
        return this
    }

    async updateBurger () {
        this.isDevoured = fixBool(this.isDevoured)
        const burger = await orm.updateOne(
            `burgers`,
            {burger_name: this.burgerName, devoured: this.isDevoured},
            `id`,
            this.id
        )
        console.log(burger.affectedRows)
        return this
    }

}
function fixBool (prop) {
    if (prop === 'false') prop = false
    else if (prop === '0') prop = false
    else if (prop === 0) prop = false
    else if (prop === null) prop = false
    else if (prop === undefined) prop = false
    else prop = true
    return prop
  }

module.exports = Burger