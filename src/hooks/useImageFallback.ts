import { useState } from 'react'

/** Switches to a local fallback if an external image cannot be loaded. */
export function useImageFallback(source: string, fallback: string) {
  const [imageSource, setImageSource] = useState(source)

  function handleError() {
    if (imageSource !== fallback) setImageSource(fallback)
  }

  return { imageSource, handleError }
}
