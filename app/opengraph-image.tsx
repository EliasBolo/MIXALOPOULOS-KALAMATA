import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε. - Μηχανουργείο Καλαμάτα'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const iconSvg = await readFile(join(process.cwd(), 'app/icon.svg'), 'utf-8')
  const iconDataUrl = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          background: '#1e3a5f',
          padding: 80,
        }}
      >
        <img
          src={iconDataUrl}
          width={200}
          height={200}
          style={{ flexShrink: 0 }}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#e8f0f7',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}
          >
            ΜΙΧΑΛΟΠΟΥΛΟΣ Ι.Κ.Ε.
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#7cb3d4',
              letterSpacing: '0.01em',
            }}
          >
            Μηχανουργείο Καλαμάτα
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
