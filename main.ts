let animal = 0
input.onButtonPressed(Button.A, function () {
    animal = randint(0, 3)
    if (0 == animal) {
        basic.showIcon(IconNames.StickFigure)
    } else if (1 == animal) {
        basic.showIcon(IconNames.Giraffe)
    } else if (2 == animal) {
        basic.showIcon(IconNames.EigthNote)
    } else if (3 == animal) {
        basic.showIcon(IconNames.Scissors)
    }
})
