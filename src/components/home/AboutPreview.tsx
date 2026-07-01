import heroImage from "../../assets/images/about-preview.jpg";

export default function AboutPreview() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="h-[360px]  rounded-md flex flex-col items-center justify-center text-gray-500 text-sm">
          <img
            src={heroImage}
            alt="Description of image"
            width={600}
            height={400}
            className="mb-3 opacity-50"
          />
        </div>

        <div>
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[3px] mb-3">
            About KSVTI
          </p>

          <h2 className="text-[#2d1b5e] text-3xl lg:text-4xl font-black uppercase leading-tight mb-5">
            Empowering Students, <br />
            <span className="text-[#f5a623]">Building Futures</span>
          </h2>

          <p className="text-gray-600 text-sm leading-8 mb-8 max-w-xl">
            Kahawa Sukari Vocational & Training Institute (KSVTI) is a TVET
            registered institution committed to empowering learners with
            practical skills for real-world success. We provide quality
            training, character development, and career guidance.
          </p>

          <a
            href="/about"
            className="inline-block bg-[#2d1b5e] hover:bg-[#3d2680] text-white px-9 py-4 rounded text-sm font-bold"
          >
            Read More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
