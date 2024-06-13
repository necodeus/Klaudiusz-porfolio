/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query BlogPost($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    title\n    content\n    date\n    author {\n      node {\n        firstName\n        lastName\n        email\n      }\n    }\n    seo {\n      title\n      description\n      fullHead\n    }\n  }\n}": types.BlogPostDocument,
    "query HomePage {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n      }\n      about {\n        title\n        description\n        services {\n          description\n          icon\n          title\n        }\n      }\n      websiteprocces {\n        title\n        description\n        itemsBlock {\n          num\n          title\n          description\n        }\n      }\n      offertshome {\n        title\n        description\n        image {\n          mediaDetails {\n            sizes {\n              name\n              width\n              height\n              sourceUrl\n            }\n          }\n        }\n      }\n      tools {\n        title\n        description\n        charts {\n          text\n          width\n        }\n      }\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n  posts(first: 3) {\n    nodes {\n      slug\n      title\n      excerpt\n      date\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n}": types.HomePageDocument,
    "query HomePage2 {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}": types.HomePage2Document,
    "query Menus {\n  menus {\n    nodes {\n      footer {\n        email\n        text\n        phone\n      }\n      id\n      databaseId\n      slug\n      name\n      menuItems {\n        edges {\n          node {\n            id\n            url\n            label\n            path\n          }\n        }\n      }\n    }\n  }\n}": types.MenusDocument,
    "query OnlineStoresPage {\n  page(id: \"cG9zdDoyNDU=\") {\n    onlieStores {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}": types.OnlineStoresPageDocument,
    "query OnlineStoresPageHome {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}": types.OnlineStoresPageHomeDocument,
    "query ProjectsPage {\n  page(id: \"cG9zdDoyNzA=\") {\n    realisation {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}": types.ProjectsPageDocument,
    "query WebsitesPage {\n  page(id: \"cG9zdDoxMTI=\") {\n    websites {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n        image {\n          mediaDetails {\n            sizes {\n              width\n              height\n              name\n              sourceUrl\n            }\n          }\n        }\n      }\n      professionalSites {\n        title\n        description\n      }\n      websiteBenefits {\n        title\n        description\n        benefitsItems {\n          title\n          description\n        }\n      }\n      offerpagetypes {\n        title\n        items {\n          title\n          description\n        }\n      }\n    }\n  }\n}": types.WebsitesPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query BlogPost($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    title\n    content\n    date\n    author {\n      node {\n        firstName\n        lastName\n        email\n      }\n    }\n    seo {\n      title\n      description\n      fullHead\n    }\n  }\n}"): (typeof documents)["query BlogPost($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    title\n    content\n    date\n    author {\n      node {\n        firstName\n        lastName\n        email\n      }\n    }\n    seo {\n      title\n      description\n      fullHead\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HomePage {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n      }\n      about {\n        title\n        description\n        services {\n          description\n          icon\n          title\n        }\n      }\n      websiteprocces {\n        title\n        description\n        itemsBlock {\n          num\n          title\n          description\n        }\n      }\n      offertshome {\n        title\n        description\n        image {\n          mediaDetails {\n            sizes {\n              name\n              width\n              height\n              sourceUrl\n            }\n          }\n        }\n      }\n      tools {\n        title\n        description\n        charts {\n          text\n          width\n        }\n      }\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n  posts(first: 3) {\n    nodes {\n      slug\n      title\n      excerpt\n      date\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query HomePage {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n      }\n      about {\n        title\n        description\n        services {\n          description\n          icon\n          title\n        }\n      }\n      websiteprocces {\n        title\n        description\n        itemsBlock {\n          num\n          title\n          description\n        }\n      }\n      offertshome {\n        title\n        description\n        image {\n          mediaDetails {\n            sizes {\n              name\n              width\n              height\n              sourceUrl\n            }\n          }\n        }\n      }\n      tools {\n        title\n        description\n        charts {\n          text\n          width\n        }\n      }\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n  posts(first: 3) {\n    nodes {\n      slug\n      title\n      excerpt\n      date\n      featuredImage {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HomePage2 {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query HomePage2 {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Menus {\n  menus {\n    nodes {\n      footer {\n        email\n        text\n        phone\n      }\n      id\n      databaseId\n      slug\n      name\n      menuItems {\n        edges {\n          node {\n            id\n            url\n            label\n            path\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Menus {\n  menus {\n    nodes {\n      footer {\n        email\n        text\n        phone\n      }\n      id\n      databaseId\n      slug\n      name\n      menuItems {\n        edges {\n          node {\n            id\n            url\n            label\n            path\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OnlineStoresPage {\n  page(id: \"cG9zdDoyNDU=\") {\n    onlieStores {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query OnlineStoresPage {\n  page(id: \"cG9zdDoyNDU=\") {\n    onlieStores {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OnlineStoresPageHome {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query OnlineStoresPageHome {\n  page(id: \"cG9zdDoyMw==\") {\n    home {\n      whyme {\n        title\n        boxs {\n          title\n          description\n        }\n      }\n      acordin {\n        title\n        description\n        acordinItems {\n          question\n          answer\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProjectsPage {\n  page(id: \"cG9zdDoyNzA=\") {\n    realisation {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query ProjectsPage {\n  page(id: \"cG9zdDoyNzA=\") {\n    realisation {\n      hero {\n        title\n        description\n        button {\n          text\n          url\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query WebsitesPage {\n  page(id: \"cG9zdDoxMTI=\") {\n    websites {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n        image {\n          mediaDetails {\n            sizes {\n              width\n              height\n              name\n              sourceUrl\n            }\n          }\n        }\n      }\n      professionalSites {\n        title\n        description\n      }\n      websiteBenefits {\n        title\n        description\n        benefitsItems {\n          title\n          description\n        }\n      }\n      offerpagetypes {\n        title\n        items {\n          title\n          description\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query WebsitesPage {\n  page(id: \"cG9zdDoxMTI=\") {\n    websites {\n      hero {\n        title\n        description\n        button {\n          label\n          url\n        }\n        image {\n          mediaDetails {\n            sizes {\n              width\n              height\n              name\n              sourceUrl\n            }\n          }\n        }\n      }\n      professionalSites {\n        title\n        description\n      }\n      websiteBenefits {\n        title\n        description\n        benefitsItems {\n          title\n          description\n        }\n      }\n      offerpagetypes {\n        title\n        items {\n          title\n          description\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;