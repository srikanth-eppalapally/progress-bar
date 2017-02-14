angular.module('myApp.shared', [])
    .directive('progressBar', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            scope: {
                value: '=',
                limit:'='
            },
            bindToController: true,
            controller:ProgressBarController,
            controllerAs:'vm',
            template:'<div class="progress-wrapper"><div class="progressbar" ng-style="vm.progressStyle()"></div><span>{{vm.value}}</span></div>',
            link: function (scope, element, attr) {
            }
        };
    }]);

    function ProgressBarController(){
         var vm = this;
         vm.progressStyle = progressStyle;

        function progressStyle() {
            console.log(vm.value , vm.limit, vm.value / vm.limit)
            var total = ((vm.value / vm.limit) * 100).toString() + '%';
            var style = {
                'width': total,
                'background-color':'#337ab7'
            };
            if((vm.value / vm.limit) * 100 > 100){
                style['background-color'] = 'red';
            }
            return style;
        }
    }