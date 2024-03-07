import { Typography } from "@/app/ui/design-system/Typography/Typography";
import type { DrupalNode } from "next-drupal";

interface BasicPageProps {
  nodeContent: DrupalNode;
}

export default async function BasicPage({ nodeContent }: BasicPageProps) {
  return (
    <article>
      <Typography variant="display" className="text-red-200">
        {nodeContent.title}
      </Typography>
      {nodeContent.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: nodeContent.body?.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
  );
}
