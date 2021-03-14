
export const randomString = _ => {
    const from = randomNumber()   
    const to = Math.abs( from - randomNumber() )   

    if ( from >= to ) {
        return randomString()
    }

    return Math.random().toString( from ).substring( to )
}

export const randomNumber = _ => {
    return Math.floor((Math.random() * 36) + 2);
}
