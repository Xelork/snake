"""

WHY -Y GOES UP???

AND VICE-VERSA!!!

"""
"""

game 0 = title

game 1 = load

game 2 = game thinker

game 3 = game over

game 4 = show score

go back to 0

"""
def gameover_jingle():
    music.play_tone(175, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(175, music.beat(BeatFraction.QUARTER))
    music.play_tone(196, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(196, music.beat(BeatFraction.QUARTER))
    music.play_tone(220, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.QUARTER))
    music.play_tone(220, music.beat(BeatFraction.QUARTER))
    music.play_tone(247, music.beat(BeatFraction.QUARTER))
    music.play_tone(220, music.beat(BeatFraction.QUARTER))
    music.play_tone(196, music.beat(BeatFraction.QUARTER))
    music.play_tone(262, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(196, music.beat(BeatFraction.QUARTER))
    music.play_tone(131, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
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
    global gamestate, pause2
    if gamestate == 0:
        basic.clear_screen()
        gamestate = 1
        music.ring_tone(523)
        basic.pause(125)
        music.ring_tone(440)
        basic.pause(375)
        music.rest(1)
    elif gamestate == 2:
        if pause2 == 0:
            pause2 = 1
            pause_sfx()
        else:
            pause2 = 0
            pause_sfx()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    global snakedir, snakedirx, snakediry
    if gamestate == 2:
        if snakedir == 6:
            snakedir = 8
            snakedirx += -1
            snakediry += -1
        elif snakedir == 8:
            snakedir = 4
            snakedirx += -1
            snakediry += 1
        elif snakedir == 4:
            snakedir = 2
            snakedirx += 1
            snakediry += 1
        else:
            snakedir = 6
            snakedirx += 1
            snakediry += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def pause_sfx():
    music.ring_tone(988)
    basic.pause(100)
    music.ring_tone(784)
    basic.pause(100)
    music.ring_tone(988)
    basic.pause(100)
    music.ring_tone(784)
    basic.pause(100)
    music.stop_all_sounds()

def on_pin_pressed_p2():
    music.set_volume(music.volume() + 16)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    global snakedir, snakedirx, snakediry
    if gamestate == 2:
        if snakedir == 6:
            snakedir = 2
            snakedirx += -1
            snakediry += 1
        elif snakedir == 2:
            snakedir = 4
            snakedirx += -1
            snakediry += -1
        elif snakedir == 4:
            snakedir = 8
            snakedirx += 1
            snakediry += -1
        else:
            snakedir = 6
            snakedirx += 1
            snakediry += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    music.set_volume(music.volume() - 16)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def snake():
    global sfx, applex, appley, snakex, snakey, gamestate
    if led.point_brightness(applex, appley) < 32:
        led.plot_brightness(applex, appley, 32)
    if snakex == applex and snakey == appley:
        sfx = 1
        applex = randint(0, 4)
        appley = randint(0, 4)
        led.plot_brightness(applex, appley, 32)
        oldsnakepos.append(snakex)
        oldsnakepos.append(snakey)
    if not (snakex < 0 or snakex > 4 or (snakey < 0 or snakey > 4)):
        led.unplot(oldsnakepos.shift(), oldsnakepos.shift())
        snakex += snakedirx
        snakey += snakediry
        oldsnakepos.append(snakex)
        oldsnakepos.append(snakey)
        if led.point_brightness(snakex, snakey) != 255:
            led.plot(snakex, snakey)
        else:
            gamestate = 3
    else:
        gamestate = 3
oldsnakepos: List[number] = []
sfx = 0
snakey = 0
snakex = 0
appley = 0
applex = 0
snakediry = 0
snakedirx = 0
snakedir = 0
pause2 = 0
gamestate = 0
# snakedir:
# 
# 6 = right
# 
# 8 = up
# 
# 4 = left
# 
# 2 = down
# 
# just like the numpad!
music.ring_tone(988)
music.stop_all_sounds()
music.set_volume(127)
gamestate = 0
pause2 = 0

def on_forever():
    global snakex, snakey, snakedir, snakediry, snakedirx, applex, appley, oldsnakepos, sfx, gamestate
    if gamestate == 0:
        basic.show_string("SNAKE")
    elif gamestate == 1:
        basic.pause(800)
        snakex = 1
        snakey = 2
        snakedir = 6
        snakediry = 0
        snakedirx = 1
        applex = randint(0, 4)
        appley = randint(0, 4)
        led.plot_brightness(applex, appley, 64)
        oldsnakepos = []
        sfx = 0
        gamestate += 1
    elif gamestate == 2:
        if pause2 == 0:
            snake()
            if sfx == 1:
                sfx = 0
                music.ring_tone(523)
                basic.pause(100)
                music.ring_tone(587)
                basic.pause(100)
                music.ring_tone(523)
                basic.pause(300)
                music.rest(1)
            basic.pause(800)
    elif gamestate == 3:
        basic.clear_screen()
        basic.pause(250)
        basic.show_leds("""
            . # # # .
                        # . # . #
                        . # . # .
                        . # # # .
                        . # . # .
        """)
        music.ring_tone(262)
        basic.pause(250)
        music.ring_tone(247)
        basic.pause(125)
        music.ring_tone(233)
        basic.pause(250)
        music.ring_tone(220)
        basic.pause(125)
        music.ring_tone(208)
        basic.pause(250)
        music.ring_tone(156)
        basic.pause(34)
        music.rest(68)
        music.ring_tone(156)
        basic.pause(273)
        music.ring_tone(208)
        basic.pause(125)
        music.ring_tone(196)
        basic.pause(750)
        music.ring_tone(349)
        basic.pause(33)
        music.ring_tone(370)
        basic.pause(33)
        music.ring_tone(392)
        basic.pause(184)
        music.rest(1)
        basic.pause(1000)
        gamestate = 4
    else:
        basic.show_number((len(oldsnakepos) - 2) / 2)
        basic.pause(2000)
        basic.clear_screen()
        gamestate = 0
basic.forever(on_forever)

def on_in_background():
    pass
control.in_background(on_in_background)
