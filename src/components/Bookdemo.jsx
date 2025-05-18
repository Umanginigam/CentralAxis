import React from "react";

const BookDemoSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 pb-14">
      <article
        className="relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border p-6 dark:border-dark-border dark:bg-dark-surface-secondary"
        style={{ height: "250px" }}
      >
        {/* Background Image */}
        <img
          src="https://www.centralaxis.com/background.png"
          alt="Background"
          className="absolute left-0 top-0 h-full w-full object-cover"
          style={{ filter: "blur(2px)" }}
        />

        {/* Overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60" />
        <div className="absolute left-0 top-0 z-10 h-full w-full filter" />

        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center">
          <div className="relative z-20 flex flex-col items-center gap-2 text-center">
            <h4 className="text-center text-3xl font-medium tracking-tighter text-white sm:max-w-full md:text-4xl">
              Book a Demo
            </h4>
            <p className="mb-4 text-lg text-white/70 md:text-xl">
              See how CentralAxis can revolutionize your data center operations.
            </p>
          </div>

          {/* Call-to-Action */}
          <div className="relative z-10 flex items-center gap-2">
            <a
              target="_blank"
              href="https://calendly.com/margarita-centralaxis/30min"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
            >
              Schedule Now
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BookDemoSection;
