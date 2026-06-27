import { FilePlus, Loader2, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { supabase } from "../../services/supabase";

type Props = {
  value: string;
  onChange: (url: string, file?: File) => void;
  folder?: string;
  label?: string;
};

export default function FileUploadField({
  value,
  onChange,
  folder = "downloads",
  label = "Upload File",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function uploadFile(file: File) {
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

    onChange(data.publicUrl, file);
    setUploading(false);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
        {label}
      </label>

      <input ref={inputRef} type="file" hidden onChange={handleFile} />

      {value ? (
        <div className="rounded-lg border border-gray-200 p-4">
          <p className="mb-4 break-all text-sm text-gray-600">{value}</p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="rounded bg-[#2d1b5e] px-5 py-3 text-sm font-bold text-white"
            >
              Replace File
            </button>

            <button
              type="button"
              onClick={() => onChange("")}
              className="rounded bg-red-50 px-5 py-3 text-sm font-bold text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-[#f5a623]"
        >
          {uploading ? (
            <>
              <Loader2 className="mb-3 animate-spin text-[#f5a623]" size={36} />
              <p className="font-semibold text-[#2d1b5e]">Uploading...</p>
            </>
          ) : (
            <>
              <FilePlus size={40} className="mb-3 text-[#f5a623]" />
              <p className="font-semibold text-[#2d1b5e]">
                Click to upload document
              </p>
              <p className="mt-1 text-sm text-gray-500">
                PDF, DOCX, XLSX supported
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
