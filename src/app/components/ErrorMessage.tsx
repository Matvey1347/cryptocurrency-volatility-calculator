"use client";
import React from 'react';
interface ErrorProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorProps) {
  if (!error) return null;
  
  return (
    <p className="text-red-500">{error}</p>
  );
}
