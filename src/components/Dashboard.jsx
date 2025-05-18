import React from "react";

export default function Dashboard() {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px] font-sans">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-3 self-center">
        <h3 className="bg-gray-100 dark:bg-gray-800 text-text-tertiary dark:bg-dark-surface-secondary dark:text-dark-text-tertiary flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
          Built for AI
        </h3>

        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl">
            Modernizing the Digital Backbone
          </h4>
        </div>

        <p className="text-text-tertiary dark:text-dark-text-tertiary max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
          "Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way."
        </p>
      </div>

      {/* Articles Section */}
      <div className="flex flex-col gap-6 font-sans ">
        {/* Article 1 */}
        <article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius)",
                display: "block",
                height: "100%",
                width: "100%",
                aspectRatio: "16/9",
                inset: 0,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://www.centralaxis.com/posters/monitoring.png"
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/hb-monitoring.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </figure>

          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                Advanced Monitoring
              </h5>
              <p className="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary">
              CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.
              </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {/* List Item 1 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Real-time performance metrics and predictive analytics
                </li>

                {/* List Item 2 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  AI-assisted capacity planning
                </li>

                {/* List Item 3 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Smart alerts and anomaly detection
                </li>
              </ul>
            </div>
          
        </article>
        {/* Article 2 */}
        <article class="bg-surface-secondary dark:bg-dark-surface-secondary dark:border-dark-border border border-border rounded-lg flex flex-col md:flex-row md:odd:flex-row-reverse w-full max-w-[380px] md:max-w-full p-px">
  <figure class="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
    <div class="relative overflow-hidden rounded-lg w-full aspect-video">
         <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://www.centralaxis.com/posters/networking.png"
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/landing/networking-b.mp4"
                  type="video/mp4"
                />
              </video>
    </div>
  </figure>

  <div class="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
    <div class="flex flex-col items-start gap-2">
      <h5 class="text-2xl md:text-3xl font-medium text-text-primary dark:text-dark-text-primary">
        Network Management and Monitoring
      </h5>
      <p class="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary">
        Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.
      </p>
    </div>

    <ul class="flex flex-col items-start gap-3 pl-2 md:text-lg">
      <li class="flex items-center gap-4 text-text-secondary dark:text-dark-text-secondary font-normal">
        <span class="flex size-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-text-tertiary dark:text-dark-text-tertiary">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 3.73c.29.19.37.58.18.87L7.4 11.09a.75.75 0 0 1-1.01.12l-2.75-2.5a.67.67 0 1 1 .88-.98l2.21 2.01L10.6 3.91a.67.67 0 0 1 .87-.18z" fill="currentColor"/>
          </svg>
        </span>
        Real-time network performance monitoring and bandwidth optimization
      </li>

      <li class="flex items-center gap-4 text-text-secondary dark:text-dark-text-secondary font-normal">
        <span class="flex size-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-text-tertiary dark:text-dark-text-tertiary">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 3.73c.29.19.37.58.18.87L7.4 11.09a.75.75 0 0 1-1.01.12l-2.75-2.5a.67.67 0 1 1 .88-.98l2.21 2.01L10.6 3.91a.67.67 0 0 1 .87-.18z" fill="currentColor"/>
          </svg>
        </span>
        Automated network security and threat detection
      </li>
      <li class="flex items-center gap-4 text-text-secondary dark:text-dark-text-secondary font-normal">
        <span class="flex size-6 min-w-[1.5rem] items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-text-tertiary dark:text-dark-text-tertiary">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 3.73c.29.19.37.58.18.87L7.4 11.09a.75.75 0 0 1-1.01.12l-2.75-2.5a.67.67 0 1 1 .88-.98l2.21 2.01L10.6 3.91a.67.67 0 0 1 .87-.18z" fill="currentColor"/>
          </svg>
        </span>
        Advanced network diagnostics and troubleshooting tools
      </li>
    

      
    </ul>
  </div>
</article>
        {/* Article 3 */}
<article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius)",
                display: "block",
                height: "100%",
                width: "100%",
                aspectRatio: "16/9",
                inset: 0,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/landing/asset-management-b.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </figure>

          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              Asset Management

              </h5>
              <p className="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary">
              Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.
              </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {/* List Item 1 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Automated inventory tracking and lifecycle management

                </li>

                {/* List Item 2 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Intelligent ticketing based on asset health and performance
                </li>

                {/* List Item 3 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Efficient resource allocation and optimization
                </li>
              </ul>
            </div>
          
        </article>
        {/* Article 4 */}
        <article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius)",
                display: "block",
                height: "100%",
                width: "100%",
                aspectRatio: "16/9",
                inset: 0,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/landing/SinglePane-b.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </figure>

          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              A Single Pane of Glass
              </h5>
              <p className="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary">
              A unified view across all of your BMS and EPMS systems, tailored to your needs.
              </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {/* List Item 1 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Comprehensive visibility across all of your colocation infrastructure
                </li>

                {/* List Item 2 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Customizable interface tailored to your specific operational requirements and priorities.
                </li>

                {/* List Item 3 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.
                </li>
              </ul>
            </div>
          
        </article>
        {/* Article 5 */}
        <article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius)",
                display: "block",
                height: "100%",
                width: "100%",
                aspectRatio: "16/9",
                inset: 0,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/landing/__compliance.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </figure>

          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              Built-In Compliance
              </h5>
              <p className="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary ">
                <br></br>
              CentralAxis provides compliance as a service for data centers.
              </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {/* List Item 1 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Track data for EU, US, and global regulatary standards.
                </li>

                {/* List Item 2 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  We guarantee compliance and handle every step between monitoring and reporting.
                </li>

                
              </ul>
            </div>
          
        </article>
        {/* Article 6 */}
        <article className="bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
          <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius)",
                display: "block",
                height: "100%",
                width: "100%",
                aspectRatio: "16/9",
                inset: 0,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  aspectRatio: "16/9",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  border: "none",
                  objectFit: "contain",
                  borderRadius: "var(--radius)",
                }}
              >
                <source
                  src="https://www.centralaxis.com/landing/dc-planning.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </figure>

          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              Data Center Planning
              </h5>
              <p className="text-base md:text-lg font-normal text-text-secondary dark:text-dark-text-secondary">
              Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.
              </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {/* List Item 1 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Model new architectures and see detailed implications on power and cooling needs.
                </li>

                {/* List Item 2 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Design unique specifications for your data center.
                </li>

                {/* List Item 3 */}
                <li className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal">
                  <span
                    className="bg-gray-100 dark:bg-gray-800 flex size-6 items-center justify-center rounded-full"
                    style={{ minWidth: "1.5rem" }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-text-tertiary dark:text-dark-text-tertiary"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.
                </li>
              </ul>
            </div>
          
        </article>


       
      </div>
    </section>
    
  
  );
}
