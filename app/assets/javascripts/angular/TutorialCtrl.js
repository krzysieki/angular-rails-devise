'use strict';

tutorialApp.controller('TutorialCtrl',
    function TutorialCtrl($scope, $timeout) {

        var promise = $timeout(function() {
            $scope.button = '<br/><div class="modal-footer"><a href="/users" class="btn btn-danger pull-left" data-confirm="Are you absolutely sure?" data-method="delete" rel="nofollow">Cancel My Account</a><a href="/users/edit" class="btn btn-primary">Close</a></div>';
        }, 17000);

    }
);

