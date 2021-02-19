import { DocumentNode } from 'graphql'

declare module '*.gql' {
  const content: DocumentNode;
  export default content;
}
