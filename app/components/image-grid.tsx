import React from "react";
import Image from "next/image";

interface MediaGridProps {
  items: ({
    src: string;
    type: "image" | "video";
    alt: string;
    href?: string;
  })[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const MediaGrid: React.FC<MediaGridProps> = ({
  items,
  columns = 3,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {items.map((item, index) => {
          const element = item.type === "image" ?
            (<Image
              alt={item.alt}
              src={item.src}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
              className="rounded-lg object-cover"
            />) :
            (<div
              className="rounded-lg overflow-hidden h-full"
              >
                <video
                  src={item.src} 
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
            </div>);

          return (<div key={index} className="relative aspect-square">
            {item.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="block w-full h-full"
              >
                {element}
              </a>
            ) : element}
          </div>
        )})}
      </div>
    </section>
  );
};
