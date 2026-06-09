export interface Episode {
  ep_id: string;
  ep_title: string;
  ep_desc: string;
  ep_featured?: boolean;
}
export interface CreateEpisodeDto {
  id: string;
  ep_title: string;
  ep_desc: string;
  ep_featured?: boolean;
}
