import { useRef, useState } from "react";
import { ImagePlus, Loader2, Trash2, UploadCloud } from "lucide-react";
import { supabase } from "../../services/supabase";

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUploadField({
  value,
  onChange,
  folder = "general",
  label = "Programme Image",
}: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    setUploading(true);

    const extension = file.name.split(".").pop();
    const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from("website-images")
      .upload(filePath, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("website-images")
      .getPublicUrl(filePath);

    onChange(data.publicUrl);
    setUploading(false);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) upload(file);
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
        {label}
      </label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFile}
      />

      {value ? (
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-gray-200">
            <img
              src={value}
              alt="Uploaded preview"
              className="h-64 w-full object-cover"
            />

            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute right-3 top-3 rounded-full bg-red-600 p-2 text-white shadow-lg hover:bg-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2d1b5e] px-5 py-3 text-sm font-bold text-white hover:bg-[#3d2680]"
          >
            <ImagePlus size={18} />
            Replace Image
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-[#f5a623] hover:bg-[#fffaf0]"
        >
          {uploading ? (
            <>
              <Loader2 className="mb-4 animate-spin text-[#f5a623]" size={42} />
              <p className="font-semibold text-[#2d1b5e]">Uploading...</p>
            </>
          ) : (
            <>
              <UploadCloud size={45} className="mb-4 text-[#f5a623]" />
              <p className="font-semibold text-[#2d1b5e]">
                Click to upload image
              </p>
              <p className="mt-2 text-sm text-gray-500">JPG, PNG, WEBP</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
