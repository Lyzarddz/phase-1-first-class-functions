function receivesAFunction(callMe){
    return callMe();
}

function returnsANamedFunction(){
    return function IAmNamed() {};
}

function returnsAnAnonymousFunction(){
    return function() {};
}
