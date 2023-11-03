import { component$ } from "@builder.io/qwik";

export default component$(
  (props: { clientImage: string; redirectUrl: string }) => {
    return (
      <div class="ud-single-logo mr-10 mb-5 max-w-[140px]">
        <a href={props.redirectUrl} target="_blank" rel="nofollow noopner">
          <img
            src={props.clientImage}
            alt="tailgrids"
            class="grayscale duration-300 hover:filter-none"
            width={140}
            height={50}
          />
        </a>
      </div>
    );
  }
);
