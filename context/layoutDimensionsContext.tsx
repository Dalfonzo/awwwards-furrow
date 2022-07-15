import { createContext, useContext } from 'react'
import useResizeObserver from 'use-resize-observer'

interface LayoutDimensionsI {
  width: number
  height: number
}

const LayoutDimensionsContext = createContext<LayoutDimensionsI>({ width: 0, height: 0 })

const LayoutDimensionsProvider = ({ children }: { children: React.ReactNode }) => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()

  return (
    <LayoutDimensionsContext.Provider value={{ width, height }}>
      <div ref={ref}>{children}</div>
    </LayoutDimensionsContext.Provider>
  )
}

const useLayoutDimensions = () => {
  const context = useContext(LayoutDimensionsContext)

  if (!context) {
    throw new Error('useLayoutDimensions must be used within a LayoutDimensionsProvider')
  }

  return context
}

export { LayoutDimensionsProvider, useLayoutDimensions }
