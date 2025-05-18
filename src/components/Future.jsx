import React from 'react'

export default function Future() {
    return (
        <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
  <article className="bg-[rgb(139,92,246)]/15 dark:bg-[rgb(124 58 237)]/15 flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
    
    {/* Left Text Section */}
    <div className="flex flex-col gap-2">
      <h4 className="text-text-primary dark:text-dark-text-primary text-3xl font-medium lg:text-4xl">
        We've Built the Future of Data Centers
      </h4>
      <p className="text-text-secondary dark:text-dark-text-secondary text-lg lg:text-xl">
        Contact our team for a demo
      </p>
    </div>

    {/* Buttons Section */}
    <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
      <a
        href="https://calendly.com/margarita-centralaxis/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="ring-control bg-[rgb(139,92,246)] hover:bg-purple-500 text-textOnAccent-primary border-[rgb(139,92,246)] inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
      >
        Set Up a Time
      </a>
      
      <a
        href="/learn-more"
        className="ring-control bg-surface-secondary text-text-primary dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-full border border-border px-3.5 text-sm font-normal outline-none outline-0 focus-visible:ring-2 md:px-5"
      >
        Learn More
      </a>
    </div>

  </article>
</section>


  )
}

