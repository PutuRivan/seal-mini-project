"use client";

import NewsCard from "@/components/cards/news-card";
import SkeletonNews from "@/components/skeletons/skeleton-news";
import { Tdata } from "@/libs/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Category = "gaya-hidup" | "nasional" | "international";

export default function Page() {
  const { category } = useParams<{ category: string }>() ?? {};
  const [data, setData] = useState<Tdata[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryMap: Record<Category, { label: string; api: string }> = {
    "gaya-hidup": { label: "Gaya Hidup", api: "lifestyle" },
    "nasional": { label: "Nasional", api: "politik" },
    "international": { label: "International", api: "dunia" },
  };

  const isCategory = (category: string): category is Category => {
    return category in categoryMap;
  };

  const selected = isCategory(category) ? categoryMap[category] : { label: category, api: category };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api-berita-indonesia.vercel.app/antara/${selected.api}`);
        const parsed = await response.json();
        setData(parsed.data.posts);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (category) fetchData();
  }, [category, selected.api]);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Berita {selected.label.charAt(0).toUpperCase() + selected.label.slice(1)}</h1>
      {loading ? (
        <div className="grid grid-cols-4 gap-y-10 mt-5 place-items-center">
          {Array.from({ length: 8 }).map((item, index) => (
            <SkeletonNews key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-y-10 mt-5 place-items-center">
          {data?.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={item.pubDate}
              thumbnail={item.thumbnail} />
          ))}
        </div>
      )}
    </main>
  );
}
