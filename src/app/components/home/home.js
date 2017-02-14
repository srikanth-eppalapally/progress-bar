angular.module('myApp.home', [])
    .controller('HomeController', HomeController);
HomeController.$injector = ['$scope']

function HomeController($scope) {
        var vm = this;
        vm.barsList = [];
        vm.selectedIndex = 0;
        vm.selectProgressBar = selectProgressBar;
        vm.changeProgressBarValue = changeProgressBarValue;
        vm.endPoint = {
            "buttons": [
                10,
                38,
                -13,
                -18
            ],
            "bars": [
                62,
                45,
                62
            ],
            "limit": 230
        };
    angular.forEach(vm.endPoint.bars, function(val, i){
        var obj = {};
        obj.id = i;
        obj.value = val;
        obj.name = "Progressbar"+(i+1);
        vm.barsList.push(obj);

    });


    vm.selectedProgressBar = vm.barsList[0];

    function changeProgressBarValue(value){
        vm.endPoint.bars[vm.selectedIndex] += value;
    }

    function selectProgressBar(){
        console.log('401', vm.selectedProgressBar );
        vm.selectedIndex = vm.selectedProgressBar.id;
    }

}