// Building an inventory management system
// Composed of three parts:
  // Item Creator: Makes sure all info is present and valid
  // Items Manager: Creating items, updating info, querying, etc.
  // Reports Manager: Generates reports for one item or all items

// IMPORTANT NOTES
// Don't validate uniqueness of SKU code. Thus duplicates may exist.
// If any required info is not valid,
// item creator returns object with notValid = true;


// Items are objects created by the item manager

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    // eslint-disable-next-line max-len
    if (this.validName(name) && this.validCategory(category) && quantity !== undefined) {
      return this.items.push({
        name,
        category,
        quantity,
        sku: this.createSkuCode(name, category)
      });
    } else {
      return false;
    }
  },

  update(sku, itemInformation) {
    Object.assign(this.getItem(sku), itemInformation);
  },

  delete(sku) {
    this.items = this.items.filter(product => product.sku !== sku);
  },

  inStock() { // Should return a list with the item object, not console.log anything.
    let inStockItems = [];
    this.items.forEach(item => {
      if (item.quantity > 0) {
        inStockItems.push(item);
      }
    });
    return inStockItems;
  },

  itemsInCategory(category) {
    this.items.forEach(item => {
      if (item.category === category) {
        console.log(item);
      }
    });
  },

  getItem(sku) {
    return this.items.filter(item => item.sku === sku)[0];
  },

  validName(name) {
    if (name.split(' ').join('').length >= 5) {
      return true;
    } else {
      return false;
    }
  },

  validCategory(category) {
    if (category.length >= 5 && category.split(' ').length <= 1) {
      return true;
    } else {
      return false;
    }
  },

  createSkuCode(name, category) {
    let nameExtract = name.split(' ').join('').slice(0, 3);
    let categoryExtract = category.slice(0, 2);
    return (nameExtract + categoryExtract).toUpperCase();
  }
};

let ReportManager = {
  init(itemsManager) {
    this.items = itemsManager;
  },

  createReporter(sku) {
    let item = this.items.getItem(sku);
    return {
      itemInfo() {
        for (let property in item) {
          console.log(`${property}: ${item[property]}`);
        }
      }
    };
  },

  reportInStock() {
    // Logs the item names as comma separated values
    let inStockItems = this.items.inStock();
    let inStockItemNames = [];
    inStockItems.forEach(item => inStockItemNames.push(item.name));
    console.log(inStockItemNames.join(', '));
  }
};


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football a 
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
console.log(kitchenPotReporter);
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // // category: cooking
// // // quantity: 10
