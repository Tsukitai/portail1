basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
})
