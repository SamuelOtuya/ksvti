import { Download, FileText } from "lucide-react";

interface Props {
  item: {
    title: string;
    description: string;
    file: string;
    type: string;
    size: string;
  };
}

export default function DownloadCard({ item }: Props) {
  return (
    <div className="rounded-xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#2d1b5e] text-[#f5a623]">
        <FileText size={26} />
      </div>

      <h3 className="text-xl font-black text-[#2d1b5e]">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>

      <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
        <span>{item.type}</span>
        <span>{item.size}</span>
      </div>

      <a
        href={item.file}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#2d1b5e] px-6 py-3 font-semibold text-white transition hover:bg-[#3d2680]"
      >
        <Download size={18} />
        Download
      </a>
    </div>
  );
}
