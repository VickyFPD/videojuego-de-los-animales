radio.onReceivedNumber(function (receivedNumber) {
    animal += randint(0, 3)
    if (animal == 0) {
        basic.showIcon(IconNames.StickFigure)
    }
    if (animal == 1) {
        basic.showIcon(IconNames.Giraffe)
    }
    if (animal == 2) {
        basic.showIcon(IconNames.EigthNote)
    }
    if (animal == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
let animal = 0
radio.setGroup(0)
basic.forever(function () {
    radio.sendNumber(0)
    animal = randint(0, 3)
    basic.pause(2000)
})
