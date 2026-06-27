import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProgrammeFilters({
  search,
  setSearch,
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search programmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-gray-200 py-4 pl-14 pr-5 outline-none focus:border-[#f5a623]"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 transition ${
              activeCategory === category
                ? "bg-[#2d1b5e] text-white"
                : "bg-gray-100 hover:bg-[#f5a623] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
