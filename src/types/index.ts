export interface IRole {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface IAbility {
  displayName: string;
  description: string;
  displayIcon: string;
  slot: string;
}

export interface IAgent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  fullPortraitV2: string;
  role: IRole;
  abilities: IAbility[];
  isPlayableCharacter: boolean;
  background: string;
}

export interface IMap{
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
}

export interface ApiResponse<T>{
  data: T[];
  status: number;
}
