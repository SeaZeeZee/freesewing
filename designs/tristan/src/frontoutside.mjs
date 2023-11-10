import { frontPoints } from './frontpoints.mjs'
import { frontInside } from './frontinside.mjs'

export const frontOutside = {
  name: 'tristan.frontOutside',
  from: frontPoints,
  after: frontInside,
  draft: ({ store, sa, points, Path, paths, Snippet, snippets, options, macro, part }) => {
    delete points.bustDartTop
    delete points.bustSide
    delete points.bustDartMiddle
    delete points.bustDartBottom
    delete points.bustDartCpBottom
    delete points.bustB
    delete points.bustDartEdge

    macro('rmcutonfold')
    store.cutlist.removeCut()

    paths.cut = new Path()
      .move(points.armhole)
      .curve(points.armholeCutCp, points.strapOutsideCp, points.strapOutside)
      .hide()

    paths.princessSeam = new Path()
      .move(points.shoulderDartOutside)
      .curve(
        points.shoulderDartTipCpDownOutside,
        points.waistUpDartRightCpUp,
        points.waistUpDartRight
      )
      .curve(points.waistUpDartRightCpDown, points.waistCpUp, points.waistDartRight)
      .hide()

    paths.armhole = new Path()
      .move(points.armhole)
      .curve(points.armholeCp2, points.armholePitchCp1, points.armholePitch)
      .curve_(points.armholePitchCp2, points.shoulder)
      .hide()

    paths.seam = new Path()
      .move(points.waistDartRight)
      .line(points.sideHem)
      .line(points.armhole)
      .join(paths.cut)
      .line(points.shoulderDartOutside)
      .join(paths.princessSeam)
      .close()
      .attr('class', 'fabric')

    points.grainTop = points.armhole.shift(225, 20)
    points.grainBottom = points.sideHemInitial.shift(135, 20)
    macro('grainline', {
      from: points.grainBottom,
      to: points.grainTop,
    })

    store.cutlist.addCut({ cut: 2, from: 'fabric' })

    points.snippet = paths.princessSeam.shiftAlong(
      paths.princessSeam.length() - store.get('shoulderDartTipNotch')
    )
    snippets.shoulderDartTip = new Snippet('notch', points.snippet)

    points.titleAnchor = points.waistDartRight
      .shiftFractionTowards(points.armhole, 0.3)
      .shiftFractionTowards(points.shoulderDartOutside, 0.2)
    macro('title', {
      at: points.titleAnchor,
      nr: 2,
      title: 'frontOutside',
    })
    points.gridAnchor = points.armholeCpTarget.clone()

    points.scaleboxAnchor = points.titleAnchor.shiftFractionTowards(points.sideHem, 0.5)
    points.scaleboxAnchor.x = points.titleAnchor.x
    macro('miniscale', { at: points.scaleboxAnchor })

    if (sa) paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')

    const pLeft = paths.princessSeam.edge('left')
    macro('hd', {
      from: points.waistDartRight,
      to: points.armholeOutsidePitchCp1,
      y: points.sideHemInitial.y + sa + 35,
      id: 'dartToArmhole',
    })
    macro('hd', {
      from: points.waistDartRight,
      to: points.sideHemInitial,
      y: points.sideHemInitial.y + sa + 25,
      id: 'dartToSide',
    })
    macro('hd', {
      from: pLeft,
      to: points.sideHemInitial,
      y: points.sideHemInitial.y + sa + 15,
      id: 'leftToSide',
    })
    macro('hd', {
      from: points.shoulderDartOutside,
      to: points.strapOutside,
      y: points.shoulderDartOutside.y - sa - 15,
      id: 'dartToShoulder',
    })
    macro('hd', {
      from: points.snippet,
      to: points.strapOutside,
      y: points.shoulderDartOutside.y - sa - 25,
      id: 'dartPointToShoulder',
    })
    macro('hd', {
      from: pLeft,
      to: points.strapOutside,
      y: points.shoulderDartOutside.y - sa - 35,
      id: 'leftToShoulder',
    })

    macro('vd', {
      from: points.armholeOutsidePitchCp1,
      to: points.sideHemInitial,
      x: points.sideHemInitial.x + sa + 15,
      id: 'hemToArmhole',
    })
    macro('vd', {
      from: points.waistDartRight,
      to: pLeft,
      x: pLeft.x - sa - 15,
      id: 'hemToLeft',
    })
    macro('vd', {
      from: points.strapOutside,
      to: points.sideHemInitial,
      x: points.sideHemInitial.x + sa + 25,
      id: 'hemToShoulder',
    })
    macro('vd', {
      from: points.shoulderDartOutside,
      to: points.sideHemInitial,
      x: points.shoulderDartOutside.x,
      id: 'sideHemToShoulderDart',
    })
    macro('vd', {
      from: points.waistDartRight,
      to: points.shoulderDartOutside,
      x: pLeft.x - sa - 25,
      id: 'hemToShoulderDart',
    })
    macro('vd', {
      from: points.snippet,
      to: points.shoulderDartOutside,
      x: pLeft.x - sa - 15,
      id: 'shoulderDartToDartPoint',
    })

    // console.log({part:JSON.parse(JSON.stringify(part))})
    console.log({ store: JSON.parse(JSON.stringify(store)) })

    return part
  },
}
