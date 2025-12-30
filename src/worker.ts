import type { D1Database } from '@cloudflare/workers-types'

export interface Env {
  DB: D1Database
}

const json = (data: unknown, init: globalThis.ResponseInit = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...(init.headers ?? {})
    }
  })

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    // --------------------
    // Create supply
    // POST /api/supplies
    // --------------------

    if (request.method === 'POST' && url.pathname === '/api/supplies') {
      try {
        const body = await request.json().catch(() => null)
        if (!body) {
          return json({ error: 'Invalid JSON body' }, { status: 400 })
        }

        const name = String(body?.name ?? '').trim()
        const unit = String(body?.unit ?? '').trim()
        const costPerUnitCents = Number(body?.costPerUnitCents ?? 0)

        if (!name) {
          return json({ error: 'name is required' }, { status: 400 })
        }

        if (!unit) {
          return json({ error: 'unit is required' }, { status: 400 })
        }

        if (!Number.isInteger(costPerUnitCents) || costPerUnitCents < 0) {
          return json({ error: 'costPerUnitCents must be a non-negative integer' }, { status: 400 })
        }

        const id = crypto.randomUUID()

        await env.DB.prepare(
          `INSERT INTO supplies (id, name, unit, costPerUnitCents)
           VALUES (?, ?, ?, ?)`
        )
          .bind(id, name, unit, costPerUnitCents)
          .run()

        return json({ id, name, unit, costPerUnitCents }, { status: 201 })
      } catch (err) {
        return json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 })
      }
    }

    return new Response('Not found', { status: 404 })
  }
}
