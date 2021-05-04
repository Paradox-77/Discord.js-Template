function getTime() {
    let time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm

    // if(hours > 12) {
    //     ampm = "PM"
    // } else {
    //     ampm = "AM"
    // }

    ampm = hours > 12 ? ampm = "PM" : "AM"

    hours = hours > 12 ? hours - 12 : hours

    hours = hours < 10 ? `0${hours}` : hours

    seconds = seconds < 10 ? `0${seconds}` : seconds

    time = `${hours}:${minutes}:${seconds} ${ampm}`

    return time
}

module.exports = getTime;