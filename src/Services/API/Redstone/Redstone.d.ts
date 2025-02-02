import { HttpModel, Event, Client, Tag } from '@Interfaces';

declare namespace RedstoneModel {
  export interface CreateEventOptions extends HttpModel.IRequestPayload {
    name: string;
    description: string;
  }

  export interface CreateEventResponse {
    message: string;
    event: Event;
  }

  export interface GetEventListResponse {
    eventList: Event[];
  }

  export interface ClientLogInResponse {
    message: string;
    client: Client;
  }

  export interface UpdateClientOptions extends HttpModel.IRequestPayload {
    nickname?: string;
    description?: string;
    avatar?: string;
  }

  export interface UpdateClientResponse {
    message: string;
    client: Client;
  }

  export interface UpdateNewsOptions extends HttpModel.IRequestPayload {
    title?: string;
    source?: string;
    abstract?: string;
    time?: Date;
    comment?: string;
    status?: string;
    url?: string;
  }

  export interface UpdateNewsResponse {
    message: string;
    news: News;
  }

  export interface CreateNewsOptions extends HttpModel.IRequestPayload {
    title: string;
    source: string;
    abstract: string;
    time: Date;
    comment?: string;
    status?: string;
    url: string;
  }

  export interface CreateNewsResponse extends UpdateNewsResponse {}

  export interface GetTagListResponse {
    tags: Tag[];
  }

  export interface CreateTagResponse {
    message: string;
    tag: Tag;
  }

  export interface GetTagResponse {
    tag: Tag;
  }

  export interface UpdateTagOptions extends HttpModel.IRequestPayload {
    name?: string;
    description?: string;
    redirectTo?: number;
  }

  export interface UpdateTagResposne {
    message: string;
  }

  export interface AddTagCuratorResponse {
    message: string;
    tagId?: number;
    curatorId?: number;
  }

  export interface RemoveCuratorResponse {
    message: string;
    tagId?: number;
    curatorId?: number;
  }
}

export { RedstoneModel };
