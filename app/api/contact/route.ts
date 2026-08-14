import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, company, service, budget, timeline, description } = body;

  if (!name?.trim() || !email?.trim() || !description?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and project description are required." },
      { status: 400 }
    );
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("contacts")
    .insert({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || null,
      service: service || null,
      budget: budget || null,
      timeline: timeline || null,
      description: description.trim(),
    })
    .select("id")
    .single();

  if (error) {
    console.error("Supabase insert error:", error.message);
    return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data.id });
}

export async function GET() {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
