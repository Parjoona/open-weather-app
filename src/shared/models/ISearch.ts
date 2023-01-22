export interface ISearchResponse {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state?: string;
  // Ignoring this for now
  local_names: [];
}
