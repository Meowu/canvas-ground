import * as React from 'react'


class Shape extends React.Component {

  public componentDidMount() {
    const canvas: HTMLCanvasElement = document.getElementById('shape') as HTMLCanvasElement

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

    ctx.fillStyle = 'pink'
    ctx.fillRect(10, 10, 100, 60)

    ctx.fillStyle = 'orange'
    ctx.fillRect(100, 60, 100, 60)


    ctx.strokeStyle = 'azure'
    ctx.strokeRect(90, 60, 20, 20)

    ctx.beginPath()
    ctx.moveTo(100, 120)
    ctx.lineTo(120, 150)
    ctx.lineTo(80, 150)
    ctx.fill()

    const p = new Path2D("M10 10 h 80 v 80 h -80 Z")

    ctx.strokeStyle = 'MAROON'
    ctx.stroke(p)

    this.drawSmile(ctx)
    this.roundedRect(ctx, 360, 360, 200, 150, 10)

  }

  public drawSmile(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(240, 200, 60, 0, Math.PI*2, true)
    const mouthStartPoint = this.getCoordinate(240, 220, 20, 15)
    const mouthEndPoint = this.getCoordinate(240, 220, 20, 165)
    ctx.moveTo(mouthStartPoint.x, mouthStartPoint.y)
    ctx.arc(240, 220, 20, Math.PI / 180 * 15, Math.PI / 180 * 165, false)
    ctx.strokeStyle = 'OLIVE'
    ctx.moveTo(mouthStartPoint.x + 5, mouthStartPoint.y - 50)
    ctx.arc(mouthStartPoint.x, mouthStartPoint.y - 50, 5, 0, Math.PI*2, false)
    ctx.moveTo(mouthEndPoint.x + 5, mouthEndPoint.y - 50)
    ctx.arc(mouthEndPoint.x, mouthEndPoint.y - 50, 5, 0, Math.PI*2, false)
    ctx.stroke()
  }

  // 已知圆心，半径，求圆上任意弧度的一点。
  public getCoordinate(x: number, y: number, radius: number, arc: number) {
    const x1 = x + radius * Math.cos(arc * 3.14 / 180)
    const y1 = y + radius * Math.sin(arc * 3.14 / 180)
    return {
      x: x1, y: y1
    }
  }

  public roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height, x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
  }

  public render() {
    return (
      <canvas id="shape" width="800" height="600" />
    )
  }
}

export default Shape