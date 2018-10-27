import * as React from 'react'


class SolarSystem extends React.Component {
  
  public componentDidMount() {
    
    const sun = new Image()
    const moon = new Image()
    const earth = new Image()


    const canvas: HTMLCanvasElement = document.getElementById('solar-system') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(() => this.draw(ctx, sun, moon, earth));

  }

  public draw(ctx: CanvasRenderingContext2D, sun: HTMLImageElement, moon: HTMLImageElement, earth: HTMLImageElement) {
    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, 300, 300) // 每次清空当前画布再进行重绘
    ctx.save()
    ctx.translate(150, 150)
    
    // draw Earth
    const time = new Date()
    const angle = (Math.PI * 2 / 60) * time.getSeconds() + (Math.PI * 2 / 60000) * time.getMilliseconds()
    ctx.rotate(angle)
    ctx.translate(105, 0)
    ctx.drawImage(earth, -12, -12)
    
    // Moon
    ctx.save()
    const moonAngle = (Math.PI * 2 / 6) * time.getSeconds() + (Math.PI * 2 / 6000) * time.getMilliseconds()
    ctx.rotate(moonAngle) // 先旋转再移动位置，否则绘画的位置并不会因为旋转而改变，而跟地球同步。
    ctx.translate(30, 0)
    
    ctx.drawImage(moon, -4, -4)
    
    ctx.restore()
    ctx.restore()
    ctx.strokeStyle = 'azure'
    ctx.beginPath()
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
    ctx.stroke() 

    ctx.drawImage(sun, 0, 0, 300, 300)
    window.requestAnimationFrame(() => this.draw(ctx, sun, moon, earth))
  }

  public render() {
    return (
      <canvas id="solar-system" width="500" height="500">The browser donot support canvas.</canvas>
    )
  }
}

export default SolarSystem