import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  getContent,
  RenderContent,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "../../components/builder-registry";

export const useBuilderContent = routeLoader$(async ({ url, error }) => {
  const isPreviewing = url.searchParams.has("builder.preview");

  const builderContent = await getContent({
    model: "page",
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  if (!builderContent && !isPreviewing) {
    throw error(404, "Page not found");
  }

  return builderContent;
});

export default component$(() => {
  const builderContent = useBuilderContent();

  return (
    <RenderContent
      model="page"
      content={builderContent.value}
      apiKey={import.meta.env.PUBLIC_BUILDER_API_KEY}
      customComponents={CUSTOM_COMPONENTS}
    />
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const builderContent = resolveValue(useBuilderContent);
  return {
    title: builderContent?.data?.title,
  };
};
