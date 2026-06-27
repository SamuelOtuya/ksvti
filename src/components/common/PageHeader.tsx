type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative bg-[#2d1b5e] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b5e] via-[#2d1b5e]/95 to-[#3d2680]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-[#f5a623] uppercase tracking-[3px] text-xs font-bold mb-3">
          KSVTI
        </p>

        <h1 className="text-white text-4xl lg:text-6xl font-black uppercase">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm lg:text-base leading-7">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
