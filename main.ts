/**
 * game 0 = title
 * 
 * game 1 = load
 * 
 * game 2 = game thinker
 * 
 * game 3 = game over
 * 
 * game 4 = show score
 * 
 * go back to 0
 */
/**
 * WHY -Y GOES UP???
 * 
 * AND VICE-VERSA!!!
 */
function gameover_jingle () {
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function menu () {
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.ringTone(440)
    basic.pause(750)
    music.ringTone(392)
    basic.pause(1500)
    music.rest(music.beat(BeatFraction.Half))
    music.ringTone(440)
    basic.pause(375)
    music.ringTone(466)
    basic.pause(375)
    music.ringTone(523)
    basic.pause(375)
    music.ringTone(440)
    basic.pause(375)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.ringTone(349)
    basic.pause(1500)
    music.rest(music.beat(BeatFraction.Half))
    music.ringTone(294)
    basic.pause(375)
    music.ringTone(311)
    basic.pause(375)
    music.ringTone(349)
    basic.pause(375)
    music.ringTone(392)
    basic.pause(375)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.ringTone(349)
    basic.pause(625)
    music.rest(music.beat(BeatFraction.Quarter))
    music.ringTone(311)
    basic.pause(750)
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.ringTone(349)
    basic.pause(1500)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (gamestate == 0) {
        basic.clearScreen()
        gamestate = 1
        music.ringTone(523)
        basic.pause(125)
        music.ringTone(440)
        basic.pause(375)
        music.rest(1)
    } else if (gamestate == 2) {
        if (pause2 == 0) {
            pause2 = 1
            pause_sfx()
        } else {
            pause2 = 0
            pause_sfx()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (gamestate == 2) {
        if (snakedir == 6) {
            snakedir = 8
            snakedirx += -1
            snakediry += -1
        } else if (snakedir == 8) {
            snakedir = 4
            snakedirx += -1
            snakediry += 1
        } else if (snakedir == 4) {
            snakedir = 2
            snakedirx += 1
            snakediry += 1
        } else {
            snakedir = 6
            snakedirx += 1
            snakediry += -1
        }
    }
})
function pause_sfx () {
    music.ringTone(988)
    basic.pause(100)
    music.ringTone(784)
    basic.pause(100)
    music.ringTone(988)
    basic.pause(100)
    music.ringTone(784)
    basic.pause(100)
    music.stopAllSounds()
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_EVT_ANY, function () {
    gameover_jingle()
})
input.onPinPressed(TouchPin.P2, function () {
    music.setVolume(music.volume() + 16)
})
input.onButtonPressed(Button.B, function () {
    if (gamestate == 2) {
        if (snakedir == 6) {
            snakedir = 2
            snakedirx += -1
            snakediry += 1
        } else if (snakedir == 2) {
            snakedir = 4
            snakedirx += -1
            snakediry += -1
        } else if (snakedir == 4) {
            snakedir = 8
            snakedirx += 1
            snakediry += -1
        } else {
            snakedir = 6
            snakedirx += 1
            snakediry += 1
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.setVolume(music.volume() - 16)
})
function snake () {
    if (led.pointBrightness(applex, appley) < 16) {
        led.plotBrightness(applex, appley, 16)
    }
    if (snakex == applex && snakey == appley) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P1,
        EventBusValue.MICROBIT_EVT_ANY
        )
        applex = randint(0, 4)
        appley = randint(0, 4)
        led.plotBrightness(applex, appley, 16)
        oldsnakepos.push(snakex)
        oldsnakepos.push(snakey)
    }
    if (!(snakex < 0 || snakex > 4 || (snakey < 0 || snakey > 4))) {
        led.unplot(oldsnakepos.shift(), oldsnakepos.shift())
        snakex += snakedirx
        snakey += snakediry
        oldsnakepos.push(snakex)
        oldsnakepos.push(snakey)
        if (led.pointBrightness(snakex, snakey) != 255) {
            led.plot(snakex, snakey)
        } else {
            gamestate = 3
        }
    } else {
        gamestate = 3
    }
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_EVT_ANY, function () {
    music.ringTone(523)
    basic.pause(100)
    music.ringTone(587)
    basic.pause(100)
    music.ringTone(523)
    basic.pause(300)
    music.rest(1)
})
let sfx = 0
let oldsnakepos: number[] = []
let snakey = 0
let snakex = 0
let appley = 0
let applex = 0
let snakediry = 0
let snakedirx = 0
let snakedir = 0
let pause2 = 0
let gamestate = 0
music.stopAllSounds()
music.setVolume(127)
gamestate = 0
pause2 = 0
basic.forever(function () {
    if (gamestate == 0) {
        basic.showString("SNAKE")
    } else if (gamestate == 1) {
        basic.pause(800)
        snakex = 1
        snakey = 2
        snakedir = 6
        snakediry = 0
        snakedirx = 1
        applex = randint(0, 4)
        appley = randint(0, 4)
        led.plotBrightness(applex, appley, 16)
        oldsnakepos = []
        sfx = 0
        gamestate += 1
    } else if (gamestate == 2) {
        if (pause2 == 0) {
            snake()
            basic.pause(800)
        }
    } else if (gamestate == 3) {
        basic.clearScreen()
        basic.pause(250)
        basic.showLeds(`
            . # # # .
            # . # . #
            . # . # .
            . # # # .
            . # . # .
            `)
        music.ringTone(262)
        basic.pause(250)
        music.ringTone(247)
        basic.pause(125)
        music.ringTone(233)
        basic.pause(250)
        music.ringTone(220)
        basic.pause(125)
        music.ringTone(208)
        basic.pause(250)
        music.ringTone(156)
        basic.pause(34)
        music.rest(68)
        music.ringTone(156)
        basic.pause(273)
        music.ringTone(208)
        basic.pause(125)
        music.ringTone(196)
        basic.pause(750)
        music.ringTone(349)
        basic.pause(33)
        music.ringTone(370)
        basic.pause(33)
        music.ringTone(392)
        basic.pause(184)
        music.rest(1)
        basic.pause(1000)
        gamestate = 4
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P0,
        EventBusValue.MICROBIT_EVT_ANY
        )
        for (let index = 0; index < 3; index++) {
            basic.showNumber((oldsnakepos.length - 2) / 2)
        }
        basic.pause(2000)
        basic.clearScreen()
        gamestate = 0
    }
})
