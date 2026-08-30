"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyAccountButtonProps {
  value: string;
}

export default function CopyAccountButton({
  value,
}: CopyAccountButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy account number:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied ? "Account number copied" : "Copy account number"
      }
      title={copied ? "Copied" : "Copy account number"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-selfboss-yellow transition duration-200 hover:scale-105 hover:bg-black/90 active:scale-95"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}