// components/FAQSection.jsx
import React from "react";

const FAQSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-3 self-center">
        <h3 className="bg-surface-secondary text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
          FAQs
        </h3>
        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h4
            className="text-pretty text-center text-3xl font-medium md:text-4xl"
            title="Frequently asked questions"
          >
            Frequently asked questions
          </h4>
        </div>
        <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
          Find answers to common questions about our solutions.
        </p>
      </div>

      {/* FAQ List */}
      <ul className="mx-auto flex w-full flex-col gap-8 self-stretch lg:grid lg:grid-cols-3 lg:gap-14 lg:px-24">
        {/* FAQ Item 1 */}
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Are these solutions applicable to me if I am operating a co-location?
          </p>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">
            Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.
          </p>
        </li>

        {/* FAQ Item 2 */}
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How do you ensure data privacy and security?
          </p>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">
            We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.
          </p>
        </li>

        {/* FAQ Item 3 */}
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How does pricing work?
          </p>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">
            Depending on your requirements, we offer flexible pricing models.
          </p>
        </li>

        {/* FAQ Item 4 */}
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            Do you provide ongoing support and maintenance for your solutions?
          </p>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">
            Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.
          </p>
        </li>

        {/* FAQ Item 5 */}
        <li className="flex flex-col gap-1.5">
          <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
            How do I get started?
          </p>
          <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm leading-relaxed tracking-tight sm:text-base">
            Set up a demo and we'll guide you through our offerings and start a trial!
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQSection;
