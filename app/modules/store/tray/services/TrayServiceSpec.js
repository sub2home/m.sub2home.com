'use strict';

describe('TrayService', function() {

  beforeEach(module('app'));

  var TrayService;
  beforeEach(inject(function(_TrayService_) {
    TrayService = _TrayService_;
  }));

var article = {
  "id": 6,
  "title": "BBQ Rib",
  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/subs/bbqrib-st.png",
  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/subs/bbqrib-st.png",
  "info": "6inch",
  "description": "BBQ Rib-Hacksteak mit rauchiger BBQ Sauce, Belag ganz nach deinem Geschmack.",
  "price": 4.49,
  "deposit": 0,
  "allowsIngredients": 1,
  "allowsDeposit": 0,
  "allowsMenuUpgrades": 1,
  "icon": "6inch",
  "menuUpgradesCollection": [
    {
      "id": 2,
      "title": "Menü",
      "description": "Neue Beschreibung",
      "price": 2.2,
      "menuComponentBlocksCollection": [
        {
          "id": 46,
          "menuComponentBlockMediaModel": {
            "id": 5,
            "icon": "iBeverage",
            "smallImage": "https://d3uu6huyzvecb1.cloudfront.net/images/categories/smallimages/getraenk.png",
            "largeImage": "https://d3uu6huyzvecb1.cloudfront.net/images/categories/largeimages/getraenk.png",
            "placeholder": "pBeverage"
          },
          "menuComponentOptionsCollection": [
            {
              "id": 38,
              "title": "Softdrink",
              "menuComponentOptionArticlesCollection": [
                {
                  "id": 109,
                  "title": "Coca Cola",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/coke.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/coke-b.png",
                  "info": "0.5l",
                  "description": "das Original: koffeinhaltiges Erfrischungsgetränk",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 110,
                  "title": "Coca Cola Light",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/cokelight.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/cokelight-b.png",
                  "info": "0.5l",
                  "description": "das Original ohne Zucker: koffeinhaltiges, kalorienarmes Erfrischungsgetränk",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 111,
                  "title": "Fanta",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/fanta.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/fanta-b.png",
                  "info": "0.5l",
                  "description": "Fanta Orange - unglaublich prickelnd",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 112,
                  "title": "Sprite",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/sprite.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/sprite-b.png",
                  "info": "0.5l",
                  "description": "mit grünen Limetten und sonnengelben Zitronen",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 113,
                  "title": "Apfelschorle",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/apfelschorle.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/apfelschorle-b.png",
                  "info": "0.5l",
                  "description": "55% Apfelsaft und 45% Apollinaris Silence Mineralwasser",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 114,
                  "title": "Nestea Pfirsich",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/nesteapfirsich.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/nesteapfirsich-b.png",
                  "info": "0.5l",
                  "description": "Die erfrischende Kombination aus dem Guten des Tees und köstlichem Pfirsich-Geschmack.",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 116,
                  "title": "Apollinaris Classic",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/apoclassic.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/apoclassic-b.png",
                  "info": "0.5l",
                  "description": "Spritziges Mineralwasser",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 117,
                  "title": "Apollinaris Medium",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/apomedium.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/apomedium-b.png",
                  "info": "0.5l",
                  "description": "Mineralwasser mit Kohlensäure",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 118,
                  "title": "Vio Mineralwasser",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/vio05.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/vio05-b.png",
                  "info": "0.5l",
                  "description": "Stilles Mineralwasser aus dem Hause Apollinaris",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                },
                {
                  "id": 115,
                  "title": "Nestea Zitrone",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/beverages/nesteazitrone.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/beverages/nesteazitrone-b.png",
                  "info": "0.5l",
                  "description": "Die erfrischende Kombination aus dem Guten des Tees und köstlichem Zitronen-Geschmack.",
                  "price": 2,
                  "deposit": 0.25,
                  "allowsIngredients": 0,
                  "allowsDeposit": 1,
                  "allowsMenuUpgrades": 1,
                  "icon": "beverage"
                }
              ]
            }
          ]
        },
        {
          "id": 47,
          "menuComponentBlockMediaModel": {
            "id": 9,
            "icon": "iSnacks",
            "smallImage": "https://d3uu6huyzvecb1.cloudfront.net/images/menucomponentblocks/smallimages/cookiechips.png",
            "largeImage": "https://d3uu6huyzvecb1.cloudfront.net/images/menucomponentblocks/largeimages/cookiechips.png",
            "placeholder": "pCookieChips"
          },
          "menuComponentOptionsCollection": [
            {
              "id": 37,
              "title": "Cookies",
              "menuComponentOptionArticlesCollection": [
                {
                  "id": 75,
                  "title": "Chocolate Chip",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/chocolatechip.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/chocolatechip-cdm.png",
                  "info": "",
                  "description": "Cookie mit Vollmilchschokostücken",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 78,
                  "title": "Chocolate Chip Rainbow Candy",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/rainbowcandy.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/rainbowcandy-cdm.png",
                  "info": "",
                  "description": "Cookie mit Vollmilchschokostücken und bunten Schokolinsen",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 81,
                  "title": "Double Chocolate Chip",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/doublechocolatechip.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/doublechocolatechip-cdm.png",
                  "info": "",
                  "description": "Cookie mit heller und dunkler Schokolade",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 84,
                  "title": "White Chip Macadamia Nut",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/macadamianut.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/macadamianut-cdm.png",
                  "info": "",
                  "description": "Cookie mit weißer Schokolade und Macadamianüssen",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 90,
                  "title": "Oatmealraisin",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/oatmealraisin.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/oatmealraisin-cdm.png",
                  "info": "",
                  "description": "Cookie mit Haferflocken",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 93,
                  "title": "Raspberry Cheesecake",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/cookies/raspberrycheesecake.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/cookies/raspberrycheesecake-cdm.png",
                  "info": "",
                  "description": "Cookie mit Himbeerstückchen und Käsekuchen",
                  "price": 0.89,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                }
              ]
            },
            {
              "id": 42,
              "title": "Chips",
              "menuComponentOptionArticlesCollection": [
                {
                  "id": 108,
                  "title": "Doritos Sweet Chili Pepper",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/doritossweetchilipepper.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/doritossweetchilipepper-c.png",
                  "info": "",
                  "description": "süßlich-scharfe Doritos",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 107,
                  "title": "Doritos Nacho Cheese",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/doritosnachocheese.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/doritosnachocheese-c.png",
                  "info": "",
                  "description": "Nachos mit Käse-Geschmack",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 106,
                  "title": "Lays Chips Sourcream & Onion",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/layssourcremeonion.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/layssourcremeonion-c.png",
                  "info": "",
                  "description": "klassischer Sauerrahm-Zwiebel-Geschmack",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 105,
                  "title": "Lays Chips Barbecue",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/laysbarbecue.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/laysbarbecue-c.png",
                  "info": "",
                  "description": "rauchig würziger BBQ-Geschmack",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 104,
                  "title": "Lays Chips Salted",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/layssalted.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/layssalted-c.png",
                  "info": "",
                  "description": "einfach gesalzen, einfach lecker",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 103,
                  "title": "Lays Chips Cheese & Onion",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/layscheeseonion.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/layscheeseonion-c.png",
                  "info": "",
                  "description": "Käse-Zwiebel-Geschmack",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 102,
                  "title": "Lays Chips Salt & Vinegar",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/layssaltvinegar.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/layssaltvinegar-c.png",
                  "info": "",
                  "description": "gesalzen und mit feiner Essignote",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                },
                {
                  "id": 101,
                  "title": "Lays Chips Paprika",
                  "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/smallimages/chips/layspaprika.png",
                  "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/articles/largeimages/chips/layspaprika-c.png",
                  "info": "",
                  "description": "knusprige Paprika-Chips",
                  "price": 0.99,
                  "deposit": 0,
                  "allowsIngredients": 0,
                  "allowsDeposit": 0,
                  "allowsMenuUpgrades": 1,
                  "icon": ""
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "ingredientCategoriesCollection": [
    {
      "id": 1,
      "title": "Brot",
      "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredientcategories/smallimages/bread.png",
      "icon": "iBread",
      "isSingle": 1,
      "isMandatory": 1,
      "defaultIngredientModel": null,
      "ingredientsCollection": [
        {
          "id": 1,
          "title": "Cheese Oregano",
          "description": "Weißbrot mit Käse und Oregano",
          "shortTitle": "Cheese Oregano",
          "shortcut": "CO",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/cheeseoregano.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/cheeseoregano.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "005"
        },
        {
          "id": 2,
          "title": "Sesam",
          "description": "Weißbrot mit Sesam",
          "shortTitle": "Sesam",
          "shortcut": "SE",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/sesam.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/sesam.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "006"
        },
        {
          "id": 3,
          "title": "Italian",
          "description": "Italienisches Weißbrot",
          "shortTitle": "Italian",
          "shortcut": "IT",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/italian.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/italian.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "007"
        },
        {
          "id": 4,
          "title": "Vollkorn",
          "description": "Vollkornbrot mit Roggen",
          "shortTitle": "Vollkorn",
          "shortcut": "VK",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/vollkorn.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/vollkorn.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "008"
        },
        {
          "id": 5,
          "title": "Honey Oat",
          "description": "Vollkornbrot mit Honighaferflocken",
          "shortTitle": "Honey Oat",
          "shortcut": "HO",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/honeyoat.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/honeyoat.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "009"
        },
        {
          "id": 49,
          "title": "Flatbread",
          "description": "",
          "shortTitle": "Flatbread",
          "shortcut": "FB",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/bread/flatbread.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/bread/flatbread.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false,
          "$$hashKey": "00A"
        }
      ],
      "passed": true,
      "$$hashKey": "00J"
    },
    {
      "id": 2,
      "title": "Käse",
      "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredientcategories/smallimages/cheese.png",
      "icon": "iCheese",
      "isSingle": 1,
      "isMandatory": 0,
      "defaultIngredientModel": null,
      "ingredientsCollection": [
        {
          "id": 6,
          "title": "Cheddar Cheese",
          "description": "",
          "shortTitle": "Cheddar",
          "shortcut": "Cc",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/cheese/cheddar.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/cheese/cheddar.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 7,
          "title": "Scheibenkäse",
          "description": "",
          "shortTitle": "Scheibenkäse",
          "shortcut": "SK",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/cheese/scheibenkaese.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/cheese/scheibenkaese.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 8,
          "title": "Streichkäse",
          "description": "",
          "shortTitle": "Streichkäse",
          "shortcut": "St",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/cheese/streichkaese.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/cheese/streichkaese.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        }
      ],
      "$$hashKey": "00K"
    },
    {
      "id": 3,
      "title": "Gemüse",
      "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredientcategories/smallimages/vegetables.png",
      "icon": "iVegetables",
      "isSingle": 0,
      "isMandatory": 0,
      "defaultIngredientModel": null,
      "ingredientsCollection": [
        {
          "id": 9,
          "title": "Eisbergsalat",
          "description": "",
          "shortTitle": "Salat",
          "shortcut": "Sa",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/eisbergsalat.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/eisbergsalat.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": true
        },
        {
          "id": 10,
          "title": "Tomaten",
          "description": "",
          "shortTitle": "Tomaten",
          "shortcut": "To",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/tomate.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/tomate.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": true
        },
        {
          "id": 11,
          "title": "Salatgurke",
          "description": "",
          "shortTitle": "Gurke",
          "shortcut": "Gu",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/salatgurke.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/salatgurke.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": true
        },
        {
          "id": 12,
          "title": "Essiggurken",
          "description": "",
          "shortTitle": "Essiggurken",
          "shortcut": "EG",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/essiggurke.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/essiggurke.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 13,
          "title": "Grüne Paprika",
          "description": "",
          "shortTitle": "Paprika",
          "shortcut": "Pa",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/paprika.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/paprika.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 14,
          "title": "schwarze Oliven",
          "description": "",
          "shortTitle": "Oliven",
          "shortcut": "Ol",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/olive.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/olive.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 15,
          "title": "Rote Zwiebeln",
          "description": "",
          "shortTitle": "Zwiebeln",
          "shortcut": "Zw",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/zwiebel.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/zwiebel.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 16,
          "title": "Jalapeños (scharf)",
          "description": "",
          "shortTitle": "Jalapeños",
          "shortcut": "Ja",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/vegetables/jalapeno.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/vegetables/jalapeno.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        }
      ],
      "$$hashKey": "00L"
    },
    {
      "id": 4,
      "title": "Extras",
      "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredientcategories/smallimages/extras.png",
      "icon": "iExtras",
      "isSingle": 0,
      "isMandatory": 0,
      "defaultIngredientModel": null,
      "ingredientsCollection": [
        {
          "id": 17,
          "title": "Getoasted",
          "description": "",
          "shortTitle": "Getoasted",
          "shortcut": "Toa",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/toasted.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/toasted.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": true
        },
        {
          "id": 18,
          "title": "Extra Belag",
          "description": "",
          "shortTitle": "Extra Belag",
          "shortcut": "DM",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/extrabelag.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/extrabelag.png",
          "price": 1,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 20,
          "title": "Knuspriger Bacon",
          "description": "",
          "shortTitle": "Bacon",
          "shortcut": "Ex Ba",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/bacon.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/bacon.png",
          "price": 0.6,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 26,
          "title": "Extra Scheibenkäse",
          "description": "",
          "shortTitle": "Extra Scheibenkäse",
          "shortcut": "Ex SK",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/cheese/scheibenkaese.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/cheese/scheibenkaese.png",
          "price": 0.3,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 29,
          "title": "Extra Streichkäse",
          "description": "",
          "shortTitle": "Extra Streichkäse",
          "shortcut": "Ex St",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/cheese/streichkaese.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/cheese/streichkaese.png",
          "price": 0.3,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 32,
          "title": "Oregano",
          "description": "",
          "shortTitle": "Oregano",
          "shortcut": "OR",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/oregano.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/oregano.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 33,
          "title": "Salz",
          "description": "",
          "shortTitle": "Salz",
          "shortcut": "SZ",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/salz.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/salz.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 34,
          "title": "Pfeffer",
          "description": "",
          "shortTitle": "Pfeffer",
          "shortcut": "PF",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/pfeffer.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/pfeffer.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 35,
          "title": "Hartkäse gerieben",
          "description": "Geriebener Hartkäse",
          "shortTitle": "Parmesan",
          "shortcut": "Kä",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/parmesan.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/parmesan.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 36,
          "title": "Essig",
          "description": "",
          "shortTitle": "Essig",
          "shortcut": "ES",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/essig.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/essig.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 37,
          "title": "Öl",
          "description": "",
          "shortTitle": "Öl",
          "shortcut": "Öl",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/extras/oel.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/extras/oel.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        }
      ],
      "$$hashKey": "00M"
    },
    {
      "id": 5,
      "title": "Sauce",
      "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredientcategories/smallimages/sauce.png",
      "icon": "iSauce",
      "isSingle": 0,
      "isMandatory": 0,
      "defaultIngredientModel": null,
      "ingredientsCollection": [
        {
          "id": 38,
          "title": "Chipotle Southwest",
          "description": "Herzhaft-scharfe Chilli-Soße",
          "shortTitle": "Chipotle Southwest",
          "shortcut": "CS",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/chipotle.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/chipotle.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 39,
          "title": "Asiago Cesar",
          "description": "Herzhafte Käse-Knoblauch-Soße",
          "shortTitle": "Asiago Cesar",
          "shortcut": "AS",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/asiago.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/asiago.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 40,
          "title": "BBQ-Sauce",
          "description": "Würzig-rauchige BBQ-Sauce",
          "shortTitle": "BBQ-Sauce",
          "shortcut": "BQ",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/barbecue.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/barbecue.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 41,
          "title": "Joghurt-Dressing",
          "description": "Joghurt-Soße",
          "shortTitle": "Joghurt-Dressing",
          "shortcut": "Jo",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/joghurt.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/joghurt.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 42,
          "title": "Sweet Onion",
          "description": "Süße Zwiebelsoße",
          "shortTitle": "Sweet Onion",
          "shortcut": "SO",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/sweetonion.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/sweetonion.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 43,
          "title": "Honey Mustard",
          "description": "Milde Honig-Senf-Soße",
          "shortTitle": "Honey Mustard",
          "shortcut": "HM",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/honeymustard.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/honeymustard.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 44,
          "title": "Lite Mayonaise",
          "description": "Lite Mayonaise - Nur 35% Fett",
          "shortTitle": "Lite Mayonaise",
          "shortcut": "LM",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/litemayonaise.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/litemayonaise.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        },
        {
          "id": 45,
          "title": "Hot Sauce",
          "description": "Feurig scharfe Soße",
          "shortTitle": "Hot Sauce",
          "shortcut": "HOT",
          "smallImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/smallimages/sauces/hotsauce.png",
          "largeImage": "https://s3-eu-west-1.amazonaws.com/sub2home-static/images/ingredients/largeimages/sauces/hotsauce.png",
          "price": 0,
          "isDefault": 0,
          "isSelected": false
        }
      ],
      "$$hashKey": "00N"
    }
  ],
  "$promise": {},
  "$resolved": true,
  "menuUpgradeArticles": [],
  "$$hashKey": "00H"
};

});
