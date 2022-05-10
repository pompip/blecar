function carRun (数字: number, mode: number, 数字2: number, mode2: number) {
    let buf = pins.createBuffer(5);
buf[0] = 2
    if (mode2 == 1) {
        buf[1] = 数字2 * 28
        buf[2] = 0
    } else {
        buf[1] = 0
        buf[2] = 数字2 * 28
    }
    if (mode == 1) {
        buf[3] = 数字 * 28
        buf[4] = 0
    } else {
        buf[3] = 0
        buf[4] = 数字 * 28
    }
    pins.i2cWriteBuffer(0x01, buf);
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    carRun(0, 0, 0, 0)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    speed1 = parseFloat(data.charAt(0))
    mode = parseFloat(data.charAt(1))
    speed2 = parseFloat(data.charAt(2))
    mode2 = parseFloat(data.charAt(3))
    carRun(speed1, mode, speed2, mode2)
})
let mode2 = 0
let speed2 = 0
let mode = 0
let speed1 = 0
let data = ""
bluetooth.startUartService()
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # . . .
    . # . . .
    `)
basic.forever(function () {
	
})
