import type { D1Database } from '@cloudflare/workers-types'

export interface Env {
  DB: D1Database
}

const json = (data: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: { 'content-type': 'application/json', ...(init.headers ?? {}) }
  })

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/version') {
      return new Response('worker-version-1', { status: 200 })
    }

    if (url.pathname === '/api/db-ping') {
      if (!env?.DB) return new Response('DB binding missing', { status: 500 })

      const result = await env.DB.prepare('SELECT 1 as ok').first()
      return new Response(JSON.stringify(result), {
        headers: { 'content-type': 'application/json' }
      })
    }

    // ✅ TEST: create a supply row
    if (request.method === 'POST' && url.pathname === '/api/supplies') {
      const body = await request.json().catch(() => null)
      if (!body) return json({ error: 'Invalid JSON' }, { status: 400 })

      const name = String(body?.name ?? '').trim()
      const unit = String(body?.unit ?? '').trim()
      const costPerUnitCents = Number(body?.costPerUnitCents ?? 0)

      if (!name) return json({ error: 'name is required' }, { status: 400 })
      if (!unit) return json({ error: 'unit is required' }, { status: 400 })
      if (!Number.isInteger(costPerUnitCents) || costPerUnitCents < 0) {
        return json({ error: 'costPerUnitCents must be a non-negative integer' }, { status: 400 })
      }

      const id = crypto.randomUUID()

      await env.DB.prepare(
        `INSERT INTO supplies (id, name, unit, cost_per_unit_cents)
         VALUES (?, ?, ?, ?)`
      )
        .bind(id, name, unit, costPerUnitCents)
        .run()

      return json({ id, name, unit, costPerUnitCents }, { status: 201 })
    }

    return new Response('Not found', { status: 404 })
  }
}
