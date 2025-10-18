input.onButtonPressed(Button.A, function () {
    if (true) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("C5 C5 B B A A G G ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
