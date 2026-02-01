import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK

  if (!deployHookUrl) {
    return NextResponse.json(
      { error: 'Deploy hook URL not configured' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(deployHookUrl, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`Deploy hook failed: ${response.status}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Rebuild triggered successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to trigger rebuild' },
      { status: 500 }
    )
  }
}
