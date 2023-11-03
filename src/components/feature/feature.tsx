import { component$, useSignal } from "@builder.io/qwik";

export default component$(
  (props: {
    title: string;
    buttonText: string;
    image: string;
    description: string;
  }) => {
    // const image = useSignal(props.image);
    const title = useSignal(props.title);
    const description = useSignal(props.description);
    const buttonText = useSignal(props.buttonText);
    return (
      <div class="w-full">
        <div
          class="wow fadeInUp group mb-12 bg-white text-black"
          data-wow-delay=".1s"
        >
          <div class="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]">
            <span class="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-[#3056D3] bg-opacity-20 duration-300 group-hover:rotate-45"></span>
            <img
              src={props.image}
              alt={props.title}
              width="35"
              height="35"
              class="max-w-full max-h-full"
            />
          </div>
          <h4 class="mb-3 text-xl font-bold  text-[#090E34]">{title}</h4>
          <p class="mb-8 text-[#637381] lg:mb-11">{description}</p>
          <a
            href="/"
            class="text-base font-medium text-[#637381] hover:text-[#3056D3]"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
);
