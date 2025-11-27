import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    // Prevent crash if env vars are missing
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn("Supabase environment variables are missing. Middleware skipped.")
        return res
    }

    const supabase = createMiddlewareClient({ req, res })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    // If accessing dashboard and not logged in, redirect to login
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    // If accessing login and already logged in, redirect to dashboard
    if (req.nextUrl.pathname === '/login') {
        if (session) {
            return NextResponse.redirect(new URL('/dashboard/products', req.url))
        }
    }

    return res
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
}
