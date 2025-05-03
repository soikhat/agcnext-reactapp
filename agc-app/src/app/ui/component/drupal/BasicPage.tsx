import { Typography } from "@/app/ui/design-system/Typography/Typography";
import type { DrupalNode } from "next-drupal";

interface BasicPageProps {
  node: DrupalNode;
}

export default async function BasicPage({ node, ...props }: BasicPageProps) {
  return (
    <article {...props}>
      <Typography variant="display" className="text-primary">
        {node.title}
      </Typography>
      <Typography variant="caption1" className="text-primary">
        {node.body}
      </Typography>
    </article>
  );
}
