import * as React from 'react'


class MessageBox extends React.Component {
  
  public componentDidMount() {
    
    const canvas: HTMLCanvasElement = document.getElementById('msg-box') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    
    this.renderBox(ctx, 10, 10, 100, 30, 2)
    
    ctx.font = '14px serif'
    ctx.fillText('今晚回家吃饭', 15, 30, 100)
    
    
    // 另一种计算文本宽度的方法。
    ctx.font = '24px serif'
    const text = ctx.measureText('今晚回家吃饭')
    console.log(text.width)
  }
  public renderBox(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + height / 2 + 4)
    ctx.lineTo(x - Math.sqrt(8**2 - 4**2), y + height / 2 - 2)
    ctx.lineTo(x, y + height / 2 - 8)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    
    ctx.strokeStyle = 'lightblue'
    ctx.stroke()
  }
  public render() {
    return (
      <canvas width="500" height="500" id="msg-box" />
    )
  }
}

export default MessageBox