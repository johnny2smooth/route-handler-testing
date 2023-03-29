import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase.storage.from("friend-drawings").list();
  let URL = data?.map(
    (item) =>
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/friend-drawings/${item.name}`
  );
  return NextResponse.json(URL);
}

export async function POST(request: Request) {
  const { prompt } = await request.json();
  console.log(prompt);
  return NextResponse.json(prompt);
}
