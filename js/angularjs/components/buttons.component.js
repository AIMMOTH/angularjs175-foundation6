
com.github.aimmoth.app.component("buttons", {
  templateUrl : "js/angularjs/components/buttons.template.html",
  controllerAs: "controller",
  controller : ["$scope", function($scope) {

    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }
  ]
});