import { css } from 'styled-components'

export interface responsivePropertyPropsI {
  minSize: string
  maxSize: string
  property: string
}

export interface assignPropertyPropsI {
  arr: responsivePropertyPropsI[]
  type?: 'min-size' | 'max-size'
  percentage?: number
}

const assignProperty = ({ arr, type, percentage }: assignPropertyPropsI) => {
  if (type) {
    return arr.reduce((prev, { property, maxSize, minSize }) => {
      return prev + `${property}: ${type === 'min-size' ? minSize : maxSize};`
    }, '')
  }

  return arr.reduce(
    (prev, { property, maxSize, minSize }) =>
      prev + ` ${property}: calc(${maxSize} - ((${maxSize} - ${minSize}) * ${percentage}));`,
    ''
  )
}

export const responsiveProperty = (arr: responsivePropertyPropsI[]): any => {
  return css`
    @media (min-width: 1025px) {
      ${assignProperty({ arr, type: 'max-size' })}
    }

    @media (max-width: 1024px) {
      ${assignProperty({ arr, percentage: 0.5 })}
    }

    @media (max-width: 768px) {
      ${assignProperty({ arr, type: 'min-size' })}
    }
  `
}

export const responsiveFontSize = (mobileFontSize: string, desktopFontSize: string) =>
  responsiveProperty([{ minSize: mobileFontSize, maxSize: desktopFontSize, property: 'font-size' }])

export const utils = {
  responsiveFontSize,
  responsiveProperty,
}
