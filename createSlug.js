module.exports = function (arg, array) {

    if( typeof arg !== "string" || !arg){
        throw new Error("c'è un problema")
    }

    if(array){

        let counter = 1;

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
    
            if( element.slug === arg ){
                arg = arg.replace(" ", '-').toLowerCase() + counter
                counter++
                return arg
            }
            
        }
    }

    return arg.replace(" ", '-').toLowerCase()
}