'use strict';

tutorialApp.controller('ModalCtrl', function($scope, $modal) {

  $scope.viaService = function() {
    // do something
    var modal = $modal({
      template: '/modal.html',
      show: true,
      backdrop: 'static',
      scope: $scope
    });
  }
  $scope.parentController = function(dismiss) {
    console.warn(arguments);
    // do something
    dismiss();
  }

});

