'use strict';

module.exports = ['$scope', 'orderedItemModel', '$window', 'EntityIteratorService', '$timeout', 'TrayStorageService', 'RoutingService', '$document', '_', 'NotificationService',

  function($scope, orderedItemModel, $window, EntityIteratorService, $timeout, TrayStorageService, RoutingService, $document, _, NotificationService) {
    var getAllArticles = function(entity) {
      var all = [];
      if (entity.menuComponentOptionsCollection) {
        _.forEach(entity.menuComponentOptionsCollection, function(optionCollection) {
          all = _.union(all, optionCollection.menuComponentOptionArticlesCollection);
        });
      } else {
        if (entity.menuComponentOptionArticlesCollection) {
          all = entity.menuComponentOptionArticlesCollection;
        }
      }

      return all;
    };

    var isOneSelected = function(all) {
      var result = false;
      _.forEach(all, function(item) {
        if (item.isSelected) {
          result = true;
        }
      });

      return result;
    };



    EntityIteratorService.init(orderedItemModel);

    $scope.back = function() {
      $window.history.back();
    };

    $scope.numberOfItems = TrayStorageService.getAllItems().length;

    $scope.selectIngredient = function(ingredientModel) {

      var newIsSelected = !ingredientModel.isSelected;

      var numberOfSelectedIngredients = $scope.entity.ingredientsCollection.reduce(function(sum, model) {
        return sum + model.isSelected;
      }, 0);

      if ($scope.entity.isMandatory && numberOfSelectedIngredients <= 1 && !newIsSelected) {
        return;
      }

      if ($scope.entity.isSingle && numberOfSelectedIngredients > 0) {
        $scope.entity.ingredientsCollection.forEach(function(model) {
          model.isSelected = false;
        });
      }

      ingredientModel.isSelected = newIsSelected;

      if ($scope.entity.isMandatory) {
        $scope.showNextButton = true;
      }
    };

    $scope.showNextButton = true;

    $scope.next = function() {

      EntityIteratorService.next().then(function(next) {
        if (next) {
          updateScope();
        }
      });
    };

    //$scope.prev = function() {
    //EntityIteratorService.prev();
    //updateScope();
    //};

    $scope.jumpToEntity = function(entity) {
      if (entity.passed) {
        EntityIteratorService.jumpToEntity(entity).then(function() {
          updateScope();
        });
      }
    };

    $scope.goToTray = function() {
      var orderedItem = EntityIteratorService.getOrderedItemModel();

      if (orderedItem.articlesCollection.length > 1) {
        // menu
        TrayStorageService.saveMenuItem(orderedItem);
        NotificationService.setTrayNotification(orderedItem.menuBundleModel.title);
      } else {
        orderedItem = orderedItem.articlesCollection[0];

        if (orderedItem.menuUpgradeArticles.length > 0) {
          //menuUpgrade
          var tmp = {};
          tmp.savedArticle = orderedItem;
          orderedItem = {};
          orderedItem.menuBundleModel = {};
          orderedItem.articlesCollection = [tmp].concat(tmp.savedArticle.menuUpgradeArticles);
          orderedItem.menuBundleModel.title = 'Menü';
          NotificationService.setTrayNotification(orderedItem.menuBundleModel.title);
          orderedItem.menuUpgradePrice = true;
          TrayStorageService.saveMenuItem(orderedItem);
        } else {
          // sub
          TrayStorageService.saveSubItem(orderedItem);
          NotificationService.setTrayNotification(orderedItem.title);
        }
      }
      RoutingService.navigate(':storeAlias');
    };


    $scope.upgrade = function(menu) {
      angular.forEach($scope.articleModel.menuUpgradesCollection, function(upgrade) {
        if (menu === upgrade) {
          upgrade.isSelected = true;
        }
      });

      $scope.next();
    };

    $scope.$on('selectItem', function(event, itemModel) {
      var all = getAllArticles($scope.entity);

      if (!itemModel.isSelected) {
        _.forEach(all, function(model) {
          model.isSelected = false;
        });

        itemModel.isSelected = !itemModel.isSelected;
      }

      $timeout(function() {
        $scope.next();
      }, 750);

    });



    var updateTimeline = function() {
      $scope.timelineArticleCollection = EntityIteratorService.getEntityCollection();
    };

    var updateScope = function() {

      $scope.orderedArticlesCollection = orderedItemModel.orderedArticlesCollection;
      $scope.menuModel = EntityIteratorService.getMenu();

      EntityIteratorService.getArticle().then(function(article) {
        $scope.articleModel = article;
        if ($scope.menuModel === $scope.articleModel.title || $scope.menuModel === '') {
          $scope.setTwoLineHeader = false;
        } else {
          $scope.setTwoLineHeader = true;
        }
      });




      EntityIteratorService.getNextEntity().then(function(nextEntity) {
        // checks whether the next step is the tray or not
        if (!nextEntity) {
          $scope.toTray = true;
          //var someElement = angular.element(document.getElementById('toNextStep'));
          //window.scrollTo(0, someElement[0].offsetTop);
          //$document.scrollToElement(someElement);
        } else {
          $scope.toTray = false;
          $scope.nextStep = nextEntity;
        }


      });

      EntityIteratorService.getEntity().then(function(entity) {
        $scope.entity = entity;

        $scope.entity.passed = true;
        // shows or hides the next button

        var all = getAllArticles($scope.entity);
        if (all.length > 0) {
          if (!isOneSelected(all)) {
            $scope.showNextButton = false;
          }
        } else {
          if ($scope.entity.isMandatory && !isOneSelected($scope.entity.ingredientsCollection)) {
            $scope.showNextButton = false;
          } else {
            $scope.showNextButton = true;
          }
        }

        // if the entity is the menu
        if (entity instanceof Array) {
          $scope.noUpgrade = true;
        } else {
          $scope.noUpgrade = false;
        }
      });

      EntityIteratorService.getType().then(function(type) {
        $scope.type = type;
      });

      updateTimeline();

    };

    updateScope();

  }
];
