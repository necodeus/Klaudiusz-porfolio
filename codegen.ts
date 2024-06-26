
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  generates: {
    "gql/": {
      preset: "client",
      schema: "https://klaudiuszdev.pl/graphql",
      documents: "./gql-queries",
      plugins: [],
      overwrite: true,
    },
    "graphql.d.ts": {
      schema: "https://klaudiuszdev.pl/graphql",
      documents: "./gql-queries",
      plugins: ["typescript-graphql-files-modules"],
      overwrite: true,
    },
  },
};

export default config;
