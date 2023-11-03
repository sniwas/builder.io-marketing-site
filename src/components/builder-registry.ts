import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Aboutus from "./aboutus/aboutus";
import Clients from "./clients/clients";
import Contact from "./contact/contact";
import FAQ from "./faq/faq";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import Form from "./contact/form";
import Header from "./header/header";
import Testimonials from "./testimonials/testimonials";


export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Aboutus,
    name: "About us",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["svg"],
      },
      {
        name: "title",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "descriptionTextOne",
        type: "string",
      },
      {
        name: "descriptionTextTwo",
        type: "string",
      },
      {
        name: "buttonText",
        type: "string",
      },
    ],
  },
  {
    component: Clients,
    name: "Client",
    inputs: [
      {
        name: "clientImage",
        type: "file",
      },
      {
        name: "redirectUrl",
        type: "string",
      },
    ],
  },
  {
    component: Contact,
    name: "Contact us",
    inputs: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "address",
        type: "string",
      },
      {
        name: "emails",
        type: "string",
      },
    ],
  },
  {
    component: FAQ,
    name: "FAQ",
    inputs: [
      {
        name: "question",
        type: "string",
      },
      {
        name: "answer",
        type: "longText",
      },
    ],
  },
  {
    component: Feature,
    name: "Feature",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["svg"],
      },
      {
        name: "title",
        type: "string",
      },
      {
        name: "description",
        type: "string",
      },
      {
        name: "buttonText",
        type: "string",
      },
    ],
  },
  {
    component: Footer,
    name: "Footer",
    inputs: [
      {
        name: "logo",
        type: "file",
      },
      {
        name: "ayroui",
        type: "file",
      },
      {
        name: "ecommerce",
        type: "file",
      },
      {
        name: "graygrids",
        type: "file",
      },
      {
        name: "lineicons",
        type: "file",
      },
      {
        name: "uideck",
        type: "file",
      },
      {
        name: "tailgrids",
        type: "file",
      },
    ],
  },
  {
    component: Form,
    name: "Form",
    inputs: [],
  },
  {
    component: Header,
    name: "Header",
    inputs: [
      {
        name: "logo",
        type: "file",
      },
      {
        name: "logo_white",
        type: "file",
      },
    ],
  },
  {
    component: Testimonials,
    name: "Testimonial",
    inputs: [
      {
        name: "authorImage",
        type: "file",
      },
      {
        name: "authorName",
        type: "string",
      },
      {
        name: "authorRole",
        type: "string",
      },
      {
        name: "description",
        type: "string",
      },
    ],
  },
];
