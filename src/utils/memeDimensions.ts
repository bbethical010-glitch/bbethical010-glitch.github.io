export interface CanvasDimensions {
  width: number
  height: number
}

// In-memory cache for sniffed image natural dimensions
export const memeDimensionCache = new Map<string, { width: number; height: number }>()

/**
 * Computes viewport-constrained optimal card dimensions verbatim from Meme Capsule APK spec:
 * maxW = min(viewportWidth * 0.88, 380)
 * maxH = min(viewportHeight * 0.52, 460)
 * minW = min(230, maxW)
 * minH = 190
 */
export function computeCanvasDimensions(
  naturalWidth: number,
  naturalHeight: number,
  viewportWidth: number,
  viewportHeight: number
): CanvasDimensions {
  const maxW = Math.min(viewportWidth * 0.88, 380)
  const maxH = Math.min(viewportHeight * 0.52, 460)
  const minW = Math.min(230, maxW)
  const minH = 190

  const safeNaturalWidth = naturalWidth > 0 ? naturalWidth : 400
  const safeNaturalHeight = naturalHeight > 0 ? naturalHeight : 500
  const ratio = safeNaturalWidth / safeNaturalHeight

  let width: number
  let height: number

  if (ratio >= maxW / maxH) {
    // Landscape / Wide Memes: Constrained by Max Width
    width = maxW
    height = maxW / ratio
    if (height < minH) {
      height = minH
      width = Math.min(minH * ratio, viewportWidth * 0.92)
    }
  } else {
    // Portrait / Tall Memes: Constrained by Max Height
    height = maxH
    width = maxH * ratio
    if (width < minW) {
      width = minW
      height = Math.min(minW / ratio, maxH)
    }
  }

  return {
    width: Math.round(width),
    height: Math.round(height),
  }
}

/**
 * Sniffs image natural dimensions and caches them.
 */
export function sniffImageDimensions(url: string): Promise<{ width: number; height: number }> {
  if (memeDimensionCache.has(url)) {
    return Promise.resolve(memeDimensionCache.get(url)!)
  }
  return new Promise((resolve) => {
    const img = new Image()
    img.src = url
    if (img.complete && img.naturalWidth > 0) {
      const dims = { width: img.naturalWidth, height: img.naturalHeight }
      memeDimensionCache.set(url, dims)
      resolve(dims)
    } else {
      img.onload = () => {
        const dims = { width: img.naturalWidth, height: img.naturalHeight }
        memeDimensionCache.set(url, dims)
        resolve(dims)
      }
      img.onerror = () => {
        const dims = { width: 400, height: 500 }
        memeDimensionCache.set(url, dims)
        resolve(dims)
      }
    }
  })
}
