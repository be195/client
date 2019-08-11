import { Endpoints } from 'detritus-client-rest';

import { ShardClient } from '../client';
import { AssetTypes } from '../constants';

import {
  BaseStructure,
  BaseStructureData,
} from './basestructure';
import { Team } from './team';
import { User, UserWithFlags, UserWithToken } from './user';


const keysOauth2Application: ReadonlyArray<string> = [
  'bot',
  'bot_public',
  'bot_require_code_grant',
  'description',
  'flags',
  'guild_id',
  'icon',
  'id',
  'name',
  'owner',
  'redirect_uris',
  'rpc_application_state',
  'secret',
  'store_application_state',
  'summary',
  'team',
  'verify_key',
];

/**
 * Oauth2 Application Structure
 * @category Structure
 */
export class Oauth2Application extends BaseStructure {
  readonly _keys = keysOauth2Application;

  bot?: UserWithToken;
  botPublic: boolean = false;
  botRequireCodeGrant: boolean = false;
  description: string = '';
  flags: number = 0;
  guildId?: string;
  icon: null | string = null;
  id: string = '';
  name: string = '';
  owner?: UserWithFlags;
  redirectUris: Array<string> = [];
  rpcApplicationState: number = 0;
  secret?: string;
  team?: Team;
  verifyKey: string = '';

  constructor(client: ShardClient, data: BaseStructureData) {
    super(client);
    this.merge(data);
  }

  mergeValue(key: string, value: any): void {
    if (value !== undefined) {
      switch (key) {
        case 'bot': {
          value = new UserWithToken(this.client, value);
        }; break;
        case 'owner': {
          if (this.client.users.has(value.id)) {
            // dont use the cache since this object has flags key, just update the cache
            (<User> this.client.users.get(value.id)).merge(value);
          }
          value = new UserWithFlags(this.client, value);
        }; break;
        case 'team': {
          let team: Team;
          if (this.team) {
            team = this.team;
            team.merge(value);
          } else {
            team = new Team(this.client, value);
          }
          value = team;
        }; break;
      }
      return super.mergeValue.call(this, key, value);
    }
  }
}


export const keysOauth2ApplicationAsset: ReadonlyArray<string> = [
  'application_id',
  'id',
  'name',
  'type',
];

export class Oauth2ApplicationAsset extends BaseStructure {
  readonly _keys = keysOauth2ApplicationAsset;

  applicationId: string = '';
  id: string = '';
  name: string = '';
  type: number = 0;

  constructor(client: ShardClient, data: BaseStructureData) {
    super(client);
    this.merge(data);
  }

  get extension(): string {
    switch (this.type) {
      case AssetTypes.IMAGE: return 'png';
      case AssetTypes.VIDEO: return 'mp4';
    }
    return '';
  }

  get isImage(): boolean {
    return this.type === AssetTypes.IMAGE;
  }

  get isVideo(): boolean {
    return this.type === AssetTypes.VIDEO;
  }

  get isYoutubeVideo(): boolean {
    return this.type === AssetTypes.YOUTUBE_VIDEO;
  }

  get url(): string {
    switch (this.type) {
      case AssetTypes.IMAGE:
      case AssetTypes.VIDEO: {
        return Endpoints.CDN.URL + Endpoints.CDN.APP_ASSET(this.applicationId, this.id, this.extension);
      };
      case AssetTypes.YOUTUBE_VIDEO: {

      }; break;
    }
    return '';
  }

  async delete() {
    return this.client.deleteOauth2ApplicationAsset(this.applicationId, this.id);
  }
}
