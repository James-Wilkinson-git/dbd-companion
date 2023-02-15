//JS Import
import React, { FC, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Perk } from "../../components/Perk/Perk";
import { BackButton } from "../../components/BackBtn/BackButton";
import { Button, Collapse } from "react-bootstrap";
import "./Perks.scss";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

export interface ICharacter {
  id?: string;
  name?: string;
  role?: string;
}
export interface IPerk {
  name?: string;
  description?: string;
  icon?: string;
  character?: ICharacter;
}

export const Perks: FC = () => {
  const [openFilters, setFiltersOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const [perks, setPerks] = useState([] as IPerk[]);
  const [searchValue, setSearchValue] = useState("");
  const PERKS = gql`
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
  const CHARACTERS = gql`
    query GetAllCharacters {
      characters {
        id
        name
        role
      }
    }
  `;
  const PERKS_BY_CHAR_ID = gql`
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
  const SEARCH_PERKS = gql`
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

  const {
    loading: perksLoading,
    error: perksError,
    data: perksData,
  } = useQuery(PERKS);
  const {
    loading: charLoading,
    error: charError,
    data: charData,
  } = useQuery(CHARACTERS);
  const [
    getCharacterPerks,
    { loading: charPerksLoading, data: charPerksData },
  ] = useLazyQuery(PERKS_BY_CHAR_ID);

  const [searchPerks, { loading: searchPerksLoading, data: searchPerksData }] =
    useLazyQuery(SEARCH_PERKS);

  const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    getCharacterPerks({ variables: { characterId: event.target.value } });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const onSearch = () => {
    searchPerks({ variables: { query: searchValue } });
  };

  useEffect(() => {
    if (perksData) {
      setPerks(perksData.perks);
    }
  }, [perksData]);

  useEffect(() => {
    if (charPerksData) {
      setPerks(charPerksData.perks);
    }
  }, [charPerksData]);

  useEffect(() => {
    if (searchPerksData) {
      setPerks(searchPerksData.perks);
    }
  }, [searchPerksData]);

  return (
    <Container>
      <Row>
        <BackButton />
        <div className="filtersBtn">
          <button
            className="filtersBtn"
            onClick={() => setFiltersOpen(!openFilters)}
            aria-controls="Filters Closed"
            aria-expanded={openFilters}
          >
            Filters
          </button>
        </div>
        <div className="filtersBtn">
          <button
            className="filtersBtn"
            onClick={() => setSearchOpen(!openSearch)}
            aria-controls="Search Closed"
            aria-expanded={openSearch}
          >
            Search
          </button>
        </div>
      </Row>
      <Collapse in={openFilters} className="mb-3">
        <Row>
          <Col xs={12} md={4}>
            <div>
              <select
                name="Killers"
                id="killerSelect"
                onChange={onChangeFilter}
              >
                <option value="">Killers</option>
                {!charLoading &&
                  !charError &&
                  charData.characters.map((char: ICharacter) => {
                    if (char.role === "Killer") {
                      return (
                        <option value={char.id} key={char.id}>
                          {char.name}
                        </option>
                      );
                    }
                    return null;
                  })}
              </select>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <select
                name="Survivors"
                id="survivorSelect"
                onChange={onChangeFilter}
              >
                <option value="">Survivors</option>
                {!charLoading &&
                  !charError &&
                  charData.characters.map((char: ICharacter) => {
                    if (char.role === "Survivor") {
                      return (
                        <option value={char.id} key={char.id}>
                          {char.name}
                        </option>
                      );
                    }
                    return null;
                  })}
              </select>
            </div>
          </Col>
        </Row>
      </Collapse>
      <Collapse in={openSearch} className="mb-3">
        <div id="Search-Open">
          <input
            type="text"
            name="search"
            placeholder="Perk Name or Description"
            value={searchValue}
            className="perkSearch mr-1 float-left"
            onChange={handleSearchChange}
          />
          <Button variant="danger" onClick={onSearch}>
            Search
          </Button>
        </div>
      </Collapse>
      <Row>
        <Col>
          <h2>Perks List</h2>
          {perksLoading && <p>Loading...</p>}
          {perksError && <p>Error</p>}
          {!perksLoading && !perksError && (
            <div className="perksContainer">
              {perks.map((perk: IPerk) => {
                return <Perk {...perk} key={perk.name} />;
              })}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
