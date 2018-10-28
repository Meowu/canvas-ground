import * as React from 'react'

class CanvasState extends React.Component {

  public componentDidMount() {

    
    const canvas: HTMLCanvasElement = document.getElementById('canvas-state') as HTMLCanvasElement

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    
    ctx.fillRect(0, 0, 200, 200)
    ctx.save()  // 保存状态 1
    
    ctx.fillStyle = '#09f'
    ctx.rect(20, 20, 160, 160)
    ctx.fill()
    ctx.save() // 保存状态 2
    
    ctx.fillStyle = '#FFF'
    ctx.globalAlpha = 0.5
    ctx.fillRect(40, 40, 120, 120)
    
    ctx.restore() // 恢复到状态 2, 此时的 fillStyle 是 '#09f'
    // ctx.restore()
    ctx.fillRect(60, 60, 80, 80)
    
    ctx.restore() // 恢复到状态 1, 此时的 fillStyle 是默认值 '#000'
    ctx.fillRect(80, 80, 40, 40)
    
    this.drawRect(ctx, 240, 240)
    this.drawCircle(ctx, 500, 500)
    
  }
  public drawRect(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // ctx.translate(x, y)
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save()
        const color = `rgb(${51 * i}, ${255 - 51 * i}, 255)`
        ctx.fillStyle = color
        ctx.translate(x + i * 60, y + j * 60)
        ctx.fillRect(0, 0, 30, 30)
        ctx.restore()
      }
    }
  }

  public drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.translate(x, y)
    for (let i = 1; i < 6; i++) {
      ctx.save()
      ctx.fillStyle = `rgb(${48*i}, ${255 - 48*i}, 255)`
      for (let j = 0; j < i * 6; j++) {
        const angle = (Math.PI*2 / (i*6))
        ctx.rotate(angle)
        ctx.beginPath()  // 务必要调用这个方法来重置位置。
        ctx.arc(0, i * 15, 5, 0, Math.PI*2, true)
        ctx.fill()
      }
      ctx.restore()
    }
  }

  public render() {
    return (
      <canvas width="500" height="500" id="canvas-state" />
    )
  }
}

export default CanvasState