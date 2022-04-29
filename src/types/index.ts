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
}

export interface ApiResponse{
  data: IAgent[];
  status: number;
}
