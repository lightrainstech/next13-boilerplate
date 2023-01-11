import { Container } from './Container'
import { RouteProgressBar } from './RouteProgressBar'
import { useNProgress } from '@tanem/react-nprogress'

export const RouteProgress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  })

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <RouteProgressBar
        animationDuration={animationDuration}
        progress={progress}
      />
    </Container>
  )
}
