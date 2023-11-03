import { component$, useSignal } from "@builder.io/qwik";

export default component$(
  (props: {
    title: string;
    heading: string;
    buttonText: string;
    image: string;
    descriptionTextOne: string;
    descriptionTextTwo: string;
  }) => {
    const title = useSignal(props.title);
    const heading = useSignal(props.heading);
    const descriptionTextOne = useSignal(props.descriptionTextOne);
    const descriptionTextTwo = useSignal(props.descriptionTextTwo);
    const buttonText = useSignal(props.buttonText);
    return (
      <div class="wow fadeInUp bg-white" data-wow-delay=".2s">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="items-center justify-between overflow-hidden border lg:flex">
              <div class="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                <span class="mb-5 inline-block bg-[#3056D3] py-2 px-5 text-sm font-medium text-white">
                  {title}
                </span>
                <h2 class="mb-6 text-3xl font-bold text-[#090E34] sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                  {heading}
                </h2>
                <p class="mb-9 text-base leading-relaxed text-[#637381]">
                  {descriptionTextOne}
                </p>
                <p class="mb-9 text-base leading-relaxed text-[#637381]">
                  {descriptionTextTwo}
                </p>
                <a
                  href="/"
                  class="inline-flex items-center justify-center rounded bg-[#3056D3] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                >
                  {buttonText}
                </a>
              </div>
              <div class="text-center">
                <div class="relative z-10 inline-block">
                  <img
                    src={props.image}
                    alt="image"
                    class="mx-auto lg:ml-auto"
                    width="630"
                    height="490"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
