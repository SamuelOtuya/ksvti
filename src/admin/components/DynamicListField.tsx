import { Plus, Trash2 } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}

export default function DynamicListField({
  title,
  items,
  onChange,
  placeholder = "Enter item...",
}: Props) {
  const updateItem = (index: number, value: string) => {
    const updated = [...items];
    updated[index] = value;
    onChange(updated);
  };

  const addItem = () => {
    onChange([...items, ""]);
  };

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#2d1b5e]">{title}</h3>

        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-2 rounded-lg bg-[#f5a623] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d4891a]"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-gray-400">No items added.</p>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="text"
              value={item}
              placeholder={placeholder}
              onChange={(e) => updateItem(index, e.target.value)}
              className="flex-1 rounded-lg border border-gray-200 p-3 outline-none focus:border-[#f5a623]"
            />

            <button
              type="button"
              onClick={() => removeItem(index)}
              className="rounded-lg bg-red-50 p-3 text-red-600 hover:bg-red-100"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
