import PlayerInterface from "./PlayerInterface";

export const PATH_LIST = "/ships";
export const PATH_SHOW = (id: string): string => `/ships/${id}`;
export const PLAY_PATH_SHOW = (id: string): string => `/play/${id}`;
export const PLAY_PATH_EDIT = (id: string): string => `/play/${id}/edit`;

export default interface ShipInterface {
  id: string;
  name: string;
  owner?: PlayerInterface;
};
