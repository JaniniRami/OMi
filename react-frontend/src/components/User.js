var User = (function() {

    var id = "";

    var getId = function(){
        return id;
    };

    var setId = function(ID){
        id = ID;
    };

    return {
        getId: getId,
        setId: setId
    }

})();

export default User;