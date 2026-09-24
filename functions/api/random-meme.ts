import { CORS_HEADERS, toPublicUrl, type Env } from '../_shared/d1r2'

export const EDGE_CACHE_CONTROL = 'public, max-age=5, s-maxage=15, stale-while-revalidate=60'

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      ...CORS_HEADERS,
      'Cache-Control': EDGE_CACHE_CONTROL,
    },
  })
}

export async function onRequestGet(context: { env: Env; request: Request }): Promise<Response> {
  const { env } = context
  const headers: Record<string, string> = {
    ...CORS_HEADERS,
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': EDGE_CACHE_CONTROL,
  }

  try {
    const r = Math.random()

    let row = await env.DB.prepare(
      `SELECT id, title, image_url, storage_path, category, rarity, share_text
       FROM memes
       WHERE is_active = 1 AND status = 'active' AND random_key >= ?
       ORDER BY random_key ASC
       LIMIT 1`
    )
      .bind(r)
      .first()

    if (!row) {
      row = await env.DB.prepare(
        `SELECT id, title, image_url, storage_path, category, rarity, share_text
         FROM memes
         WHERE is_active = 1 AND status = 'active' AND random_key < ?
         ORDER BY random_key ASC
         LIMIT 1`
      )
        .bind(r)
        .first()
    }

    if (!row) {
      return new Response(JSON.stringify({ error: 'No active memes found' }), {
        status: 404,
        headers,
      })
    }

    const publicUrl = toPublicUrl(row.storage_path || row.image_url, env)

    return new Response(
      JSON.stringify({
        meme: {
          id: row.id,
          url: publicUrl,
          title: row.title || 'Spawned from Meme Capsule',
          category: row.category || 'General',
          rarity: row.rarity || 'Common',
          shareText: row.share_text || 'Spawned from Meme Capsule',
        },
      }),
      {
        status: 200,
        headers,
      }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch random meme',
        message: err instanceof Error ? err.message : 'Unknown error',
      }),
      {
        status: 500,
        headers,
      }
    )
  }
}
