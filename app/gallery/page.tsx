import React from "react";
import type { Metadata } from "next";
import { MediaGrid } from "app/components/image-grid";
import { getAllMedia } from "app/lib/media";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Aggregate project media.",
};

export default function Photos() {
  let media = getAllMedia();
  
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Gallery</h1>
      <p>
        Click on a thumbnail to open the project in a new tab.
      </p>
      <MediaGrid
        columns={3}
        items={media}
      />
    </section>
  );
}
