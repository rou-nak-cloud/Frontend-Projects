export default function Marquee() {
  return (
    <>
      <div>
        <div className="marquee-container pb-28 lg:pb-32 bg-white text-black overflow-hidden relative">
          {/* row 1 */}
          <div className="marquee whitespace-nowrap animate-marquee text-5xl lg:text-7xl font-body tracking-wide">
            <span className="uppercase flex items-center gap-4 lg:gap-6 mx-5">
              design{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              create{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              inspire{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              innovate{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              design{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              create{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              inspire{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              innovate
            </span>
          </div>

          {/* row 2 */}
          <div className="marquee whitespace-nowrap animate-marquee-reverse text-5xl lg:text-7xl font-body tracking-wide">
            <span className="uppercase flex items-center gap-4 lg:gap-6 mx-5">
              design{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              create{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              inspire{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 *:"
                aria-hidden="true"
              />{" "}
              innovate{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              design{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              create{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0"
                aria-hidden="true"
              />{" "}
              inspire{" "}
              <span
                className="inline-block w-3 h-3 mx-4 bg-current rounded-full shrink-0 animate-pulse"
                aria-hidden="true"
              />{" "}
              innovate
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
