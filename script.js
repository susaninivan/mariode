const player = document.getElementById("player")
const damper = document.getElementById("damper")
const btn = document.querySelector(".start")

let isStart = false;


const activeJump = function () {
    if (isStart === true) {

        if (!player.classList.contains("active")) {
            player.classList.add("active")
        }
        setTimeout(function () {
            player.classList.remove("active")
        }, 300)

        console.log("jump")
    }


}


const startGame = function () {
    isStart = true
    // 
    damper.classList.add('animate')

    setInterval(function () {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
        let damperLeft = parseInt(window.getComputedStyle(damper).getPropertyValue("left"))

        if (damperLeft < 50 && damperLeft > 0 && playerTop >= 140) {
            endGame()
        }
    }, 10)

}

const endGame = function () {
    isStart = false
    console.log("end")
    damper.classList.remove('animate')
    alert("GAME OVER!")
}

document.addEventListener('keydown', activeJump)


btn.addEventListener('click', function () {
    startGame()
})