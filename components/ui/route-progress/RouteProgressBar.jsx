/* ///////////// ////////////////////// /////////////
///// Route switching progress bar | Jishnu Raj /////
/////////////// ////////////////////// ///////////*/
export const RouteProgressBar = ({ animationDuration, progress }) => (
  <div
    className="bg-yellow-500 h-1 w-full left-0 sticky top-0 z-[999999]"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`
    }}
  />
)
