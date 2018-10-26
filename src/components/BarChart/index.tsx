import * as React from 'react'


class BarChart extends React.Component {

  public componentDidMount() {

    const data = [16, 68, 20, 30, 54]
    const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
    const width = 500
    const height = 500

    const canvas: HTMLCanvasElement = document.getElementById('bar-chart') as HTMLCanvasElement
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

    ctx.fillStyle = '#FFF'
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = 'lightblue'
    data.forEach((dp: number, index: number) => {
      // 坐标轴在左上角，高度 - 内边距 - 条形图的高度得到 y 坐标即可让它看上去自底向上。
      ctx.fillRect(40 + index * 100, 460 - dp * 5, 50, dp * 5)
    })

    // 画坐标轴
    ctx.fillStyle = 'black'
    ctx.lineWidth = 2.0
    ctx.beginPath()
    ctx.moveTo(30, 10)
    ctx.lineTo(30, 460)
    ctx.lineTo(490, 460)
    ctx.stroke()

    // 画刻度
    for (let i=0; i<6; i++) {
      ctx.fillText((5-i)*20 + '', 5, 80*i + 60)
      ctx.beginPath()
      ctx.moveTo(25, 80*i+60)
      ctx.lineTo(30, 80*i+60)
      ctx.stroke()
    }

    for (let i=0; i < 5; i++) {
      ctx.fillText(labels[i], 50 + i*100, 475)
    }
  }

  public render() {
    return (
      <canvas width="500" height="500" id="bar-chart">
        You browser donot support canvas.
      </canvas>
    )
  }
}

export default BarChart