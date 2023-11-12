"use client";
import Button from "@/layout/Button/Button";
import ProgressBar from "@/layout/ProgressBar/ProgressBar";
import RadioInput from "@/layout/RadioInput/RadioInput";
import ThemeSwitch from "@/layout/ThemeSwitch/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Button>Button</Button>
      <ThemeSwitch />
      <RadioInput />
      <ProgressBar />
    </main>
  );
}
