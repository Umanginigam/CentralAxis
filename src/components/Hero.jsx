const Hero = () => {
    return (


        <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10 font-sans">
        {/* Background Grid */}
          <div className="dark:border-dark-border absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
          <div className="col-span-1 flex h-full items-center justify-center"></div>
          <div className="dark:border-dark-border col-span-1 flex h-full items-center justify-center border-x border-border"></div>
          <div className="col-span-1 flex h-full items-center justify-center"></div>
        </div>
      
        {/* Background Blurs */}
        <figure className="bg-[rgb(139,92,246)] pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]"></figure>
        <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block"></figure>
        <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block"></figure>
      
        {/* Content */}
        <div className="dark:divide-dark-border relative z-10 flex flex-col divide-y divide-border pt-[35px] font-sans">
          <div>
            <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
              <h1 className="text-text-primary dark:text-dark-text-primary max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[1.44px] md:tracking-[2.16px]">
                Data Center Management Software
              </h1>
              <h2 className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg">
                Increase uptime, reduce costs, automate operations, and stay compliant.
              </h2>
              <h2 className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-pretty text-center md:text-lg">
                Built for colocations, data centers, and cloud providers.
              </h2>
            </div>
          </div>
      
          <div className="flex items-start justify-center px-8 sm:px-24 font-sans">
          <div className={`
          flex flex-col items-center justify-center
          w-full max-w-[80vw] md:max-w-[392px] h-[56px]
    bg-[rgb(139,92,246)]
    border-t border-l border-r border-b-0
    border-solid
    border-t-[rgb(124,58,237)] 
    border-l-[rgb(124,58,237)] 
    border-r-[rgb(124,58,237)]
    border-b-[0px]
    rounded-none
    box-border
    text-[rgb(250,250,250)]
    cursor-auto
    gap-y-1
    px-5
    font-sans
    text-base
    font-normal
    leading-[25.6px]
    tracking-[-0.48px]
    [font-feature-settings:"calt","rlig"]
    [font-variation-settings:normal]
    flex-shrink-0
    [color-scheme:dark]
`}>
    <a
        className="ring-control bg-accent-500 hover:bg-accent-600 text-textOnAccent-primary border-accent-600 flex inline-flex h-14 w-full shrink-0 flex-col items-center justify-center gap-1 rounded-full px-5 text-base font-normal outline-none focus-visible:ring-2"
        href="https://calendly.com/margarita-centralaxis/30min"
        target="_blank"
        rel="noopener noreferrer"
    >
        Request Demo
    </a>
</div>

          </div>
        </div>
      </section>
      
    );
  };
  
  export default Hero;
  