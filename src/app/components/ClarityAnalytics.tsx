"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "z5ck3u1js5";

export default function ClarityAnalytics() {
  useEffect(() => {
    // Only initialize Clarity in production so local development visits are ignored
    if (process.env.NODE_ENV === "production") {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);

  return null;
}
