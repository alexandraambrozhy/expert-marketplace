import {NextRequest,NextResponse} from 'next/server';
import {supabaseServer} from '@/lib/supabase/server';
export async function GET(request:NextRequest){const code=request.nextUrl.searchParams.get('code');if(code){const {error}=await supabaseServer().auth.exchangeCodeForSession(code);if(!error)return NextResponse.redirect(new URL('/dashboard',request.url));}return NextResponse.redirect(new URL('/login?error=auth',request.url));}
