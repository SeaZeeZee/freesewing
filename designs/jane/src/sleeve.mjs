import { pluginBundle } from '@freesewing/plugin-bundle'
export const sleeve = {
  name: 'jane.sleeve',
  plugins: [pluginBundle],
  measurements: ['biceps', 'shoulderToElbow'],
  options: {
    bicepsEase: { pct: 18, min: 18, max: 51, menu: 'fit' },
    sleeveBonus: { pct: 80, min: 60, max: 100, menu: 'style' },
  },

  draft: function (shorthand) {
    let {
      options,
      Point,
      Path,
      points,
      paths,
      Snippet,
      snippets,
      complete,
      sa,
      paperless,
      macro,
      measurements,
    } = shorthand
    //design pattern here

    const sleeveWidth = measurements.biceps * (1 + options.bicepsEase)

    const sleeveLength = measurements.shoulderToElbow * options.sleeveBonus

    points.sleeveLeft = new Point(0, 0)
    points.sleeveRight = new Point(sleeveLength, 0)
    points.sleeveBottomLeft = new Point(0, sleeveWidth)
    points.sleeveBottomRight = new Point(sleeveLength, sleeveWidth)

    paths.sleeve = new Path()
      .move(points.sleeveRight)
      .line(points.sleeveLeft)
      .line(points.sleeveBottomLeft)
      .line(points.sleeveBottomRight)
      .line(points.sleeveRight)
      .close()

    // Complete?
    if (complete) {
      points.title = points.sleeveLeft.shift(300, sleeveLength / 2)
      macro('title', {
        at: points.title,
        nr: 2,
        title: 'Sleeve',
      })

      points.notch = new Point(0, sleeveWidth / 2)

      macro('sprinkle', {
        snippet: 'notch',
        on: ['notch'],
      })

      if (sa) {
        paths.sa = paths.sleeve.offset(sa).attr('class', 'fabric sa')
      }
    }

    // Paperless?
    if (paperless) {
      macro('hd', {
        from: points.sleeveLeft,
        to: points.sleeveBottomLeft,
        x: points.sleeveLeft.x + sa + 30,
      })

      macro('vd', {
        from: points.sleeveLeft,
        to: points.sleeveRight,
        x: points.sleeveLeft.y + sa + 30,
      })
    }

    return part
  },
}
