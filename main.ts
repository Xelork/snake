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
/**
 * snakedir:
 * 
 * 6 = right
 * 
 * 8 = up
 * 
 * 4 = left
 * 
 * 2 = down
 * 
 * just like the numpad!
 */
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
    if (game2 == 0) {
        game2 = 1
        music.ringTone(523)
        basic.pause(125)
        music.ringTone(440)
        basic.pause(375)
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.A, function () {
    if (game2 == 2) {
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
input.onPinPressed(TouchPin.P2, function () {
    music.setVolume(music.volume() + 16)
})
input.onButtonPressed(Button.B, function () {
    if (game2 == 2) {
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
    snakex += snakedirx
    snakey += snakediry
    led.plot(snakex, snakey)
}
let snakey = 0
let snakex = 0
let snakedirx = 0
let snakediry = 0
let snakedir = 0
let game2 = 0
music.stopAllSounds()
music.setVolume(127)
game2 = 0
snakedir = 6
snakediry = 0
snakedirx = 1
let pause2 = 0
basic.forever(function () {
    if (game2 == 0) {
    	
    } else if (game2 == 1) {
        basic.pause(800)
        led.plot(1, 2)
        snakex = 1
        snakey = 2
        game2 += 1
    } else {
    	
    }
})
control.inBackground(function () {
	
})
loops.everyInterval(800, function () {
    if (game2 == 2) {
        snake()
    }
})
