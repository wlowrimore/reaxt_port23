import { NextResponse } from "next/server";
import certificates from "./data.json";

export async function GET(request) {
  return NextResponse.json(certificates);
}
