export const bottomToTopVariant = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export const containerVariantProps = {
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: {
    margin: '500px 0px 0px 0px',
    once: true,
  },
}
