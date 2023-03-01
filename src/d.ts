interface ICharacter {
  readonly id: string;
  readonly name: string;
  readonly role: "Killer" | "Survivor";
}
interface IPerk {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly character: ICharacter;
  readonly keywords?: string;
}
//Because this is data from an api set to readonly so we don't overwrite it by accident
interface SteamApi {
  readonly playerstats: Playerstats;
}
//Describe the object returned by the SteamAPI, because some options can be null make them optional
interface Playerstats {
  steamID: string;
  gameName: string;
  stats?: StatsEntity[] | null;
  achievements?: AchievementsEntity[] | null;
}
interface StatsEntity {
  name: string;
  value: number;
}
interface AchievementsEntity {
  name: string;
  achieved: number;
}

//Because the API isn't in our control it can change at anytime so support that with a generic interface
interface StatsLookup {
  [key: string]: string;
}

//Because useParams() returns a generic Type we have to use a type instead of an interface
type IURLParams = {
  steamid: string;
};

//Because we are describing what the data looks like we can use an interface
interface IStats {
  //because we are using the data to make another object set to readonly to not accidentally change the original data
  readonly [key: string]: string;
}
