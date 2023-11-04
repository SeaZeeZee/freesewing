import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.5

export const Lucy = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 148 119" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const LucyFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 74 119" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 92.2308,27.443457 c -3.43e-4,-1.069472 -0.03662,-2.372982 -0.08052,-2.896687 l -0.07983,-0.952193 18.0587,0.06376 c 9.9323,0.03506 26.06678,0.0926 35.8544,0.127867 l 17.79567,0.06411 v 2.616932 c 0,1.439312 0.27661,2.685281 0.31723,2.768821 0.0672,0.138293 -3.3788,0.15189 -36.01724,0.15189 H 92.231431 Z"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 84.296644,243.21412 c -7.246251,-2.84961 -12.825586,-9.65553 -15.48335,-18.88726 -1.377281,-4.78399 -1.440944,-6.73666 -1.694013,-51.95813 l -0.26295,-46.98732 14.550694,-44.812881 c 8.00288,-24.647085 15.012547,-46.09618 15.577041,-47.66466 L 98.0104,30.052087 h 12.34102 12.34099 v 55.695086 c 0,59.702437 -0.0476,58.860207 3.37879,59.718427 1.99785,0.5004 4.03534,-0.11031 5.05393,-1.51483 0.66872,-0.92211 0.902,-13.70336 1.05021,-57.54205 l 0.19054,-56.356633 12.88764,2.37e-4 12.88764,2.38e-4 15.35498,47.393653 15.35499,47.393665 -0.0417,44.27051 c -0.044,46.67636 -0.25333,50.48834 -3.21651,58.56064 -2.11621,5.765 -4.43087,9.34714 -8.04965,12.45749 -5.45266,4.68661 -2.977,4.46072 -49.03702,4.47424 l -40.648108,0.0119 z"
    />
    <path
      key="outline"
      d="m 84.476321,243.04024 c -6.807274,-3.08139 -11.820436,-8.81648 -14.848977,-16.98732 -1.437473,-3.87821 -1.49068,-5.22068 -2.063062,-52.05444 L 66.97675,125.92492 76.159089,97.679378 C 81.209372,82.144329 88.226269,60.572941 91.752199,49.742961 L 98.16297,30.052087 h 12.26473 12.26471 v 55.545424 c 0,34.716309 0.2534,56.242699 0.67575,57.404839 0.37167,1.02267 1.0686,2.05618 1.54874,2.29668 1.60546,0.80417 4.43185,0.46573 5.75666,-0.68931 1.26916,-1.10653 1.31746,-2.9632 1.50461,-57.850426 l 0.19336,-56.707207 h 12.6639 12.66388 l 1.02807,2.851782 c 0.56545,1.56848 7.59503,23.140169 15.62129,47.93709 l 14.5932,45.085301 -0.39392,44.27052 c -0.2286,25.68966 -0.69988,46.25913 -1.12288,49.00858 -0.75119,4.88264 -3.37157,12.25866 -5.56671,15.66955 -1.70242,2.64527 -5.88222,6.53024 -8.38718,7.79558 -2.75555,1.39192 -16.63658,1.8644 -55.9412,1.90411 l -29.597974,0.0299 z"
    />
    <path
      key="outline"
      d="m 85.349715,243.55696 c -3.078408,-1.25074 -4.264744,-1.89873 -6.256299,-3.4173 -4.464414,-3.40413 -7.890691,-8.53928 -9.886391,-14.81726 -1.22792,-3.86276 -1.430528,-5.80158 -1.666529,-15.94757 -0.142677,-6.13393 -0.514162,-53.39111 -0.515873,-65.62493 l -4.71e-4,-3.49682 h 28.036869 28.036859 l 0.11014,0.78084 c 0.14663,1.03934 0.60219,2.71518 0.88154,3.24293 0.70645,1.33455 3.57773,1.82265 5.4979,0.93461 1.36064,-0.62925 1.60617,-1.02629 1.92616,-3.11466 l 0.28251,-1.84372 28.48774,-1e-5 28.48775,-2e-5 -0.0422,27.05799 c -0.0416,26.65856 -0.22254,41.46569 -0.56809,46.49482 -0.48996,7.13091 -1.25583,10.62301 -3.51053,16.00673 -1.97714,4.72097 -4.00191,7.53625 -7.77818,10.81491 -2.27815,1.97796 -3.18858,2.47703 -5.40143,2.96095 -3.86066,0.84427 -9.76162,0.95583 -50.32747,0.9514 l -33.383766,-0.003 -2.410212,-0.97925 z"
    />
    <path
      key="outline"
      d="m 126.87831,244.58078 c 4.10049,-0.0202 10.76004,-0.0202 14.79898,1e-5 4.03896,0.0203 0.68402,0.0369 -7.45543,0.0369 -8.13943,0 -11.44403,-0.0166 -7.34355,-0.0369 z"
    />
    <path
      key="outline"
      d="m 85.143505,243.48246 c -2.933916,-1.19592 -4.004256,-1.78312 -5.963994,-3.27189 -4.463918,-3.39113 -7.758832,-8.23762 -9.838857,-14.47195 -1.597622,-4.78847 -1.855744,-8.49634 -1.956889,-28.11042 -0.02426,-4.70544 -0.06685,-8.76923 -0.09464,-9.03064 -0.02779,-0.26141 -0.109761,-13.69025 -0.182164,-29.84186 L 66.975323,129.38914 H 94.852012 122.7287 l 0.10973,0.91665 c 0.0603,0.50416 0.11234,2.07772 0.11563,3.49683 0.0143,6.23258 0.44038,9.5529 1.38297,10.77607 0.38403,0.49833 1.42633,0.94495 2.46834,1.05766 1.54869,0.16752 3.5429,-0.52319 4.13958,-1.43375 0.61408,-0.93713 1.11679,-6.03523 1.12593,-11.41848 0.003,-1.53114 0.0514,-2.92138 0.1085,-3.08943 l 0.1037,-0.30555 h 28.28382 28.28382 l -0.0897,32.82944 c -0.0885,32.35631 -0.25404,46.64113 -0.59939,51.70551 -0.47299,6.93651 -1.27422,10.56369 -3.50836,15.88234 -2.0329,4.8396 -3.92434,7.47236 -7.78468,10.83581 -2.55646,2.22741 -3.75965,2.77421 -7.1119,3.23205 -4.01044,0.54775 -6.07538,0.57666 -44.74111,0.62659 l -37.255607,0.0481 z"
    />
    <path
      key="outline"
      d="m 123.62483,29.53199 c -0.0811,36.585611 -0.28392,73.17094 -0.26362,92.02377 0.0203,18.85284 0.14197,19.97309 0.48684,20.90135 0.34488,0.92827 0.91271,1.66444 1.70373,2.14443 0.79101,0.48 1.80499,0.70406 2.77824,0.49595 0.97324,-0.20811 1.9061,-0.84827 2.51448,-2.1925 0.60837,-1.34423 0.89228,-3.3927 1.05453,-22.43791 0.16226,-19.04519 -0.0406,-54.605544 3e-5,-90.647016 z"
    />
    <path
      key="outline"
      d="m 164.02253,29.628015 c -1.8654,0.032 -3.73116,0.06401 -14.84479,0.08002 -11.11362,0.01601 -31.4743,0.01601 -42.54718,6e-6 -11.072882,-0.016 -12.857484,-0.04801 -14.64249,-0.08003"
    />
    <path key="outline" d="" />
    <path key="outline" d="" />
  </>
)
