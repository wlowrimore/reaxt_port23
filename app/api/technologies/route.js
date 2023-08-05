import { NextResponse } from "next/server";
import technologies from "./data.json";

export async function GET(request) {
  return NextResponse.json(technologies);
}
