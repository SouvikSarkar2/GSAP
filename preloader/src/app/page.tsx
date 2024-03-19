"use client";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<any>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);
  return (
    <>
      <main>{loaderFinished ? <Hero /> : <Loader timeline={timeline} />}</main>
    </>
  );
}
