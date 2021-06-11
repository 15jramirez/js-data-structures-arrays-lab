// Write your solution here!
const drivers = [`Milo`,`Otis`, `Garfield`]

function destructivelyAppendDriver(name){
    drivers.push(name)
    //another way to append to driver
    // drivers.splice(drivers.length, 0, name)
    // we use length NOT length-1 as want to add at the end of array.

}

function destructivelyPrependDriver(name){
    drivers.unshift(name)

    //another way to prepend driver
    // driver.splice(0,0, name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()

    // another way to remove destrucitve
    /*
     drivers.splice(drivers.length-1,1)
     this would return the array with just the omitted. if wanted to grab
     element removed, need to assign to another variable
    */
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    let newDrivers = [...drivers.slice(0), name]
    return newDrivers
}

function prependDriver(name){
    let prependNewDrivers = [name, ... drivers.slice(0)]
    return prependNewDrivers
}

function removeLastDriver(){
    let lastDriverRemoved = drivers.slice(0,drivers.length-1)
    return lastDriverRemoved
}

function removeFirstDriver(){
    let firstRemovedDriver = drivers.slice(1)
    return firstRemovedDriver
}