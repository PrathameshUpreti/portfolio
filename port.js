var t1 = gsap.timeline()
t1.from("#lines h1 ", {
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.4
})
t1.from("#wait-text", {
    y: 150,

    duration: 0.6
})
t1.from("#line-part1,#lines h2 ", {
    opacity: 0,
    delay: 0.4,
    onStart: function() {
        var h5timer = document.querySelector("#line-part1 h5")
        var grow = 0
        setInterval(function() {
            if (grow < 100) {
                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow
            }
        }, 33)
    }
})
t1.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4
})
t1.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    ease: Power4


})
t1.to("#loader", {
    display: "none"
})