function receivesAFunction(callMe){

    return callMe()

}

receivesAFunction(function (){ return 'Here\'s my number, call me'})

function returnsANamedFunction(){

    return function ridiculous(){
        return 'This is interesting'
    }
}

function returnsAnAnonymousFunction(what){

    return function(){
        return 'I do my best work in secret.'
    }

}