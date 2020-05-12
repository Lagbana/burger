// Import dependencies
const orm = require("../config/orm");

// Burger class
class Burger {
  /* 
     *constructor: @param: options object
     object properties: burgerName (String), isDevoured (Boolean), id (Integer)
  */
  constructor(options = {}) {
    this.burgerName = options.burgerName;
    options.isDevoured = false;
    this.isDevoured = options.isDevoured;
    this.id = options.id;
  }
  /*
   *getAllBurgers method: executes orm operation selectAll to get and return all burgers
   */
  static async getAllBurgers() {
    const burgers = await orm.selectAll(`burgers`, `id`);
    return burgers;
  }
  /*
   *save method: executes orm update operation if the entry exists OR the orm add operation if the entry doesn't exist
   */
  async save() {
    if (this.id) {
      return this.updateBurger();
    } else {
      return this.addBurger();
    }
  }
  /*
   *addBurgers method: executes orm insert operation
   */
  async addBurger() {
    const burger = await orm.insertOne(
      `burgers`,
      `burger_name`,
      `devoured`,
      this.burgerName,
      this.isDevoured
    );
    this.id = burger.insertId;
    return this;
  }
  /*
   *addBurgers method: executes orm update operation
   */
  async updateBurger() {
    this.isDevoured = fixBool(this.isDevoured);
    const burger = await orm.updateOne(
      `burgers`,
      { burger_name: this.burgerName, devoured: this.isDevoured },
      `id`,
      this.id
    );
    return this;
  }
}

// Validation check for isDevoured parameter
function fixBool(prop) {
  if (prop === "false") prop = false;
  else if (prop === "0") prop = false;
  else if (prop === 0) prop = false;
  else if (prop === null) prop = false;
  else if (prop === undefined) prop = false;
  else prop = true;
  return prop;
}

module.exports = Burger;
