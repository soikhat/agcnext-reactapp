import { drupal } from "../../lib/drupal";
import type { DrupalNode } from "next-drupal";
import BasicPage from "../ui/component/drupal/BasicPage";

export default async function AboutPage() {
  const nodeContent = await drupal.getResource<DrupalNode>(
    "node--page",
    "7cf207f9-b651-40e7-a3e3-a3129bb400cf"
  );
  return (
    <>
      <article>
        <BasicPage nodeContent={nodeContent} />
      </article>
    </>
  );
}
