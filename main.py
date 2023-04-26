"""

game 0 = title

game 1 = load

game 2 = game thinker

game 3 = game over

game 4 = show score

go back to 0

"""
def menu():
    music.play_tone(466, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(466, music.beat(BeatFraction.WHOLE))
    music.ring_tone(440)
    basic.pause(750)
    music.ring_tone(392)
    basic.pause(1500)
    music.rest(music.beat(BeatFraction.HALF))
    music.ring_tone(440)
    basic.pause(375)
    music.ring_tone(466)
    basic.pause(375)
    music.ring_tone(523)
    basic.pause(375)
    music.ring_tone(440)
    basic.pause(375)
    music.play_tone(392, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.HALF))
    music.ring_tone(349)
    basic.pause(1500)
    music.rest(music.beat(BeatFraction.HALF))
    music.ring_tone(294)
    basic.pause(375)
    music.ring_tone(311)
    basic.pause(375)
    music.ring_tone(349)
    basic.pause(375)
    music.ring_tone(392)
    basic.pause(375)
    music.play_tone(294, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.ring_tone(349)
    basic.pause(625)
    music.rest(music.beat(BeatFraction.QUARTER))
    music.ring_tone(311)
    basic.pause(750)
    music.play_tone(466, music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.HALF))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.HALF))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.play_tone(392, music.beat(BeatFraction.HALF))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.play_tone(392, music.beat(BeatFraction.HALF))
    music.ring_tone(349)
    basic.pause(1500)

def on_logo_pressed():
    global game2
    if game2 == 0:
        game2 = 1
        music.ring_tone(523)
        basic.pause(125)
        music.ring_tone(440)
        basic.pause(375)
        music.stop_all_sounds()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    global snakedir, snakedirx, snakediry
    if game2 == 2:
        if snakedir == 6:
            snakedir = 8
            snakedirx += -1
            snakediry += 1
        elif snakedir == 8:
            snakedir = 4
            snakedirx += -1
            snakediry += -1
        elif snakedir == 4:
            snakedir = 2
            snakedirx += 1
            snakediry += -1
        else:
            snakedir = 6
            snakedirx += 1
            snakediry += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    music.set_volume(music.volume() + 16)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    global snakedirx
    if game2 == 2:
        snakedirx += 1
        snakedirx += 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    music.set_volume(music.volume() - 16)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def snake():
    global snakedirx
    snakedirx += 1
    led.plot(0, 0)
snakex = 0
snakedir = 0
game2 = 0
music.stop_all_sounds()
music.set_volume(127)
game2 = 0
snakedir = 6
snakediry = 0
snakedirx = 1
pause2 = 0

def on_forever():
    global snakex, game2
    if game2 == 0:
        basic.show_string("SNAKE")
    elif game2 == 1:
        basic.pause(3000)
        led.plot(1, 2)
        snakex = 1
        snakex = 2
        game2 += 1
    else:
        pass
basic.forever(on_forever)

def on_in_background():
    pass
control.in_background(on_in_background)
