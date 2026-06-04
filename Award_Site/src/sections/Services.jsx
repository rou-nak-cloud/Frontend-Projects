export default function Services() {
  return (
    <>
      <div className="bg-white text-black">
        <div className="services main-container pb-4 lg:pb-8">
          <h3 className="font-base">Services in Detail</h3>
        </div>
      </div>

      <div className="relative ">
        <div className="bg-black text-white pt-14 lg:pt-20 sticky top-5 pb-120">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left side */}
            <div className="flex gap-4 lg:gap-6">
              <span className=" text-l lg:text-2xl font-bold font-heading tracking-wide mb-4 block">
                01.
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-8 lg:leading-11">
                Web Design <br /> & UI/UX
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center gap-4 lg:gap-6">
              <p className="text-xl lg:text-2xl leading-7">
                We create beautiful, functional websites that help your business
                stand out in the digital landscape. Our design process focuses
                on user experience, ensuring that your site is not only visually
                appealing but also easy to navigate and optimized for
                conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#e9e9f0] text-black pt-14 lg:pt-20 pb-80 sticky top-1/3 rounded-tl-4xl rounded-tr-4xl">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left side */}
            <div className="flex gap-4 lg:gap-6">
              <span className=" text-l lg:text-2xl font-bold font-heading tracking-wide mb-4 block">
                02.
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-8 lg:leading-11">
                Shopify <br /> Development
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center gap-4 lg:gap-6">
              <p className="text-xl lg:text-2xl leading-7">
                Utilizing Liquid (Shopify’s templating language) or modern
                headless frameworks like Hydrogen (built on React/Remix).
                Expanding default platform capabilities through custom app
                creation using GraphQL, REST Admin APIs, and Shopify Functions.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-black pt-14 lg:pt-20 sticky top-1/3 rounded-tl-4xl rounded-tr-4xl">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left side */}
            <div className="flex gap-4 lg:gap-6">
              <span className=" text-l lg:text-2xl font-bold font-heading tracking-wide mb-4 block">
                03.
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-8 lg:leading-11">
                Creating <br /> Branding
              </h2>
            </div>
            {/* right side */}
            <div className="flex items-center gap-4 lg:gap-6">
              <p className="text-xl lg:text-2xl leading-7">
                Creating a brand—or branding—is the deliberate process of
                shaping how a company, product, or individual is perceived by
                the world. It is far more than just designing a logo or picking
                a color palette; it is about building a cohesive identity, an
                emotional connection that turns casual observers into loyal
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
