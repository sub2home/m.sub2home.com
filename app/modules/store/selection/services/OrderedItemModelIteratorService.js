'use strict';

module.exports = ['EntityCheckerService',

  function(EntityCheckerService) {

    return {

      _orderedItemModel: null,
      _currentOrderedArticleModelIndex: null,
      _currentIngredientCategoryModelIndex: null,
      _currentEntity: null,
      _currentType: null,

      init: function(orderedItemModel) {
        this._orderedItemModel = orderedItemModel;
        this._currentOrderedArticleModelIndex = 0;
        this._currentIngredientCategoryModelIndex = 0;
        this._adjust();
      },

      next: function() {

        if (!EntityCheckerService.isCompled(this._currentEntity)) {
          return;
        }

        var orderedArticleModel = this._orderedItemModel.orderedArticlesCollection[this._currentOrderedArticleModelIndex];
        var numberOfIngredientCategoryModels = orderedArticleModel.articleModel.ingredientCategoriesCollection.length;

        if (this._currentIngredientCategoryModelIndex === numberOfIngredientCategoryModels - 1) {
          this._currentOrderedArticleModelIndex++;
          this._currentIngredientCategoryModelIndex = 0;
        } else {
          this._currentIngredientCategoryModelIndex++;
        }

        this._adjust();

      },

      prev: function() {

        var orderedArticleModel = this._orderedItemModel.orderedArticlesCollection[this._currentOrderedArticleModelIndex];
        var numberOfIngredientCategoryModels = orderedArticleModel.articleModel.ingredientCategoriesCollection.length;

        if (this._currentIngredientCategoryModelIndex === 0) {
          this._currentOrderedArticleModelIndex--;
          this._currentIngredientCategoryModelIndex = numberOfIngredientCategoryModels - 1;
        } else {
          this._currentIngredientCategoryModelIndex--;
        }

        this._adjust();

      },

      getEntity: function() {
        return this._currentEntity;
      },

      getType: function() {
        return this._currentType;
      },

      jumpToEntity: function(entity) {

        if (!EntityCheckerService.isCompled(this._currentEntity)) {
          return;
        }

        for (var orderedArticleModelIndex = 0; orderedArticleModelIndex < this._orderedItemModel.orderedArticlesCollection.length; ++orderedArticleModelIndex) {

          var orderedArticleModel = this._orderedItemModel.orderedArticlesCollection[orderedArticleModelIndex];
          var ingredientCategoriesCollection = orderedArticleModel.articleModel.ingredientCategoriesCollection;

          for (var ingredientCategoryModelIndex = 0; ingredientCategoryModelIndex < ingredientCategoriesCollection.length; ++ingredientCategoryModelIndex) {
            if (entity === ingredientCategoriesCollection[ingredientCategoryModelIndex]) {
              this._currentOrderedArticleModelIndex = orderedArticleModelIndex;
              this._currentIngredientCategoryModelIndex = ingredientCategoryModelIndex;
            }
          }
        }

        this._adjust();

      },

      _adjust: function() {

        var orderedArticleModel = this._orderedItemModel.orderedArticlesCollection[this._currentOrderedArticleModelIndex];

        this._currentEntity = orderedArticleModel.articleModel.ingredientCategoriesCollection[this._currentIngredientCategoryModelIndex];
        this._currentType = 'ingredient';

      },

    };

  }
];
