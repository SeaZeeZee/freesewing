export default (part) => {
  let { Point, points, Path, paths, macro } = part.shorthand()

  points.A = new Point(90, 70).attr('data-text', 'Point A')
  points.B = new Point(10, 10).attr('data-text', 'Point B')
  points.C = points.A.shiftFractionTowards(points.B, 0.5)
    .attr('data-text', 'Point C is point A shifted 50%\nin the direction of point B')
    .attr('data-text-class', 'center')
    .attr('data-text-lineheight', 6)

  paths.direction = new Path().move(points.A).line(points.B).attr('class', 'note dashed')

  macro('ld', {
    from: points.C,
    to: points.A,
    d: -10
  })

  macro('ld', {
    from: points.B,
    to: points.A,
    d: 20
  })

  return part
}
