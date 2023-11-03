import {
  component$,
  useVisibleTask$,
  useOnWindow,
  $,
  useSignal,
} from "@builder.io/qwik";
import "./header.module.css";

export default component$((props: { logo: string; logo_white: string }) => {
  const logo = props.logo;
  const logo_white = props.logo_white;
  const isSticky = useSignal(false);

  useVisibleTask$(() => {
    const navbarToggler = document.querySelector("#navbarToggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");

    navbarToggler?.addEventListener("click", () => {
      navbarToggler?.classList.toggle("navbarTogglerActive");
      navbarCollapse?.classList.toggle("hidden");
    });

    //===== close navbar-collapse when a  clicked
    document
      .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
      .forEach((e) =>
        e.addEventListener("click", () => {
          navbarToggler?.classList.remove("navbarTogglerActive");
          navbarCollapse?.classList.add("hidden");
        })
      );
  });

  useOnWindow(
    "scroll",
    $(() => {
      const ud_header = document.querySelector(".ud-header");
      const sticky = (ud_header as HTMLElement).offsetTop;

      if (ud_header) {
        if (window.scrollY > sticky) {
          ud_header.classList.add("sticky");
          isSticky.value = true;
        } else {
          isSticky.value = false;
          ud_header.classList.remove("sticky");
        }
      }
    })
  );

  return (
    <div class="h-[60px]">
      <div class="ud-header absolute top-0 left-0 z-40 flex w-full  items-center bg-[#3056D3]">
        <div class="container mx-auto">
          <div class="relative flex w-full items-center justify-between">
            <div class="w-60 max-w-full px-4">
              <a href="/" class="navbar-logo block w-full py-5">
                <img
                  src={isSticky.value ? logo : logo_white}
                  width={157}
                  height={55}
                />
              </a>
            </div>
            <div class="flex  items-center  ">
              <div>
                <button
                  id="navbarToggler"
                  class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span class="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                >
                  <ul class="block lg:flex">
                    <li class="group relative">
                      <a
                        href="/"
                        class="ud-menu-scroll  flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </a>
                    </li>
                    <li class="group relative">
                      <a
                        href="/"
                        class="ud-menu-scroll  flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        About
                      </a>
                    </li>
                    <li class="group relative">
                      <a
                        href="/"
                        class="ud-menu-scroll  flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Pricing
                      </a>
                    </li>
                    <li class="group relative">
                      <a
                        href="/"
                        class="ud-menu-scroll  flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Contact
                      </a>
                    </li>
                    {/* <li class="group relative">
                      <a
                        href="/"
                        class="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Team
                      </a>
                    </li> */}

                    {/* <li class="submenu-item group relative">
                      <a
                        
                        class="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Pages
                      </a>
                      <div class="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          About Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Pricing Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Contact Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Blog Grid Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Blog Details Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Sign Up Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          Sign In Page
                        </a>
                        <a
                          href="/"
                          class="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                        >
                          404 Page
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
            <div class="flex  items-center  pr-4">
              <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="/"
                  class="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="/"
                  class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
