export const bottomToTopHeaderVariant = {
  offscreen: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export const topToBottomHeaderVariant = {
  offscreen: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export const containerHeaderVariantProps = {
  initial: 'offscreen',
  whileInView: 'onscreen',
}
