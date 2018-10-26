import * as React from 'react'


class PieChart extends React.Component {

  public componentDidMount() {
    const data = [16, 68, 20, 30, 54]
    // const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
    const colors = ['orange', 'lightblue', 'green', 'yellow', 'teal']
    const width = 500
    const height = 500

    const canvas: HTMLCanvasElement = document.getElementById('pie-chart') as HTMLCanvasElement
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    const total: number = data.reduce((initValue: number, currentValue: number) => initValue + currentValue, 0)

    // draw bg
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, width, height)
    ctx.strokeRect(0, 0, width, height)

    let prevAngle: number = 0

    data.forEach((dp: number, index: number) => {

      const angle: number = (dp / total) * (Math.PI * 2)

      // fill width a radical gradient
      const grad: CanvasGradient = ctx.createRadialGradient(250, 250, 10, 250, 250, 100)
      grad.addColorStop(0, 'white')
      grad.addColorStop(1, colors[index])
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.moveTo(250, 250)
      ctx.arc(250, 250, 100, prevAngle, prevAngle + angle, false)
      ctx.lineTo(250, 250)
      ctx.fill()
      ctx.stroke()

      prevAngle += angle
    })

    // 让文本居中
    const title = "Sales Data"
    ctx.font = '24pt serif'
    ctx.fillStyle = 'black'
    const metrics = ctx.measureText(title)
    ctx.fillText(title, (width - metrics.width) / 2, 400)


  }

  public render() {
    return (
      <canvas width="500" height="500" id="pie-chart">
        Your browser do not support canvas.
      </canvas>
    )
  }
}

export default PieChart