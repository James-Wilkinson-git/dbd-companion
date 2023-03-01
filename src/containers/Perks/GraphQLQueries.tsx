import { gql } from "@apollo/client";
export const PERKS = gql`
  query GetAllPerks {
    perks {
      name
      description
      icon
      character {
        name
        role
      }
    }
  }
`;
export const CHARACTERS = gql`
  query GetAllCharacters {
    characters {
      id
      name
      role
    }
  }
`;
export const PERKS_BY_CHAR_ID = gql`
  query GetPerksByCharacterID($characterId: ID!) {
    perks(characterId: $characterId) {
      name
      description
      icon
      character {
        name
        role
      }
    }
  }
`;
export const SEARCH_PERKS = gql`
  query SearchPerks($query: String!) {
    perks(query: $query) {
      name
      description
      icon
      character {
        name
        role
      }
    }
  }
`;
