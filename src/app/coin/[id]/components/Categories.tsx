"use client";

interface CategoriesProps {
  categories: string[] | null;
}

export default function Categories({ categories }: CategoriesProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center space-y-2 space-x-2 mb-4">
      {categories.map((category, index) => (
        <span
          key={index}
          className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
