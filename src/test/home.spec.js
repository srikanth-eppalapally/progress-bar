describe('HomeController',function(){
    var controller,scope,location;
    beforeEach(function() {
        module('myApp.home');
    });
    beforeEach(inject(function($injector,_$controller_){
        scope=$injector.get('$rootScope').$new();
        controller=_$controller_('HomeController',{
            $scope:scope
        });
    }));
    it('should define controller',function(){
        expect(controller).toBeDefined();
        expect(typeof controller).toBe("object");
    });



});