'use client'

import { useState, useEffect, useCallback } from 'react'
import { Accessibility, Type, Contrast, Link2, Move, RotateCcw } from 'lucide-react'

const STORAGE_KEY = 'michalopoulos-a11y'
const TEXT_SCALE_KEY = 'textScale'
const CONTRAST_KEY = 'contrast'
const UNDERLINE_LINKS_KEY = 'underlineLinks'
const REDUCE_MOTION_KEY = 'reduceMotion'

type TextScale = '100' | '110' | '125'

interface A11yState {
  textScale: TextScale
  contrast: boolean
  underlineLinks: boolean
  reduceMotion: boolean
}

const defaultState: A11yState = {
  textScale: '100',
  contrast: false,
  underlineLinks: false,
  reduceMotion: false,
}

function loadState(): A11yState {
  if (typeof window === 'undefined') return defaultState
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as Partial<A11yState>
    return { ...defaultState, ...parsed }
  } catch {
    return defaultState
  }
}

function saveState(s: A11yState) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch {}
}

function applyState(s: A11yState) {
  const d = document.documentElement
  d.dataset.a11yTextScale = s.textScale
  d.dataset.a11yContrast = s.contrast ? 'true' : ''
  d.dataset.a11yUnderlineLinks = s.underlineLinks ? 'true' : ''
  d.dataset.a11yReduceMotion = s.reduceMotion ? 'true' : ''
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<A11yState>(defaultState)

  const loadAndApply = useCallback(() => {
    const s = loadState()
    setState(s)
    applyState(s)
  }, [])

  useEffect(() => {
    loadAndApply()
  }, [loadAndApply])

  const update = useCallback((patch: Partial<A11yState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch }
      saveState(next)
      applyState(next)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    saveState(defaultState)
    setState(defaultState)
    applyState(defaultState)
  }, [])

  const textScaleLabels: Record<TextScale, string> = {
    '100': 'Κανονικό',
    '110': 'Μεγάλο',
    '125': 'Πολύ μεγάλο',
  }

  return (
    <>
      <div
        className="fixed right-4 z-[9999] flex flex-col items-end gap-2"
        style={{ bottom: 'var(--a11y-widget-bottom, 1.5rem)' }}
      >
        {open && (
          <div
            className="animate-in fade-in slide-in-from-bottom-2 rounded-xl border border-border bg-popover p-4 shadow-lg outline-none min-w-[260px]"
            role="dialog"
            aria-label="Επιλογές προσβασιμότητας"
          >
            <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
              <span className="text-sm font-semibold text-popover-foreground">
                Προσβασιμότητα
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Κλείσιμο"
              >
                ×
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Type className="h-3.5 w-3.5" />
                  Μέγεθος κειμένου
                </div>
                <div className="flex gap-1">
                  {(['100', '110', '125'] as const).map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => update({ textScale: scale })}
                      className={`rounded px-2 py-1.5 text-xs ${
                        state.textScale === scale
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-secondary'
                      }`}
                    >
                      {textScaleLabels[scale]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Contrast className="h-3.5 w-3.5" />
                  Υψηλή αντίθεση
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={state.contrast}
                  onClick={() => update({ contrast: !state.contrast })}
                  className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
                    state.contrast ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                      state.contrast ? 'left-5' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Link2 className="h-3.5 w-3.5" />
                  Υπογράμμιση συνδέσμων
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={state.underlineLinks}
                  onClick={() => update({ underlineLinks: !state.underlineLinks })}
                  className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
                    state.underlineLinks ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                      state.underlineLinks ? 'left-5' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Move className="h-3.5 w-3.5" />
                  Μείωση κίνησης
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={state.reduceMotion}
                  onClick={() => update({ reduceMotion: !state.reduceMotion })}
                  className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
                    state.reduceMotion ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                      state.reduceMotion ? 'left-5' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 py-2 text-xs font-medium text-muted-foreground hover:bg-muted"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Επαναφορά
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label={open ? 'Κλείσιμο επιλογών προσβασιμότητας' : 'Άνοιγμα επιλογών προσβασιμότητας'}
          aria-expanded={open}
        >
          <Accessibility className="h-6 w-6" />
        </button>
      </div>
    </>
  )
}
