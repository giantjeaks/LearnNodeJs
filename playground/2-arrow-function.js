// 21. ES6 Aside: Arrow function
// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x
// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','John','Mike'],
    printGuestList(){
        const that = this
        console.log('Guest list for ' + that.name)
        this.guestList.forEach( (guest) => {
            console.log(guest + 'is attending ' + that.name);
        })
    }
}

event.printGuestList()