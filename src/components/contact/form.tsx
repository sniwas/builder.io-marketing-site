import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div
        class="wow fadeInUp rounded-lg bg-white  py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
        data-wow-delay=".2s"
      >
        <h3 class="mb-8 text-2xl text-black font-semibold md:text-[26px]">
          Send us a Message
        </h3>
        <form>
          <div class="mb-6">
            <label for="fullName" class="block text-xs text-[#090E34]">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Adam Gelius"
              class="w-full border-0 text-black border-b border-[#f1f1f1] py-4 focus:border-[#3056D3] focus:outline-none"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block text-xs text-[#090E34]">
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@yourmail.com"
              class="w-full text-black border-0 border-b border-[#f1f1f1] py-4 focus:border-[#3056D3] focus:outline-none"
            />
          </div>
          <div class="mb-6">
            <label for="phone" class="block text-xs text-[#090E34]">
              Phone*
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+91 987 654 3210 "
              class="w-full border-0 text-black border-b border-[#f1f1f1] py-4 focus:border-[#3056D3] focus:outline-none"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block text-xs text-[#090E34]">
              Message*
            </label>
            <textarea
              name="message"
              placeholder="type your message here"
              class="w-full text-black resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-[#3056D3] focus:outline-none"
            ></textarea>
          </div>
          <div class="mb-0">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded bg-[#3056D3] py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-[#090E34]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
