import React from 'react'
import MotionBox from './MotionBox'

export type Props = {
  isOpen: boolean | undefined
  children: React.ReactNode
}

const variants = {
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
  },
  closed: {
    opacity: 0,
    y: 20,
    transitionEnd: {
      display: 'none',
    },
  },
}

const ExampleViewerRadio: React.VFC<Props> = (props) => {
  return (
    <MotionBox
      as="aside"
      initial={{ scale: 1 }}
      transition={{ duration: 0.15, type: 'tween' }}
      animate={props.isOpen ? 'open' : 'closed'}
      variants={variants}>
      {props.children}
    </MotionBox>
  )
}

export default ExampleViewerRadio
