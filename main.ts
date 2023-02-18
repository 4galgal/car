let distance = 0
let _break = 0
let num = 0
input.onButtonPressed(Button.A, function () {
    distance = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    basic.pause(500)
    while (_break == 0) {
        if (distance > 7) {
            num += 1
            pins.servoWritePin(AnalogPin.P8, 175 * num)
            pins.servoWritePin(AnalogPin.P12, 180 * num)
            pins.servoWritePin(AnalogPin.P13, 180 * num)
            pins.servoWritePin(AnalogPin.P14, 180 * num)
        } else {
            _break += 1
        }
    }
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        . # . . #
        . # # # #
        `)
})
