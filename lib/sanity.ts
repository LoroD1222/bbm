import { createClient } from "next-sanity";

const configuredProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const configuredDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!configuredProjectId || !configuredDataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.",
  );
}

export const projectId = configuredProjectId;
export const dataset = configuredDataset;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-08-10",
  useCdn: true,
});
