scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......fd1111111f.......
    ......fdd1111111df......
    ......fddd111111df......
    ......fdddddd111df......
    ......fbddddbfd1df......
    ......fcbbbdcfddbf......
    .......fcbb11111f.......
    ........fffff1b1f.......
    ........fb111cfbf.......
    ........ffb1b1ff........
    ......f.fffbfbf.........
    ......ffffffff..........
    .......fffff............
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite)
