import { component$, useSignal } from "@builder.io/qwik";

export default component$(
  (props: {
    authorRole: string;
    authorName: string;
    authorImage: string;
    description: string;
  }) => {
    const authorName = useSignal(props.authorName);
    const description = useSignal(props.description);
    const authorRole = useSignal(props.authorRole);
    return (
      <div class="">
        <div
          class="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial"
          data-wow-delay=".1s"
        >
          <div class="ud-testimonial-ratings mb-3 flex items-center">
            <span class="mr-1 text-[#fbb040]">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                class="fill-current"
              >
                <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
              </svg>
            </span>
            <span class="mr-1 text-[#fbb040]">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                class="fill-current"
              >
                <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
              </svg>
            </span>
            <span class="mr-1 text-[#fbb040]">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                class="fill-current"
              >
                <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
              </svg>
            </span>
            <span class="mr-1 text-[#fbb040]">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                class="fill-current"
              >
                <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
              </svg>
            </span>
            <span class="mr-1 text-[#fbb040]">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                class="fill-current"
              >
                <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
              </svg>
            </span>
          </div>
          <div class="ud-testimonial-content mb-6">
            <p class="text-base tracking-wide text-[#637381]">{description}</p>
          </div>
          <div class="ud-testimonial-info flex items-center">
            <div class="ud-testimonial-image mr-5 overflow-hidden rounded-full">
              <img
                src={props.authorImage}
                alt="author"
                width="50"
                height="50"
              />
            </div>
            <div class="ud-testimonial-meta">
              <h4 class="text-sm font-semibold text-black">{authorName}</h4>
              <p class="text-xs text-[#969696]">{authorRole}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
