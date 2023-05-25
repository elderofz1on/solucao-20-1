HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
basic.forever(function () {
    HackbitOLEDDisplay.writeStringNewLine("Estacao Meteorologica")
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    basic.pause(2000)
    HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.temperature))
    basic.pause(5000)
    HackbitOLEDDisplay.clear()
})
