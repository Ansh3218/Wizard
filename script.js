function myfunction(){
   let tl = gsap.timeline();

   tl.from('nav h1, nav h4, nav button',{
       y: -40,
       duration: 1,
       delay: .4,
       opacity: 0,
       stagger: 0.15 
   })
   tl.from('.center-part1 h1',{
      x: -300,
      opacity: 0,
      duration: 0.8,
   })
   tl.from('.center-part1 p',{
      x: -100,
      opacity: 0,
      duration: 0.8,
   })
   tl.from('.center-part1 button',{
      opacity: 0,
      duration: 0.8,
   })
   tl.from('.center-part2 img',{
      opacity: 0,
      duration: 0.4,
   },"-=2")
   tl.from('.section1bottom img',{
      opacity: 0,
      y: 30,
      stagger:0.15,
      duration: 0.4
   })
}
myfunction();

let tl2 = gsap.timeline({
   scrollTrigger:{
      trigger: '.section2',
      scroller: 'body',
      start: 'top 50%',
      end: 'top 0',
      scrub: 3,
   }
})
tl2.from('.services',{
    y: 50,
    opacity: 0,
    duration: .1
})
tl2.from('.elem.line1.left',{
   x: -300,
   opacity: 0,
   duration:2
},'anime1')
tl2.from('.elem.line1.right',{
   x: 300,
   opacity: 0,
   duration:2
},'anime1')

tl2.from('.elem.line2.left',{
   x:-300,
   opacity: 0,
   duration: 2
},'anime2')
tl2.from('.elem.line2.right',{
   x: 300,
   opacity: 0,
   duration: 2
},'anime2')
tl2.from('.elem.line2.left1',{
   x:-300,
   opacity: 0,
   duration: 2
},'anime2')
tl2.from('.elem.line2.right2',{
   x: 300,
   opacity: 0,
   duration: 2
},'anime2')