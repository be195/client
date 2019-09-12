import { Constants as RestConstants, Endpoints } from 'detritus-client-rest';
import { Constants as SocketConstants } from 'detritus-client-socket';
import { Constants as UtilConstants, Tools } from 'detritus-utils';

const {
  AuthTypes,
  DiscordAbortCodes,
  HTTPMethods,
} = RestConstants;
export {
  AuthTypes,
  DiscordAbortCodes,
  HTTPMethods,
};

const {
  CompressTypes,
  EncodingTypes,
  GatewayActivityActionTypes,
  GatewayActivityFlags,
  GatewayActivityTypes,
  GatewayDispatchEvents,
  GatewayOpCodes,
  GatewayPresenceStatuses,
  MediaOpCodes,
  MediaSpeakingFlags,
  SocketCloseCodes,
  SocketGatewayCloseCodes,
  SocketMediaCloseCodes,
  SocketStates,
  SocketEvents,
  DEFAULT_SHARD_LAUNCH_DELAY,
} = SocketConstants;
export {
  CompressTypes,
  EncodingTypes,
  GatewayActivityActionTypes as ActivityActionTypes,
  GatewayActivityFlags as ActivityFlags,
  GatewayActivityTypes as ActivityTypes,
  GatewayDispatchEvents,
  GatewayOpCodes,
  GatewayPresenceStatuses as PresenceStatuses,
  MediaOpCodes,
  MediaSpeakingFlags as SpeakingFlags,
  SocketCloseCodes,
  SocketGatewayCloseCodes,
  SocketMediaCloseCodes,
  SocketStates,
  DEFAULT_SHARD_LAUNCH_DELAY,
};

const {
  DISCORD_SNOWFLAKE_EPOCH,
  DISCORD_TOKEN_EPOCH,
} = UtilConstants;
export { DISCORD_SNOWFLAKE_EPOCH, DISCORD_TOKEN_EPOCH };


export const Package = Object.freeze({
  URL: 'https://github.com/detritusjs/client',
  VERSION: '0.5.28',
});

export type Snowflake = number | string;

export const LOCAL_GUILD_ID = '@me';

export const DEFAULT_MAX_MEMBERS = 250000;
export const DEFAULT_MAX_PRESENCES = 5000;

export const MAX_ATTACHMENT_SIZE = 8 * 1024 * 1024;
export const MAX_ATTACHMENT_SIZE_PREMIUM = 50 * 1024 * 1024;
export const MAX_BITRATE = 96000;
export const MAX_EMOJI_SIZE = 256000;
export const MAX_EMOJI_SLOTS = 50;
export const MAX_EMOJI_SLOTS_MORE = 200;
export const MIN_BITRATE = 8000;


export const ApplicationNewsFlags = Object.freeze({
  PATCH_NOTES: 1 << 1,
  PROMOTION: 1 << 2,
});

export const Oauth2AssetTypes = Object.freeze({
  SMALL: 1,
  LARGE: 2,
});

export const AuditLogActions = Object.freeze({
  GUILD_UPDATE: 1,
  CHANNEL_CREATE: 10,
  CHANNEL_UPDATE: 11,
  CHANNEL_DELETE: 12,
  CHANNEL_OVERWRITE_CREATE: 13,
  CHANNEL_OVERWRITE_UPDATE: 14,
  CHANNEL_OVERWRITE_DELETE: 15,
  MEMBER_KICK: 20,
  MEMBER_PRUNE: 21,
  MEMBER_BAN_ADD: 22,
  MEMBER_BAN_REMOVE: 23,
  MEMBER_UPDATE: 24,
  MEMBER_ROLE_UPDATE: 25,
  ROLE_CREATE: 30,
  ROLE_UPDATE: 31,
  ROLE_DELETE: 32,
  INVITE_CREATE: 40,
  INVITE_UPDATE: 41,
  INVITE_DELETE: 42,
  WEBHOOK_CREATE: 50,
  WEBHOOK_UPDATE: 51,
  WEBHOOK_DELETE: 52,
  EMOJI_CREATE: 60,
  EMOJI_UPDATE: 61,
  EMOJI_DELETE: 62,
  MESSAGE_DELETE: 72,
});

export const AuditLogActionTypes = Tools.normalize({
  ALL: null,
  CREATE: null,
  UPDATE: null,
  DELETE: null,
});

export const AuditLogSubtargetTypes = Object.freeze({
  USER: 'member',
  ROLE: 'role',
});

export const AuditLogTargetTypes = Tools.normalize({
  ALL: null,
  GUILD: null,
  CHANNEL: null,
  USER: null,
  ROLE: null,
  INVITE: null,
  WEBHOOK: null,
  EMOJI: null,
});

export const AuditLogChangeKeys = Object.freeze({
  NAME: 'name',
  DESCRIPTION: 'description',
  ICON_HASH: 'icon_hash',
  SPLASH_HASH: 'splash_hash',
  BANNER_HASH: 'banner_hash',
  OWNER_ID: 'owner_id',
  REGION: 'region',
  AFK_CHANNEL_ID: 'afk_channel_id',
  AFK_TIMEOUT: 'afk_timeout',
  SYSTEM_CHANNEL_ID: 'system_channel_id',
  MFA_LEVEL: 'mfa_level',
  WIDGET_ENABLED: 'widget_enabled',
  WIDGET_CHANNEL_ID: 'widget_channel_id',
  VERIFICATION_LEVEL: 'verification_level',
  EXPLICIT_CONTENT_FILTER: 'explicit_content_filter',
  DEFAULT_MESSAGE_NOTIFICATIONS: 'default_message_notifications',
  VANITY_URL_CODE: 'vanity_url_code',
  POSITION: 'position',
  TOPIC: 'topic',
  TYPE: 'type',
  BITRATE: 'bitrate',
  PERMISSION_OVERWRITES: 'permission_overwrites',
  ROLES_ADD: '$add',
  ROLES_REMOVE: '$remove',
  NICK: 'nick',
  DEAF: 'deaf',
  MUTE: 'mute',
  PERMISSIONS: 'permissions',
  COLOR: 'color',
  HOIST: 'hoist',
  MENTIONABLE: 'mentionable',
  CODE: 'code',
  CHANNEL_ID: 'channel_id',
  INVITER_ID: 'inviter_id',
  MAX_USES: 'max_uses',
  USES: 'uses',
  MAX_AGE: 'max_age',
  TEMPORARY: 'temporary',
  APPLICATION_ID: 'application_id',
  AVATAR_HASH: 'avatar_hash',
  ID: 'id',
  PERMISSIONS_GRANTED: 'allow',
  PERMISSIONS_DENIED: 'deny',
  REASON: 'reason',
  PRUNE_DELETE_DAYS: 'prune_delete_days',
  NSFW: 'nsfw',
  RATE_LIMIT_PER_USER: 'rate_limit_per_user',
});

export const ChannelTypes = Object.freeze({
  BASE: -1,
  GUILD_TEXT: 0,
  DM: 1,
  GUILD_VOICE: 2,
  GROUP_DM: 3,
  GUILD_CATEGORY: 4,
  GUILD_NEWS: 5,
  GUILD_STORE: 6,
  GUILD_LFG_LISTINGS: 7,
});

export const ClientEvents = Tools.normalize(Object.assign({
  COMMAND_ERROR: null,
  COMMAND_FAIL: null,
  COMMAND_NONE: null,
  COMMAND_RAN: null,
  COMMAND_RATELIMIT: null,
  COMMAND_RUN_ERROR: null,
  GATEWAY_READY: null,
  GATEWAY_RESUMED: null,
  RAW_EVENT: null,
  UNKNOWN: null,
}, GatewayDispatchEvents));

export const ClusterClientEvents = Object.freeze({
  KILLED: 'killed',
  READY: 'ready',
  SHARD: 'shard',
});

export const ClusterManagerEvents = Object.freeze({
  CLUSTER_PROCESS: 'clusterProcess',
});

export const ClusterIPCOpCodes = Object.freeze({
  READY: 0,
  CLOSE: 1,
  RECONNECTING: 2,
  RESPAWN_ALL: 3,
  EVAL: 4,
});

export const Colors = Object.freeze({
  BLURPLE: 7506394,
});

export const CommandArgumentTypes = Object.freeze({
  BOOL: 'bool',
  FLOAT: 'float',
  NUMBER: 'number',
  STRING: 'string',
});

export const CommandErrors = Object.freeze({

});

export const CommandRatelimitTypes = Object.freeze({
  CHANNEL: 'channel',
  GUILD: 'guild',
  USER: 'user',
});

export const COMMAND_RATELIMIT_TYPES: ReadonlyArray<string> = Object.freeze(Object.values(CommandRatelimitTypes));

export const DISCORD_EPOCH = 1420070400000;

export const DiscordOpusFormat = Object.freeze({
  CHANNELS: 2,
  SAMPLE_RATE: 48000,
});

export const DiscordRegexNames = Tools.normalize({
  EMOJI: null,
  MENTION_CHANNEL: null,
  MENTION_ROLE: null,
  MENTION_USER: null,
  TEXT_BOLD: null,
  TEXT_CODEBLOCK: null,
  TEXT_CODESTRING: null,
  TEXT_ITALICS: null,
  TEXT_SNOWFLAKE: null,
  TEXT_SPOILER: null,
  TEXT_STRIKE: null,
  TEXT_UNDERLINE: null,
  TEXT_URL: null,
});

export const DiscordRegex = Object.freeze({
  [DiscordRegexNames.EMOJI]: /^<a?:(\w+):(\d+)>$/,
  [DiscordRegexNames.MENTION_CHANNEL]: /^<#(\d+)>$/,
  [DiscordRegexNames.MENTION_ROLE]: /^<@&(\d+)>$/,
  [DiscordRegexNames.MENTION_USER]: /^<@!?(\d+)>$/,
  [DiscordRegexNames.TEXT_BOLD]: /\*\*([\s\S]+?)\*\*/,
  [DiscordRegexNames.TEXT_CODEBLOCK]: /```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/i,
  [DiscordRegexNames.TEXT_CODESTRING]: /`([\s\S]+?)`/,
  [DiscordRegexNames.TEXT_ITALICS]: /_([\s\S]+?)_|\*([\s\S]+?)\*/,
  [DiscordRegexNames.TEXT_SNOWFLAKE]: /^(\d+)$/,
  [DiscordRegexNames.TEXT_SPOILER]: /\|\|([\s\S]+?)\|\|/,
  [DiscordRegexNames.TEXT_STRIKE]: /~~([\s\S]+?)~~(?!_)/,
  [DiscordRegexNames.TEXT_UNDERLINE]: /__([\s\S]+?)__/,
  [DiscordRegexNames.TEXT_URL]: /^((?:https?):\/\/[^\s<]+[^<.,:;"'\]\s])$/,
});

export const Distributors = Object.freeze({
  BATTLENET: 'battlenet',
  DISCORD: 'discord',
  EPIC: 'epic',
  GOG: 'gog',
  ORIGIN: 'origin',
  STEAM: 'steam',
  TWITCH: 'twitch',
  UPLAY: 'uplay',
});

export const DistributorNames = Object.freeze({
  [Distributors.BATTLENET]: 'Battle.net',
  [Distributors.DISCORD]: 'Discord',
  [Distributors.EPIC]: 'Epic',
  [Distributors.GOG]: 'GOG',
  [Distributors.ORIGIN]: 'Origin',
  [Distributors.STEAM]: 'Steam',
  [Distributors.TWITCH]: 'Twitch',
  [Distributors.UPLAY]: 'Uplay',
});

// twitch shut down
export const DistributorUrls = Tools.URIEncodeWrap({
  [Distributors.BATTLENET]: (skuId: string) =>
    `https://shop.battle.net/family/${skuId}`,
  [Distributors.DISCORD]: (skuId: string, slug?: null | string) =>
    Endpoints.Routes.URL + `/store/skus/${skuId}` + ((slug) ? `/${slug}` : ''),
  [Distributors.EPIC]: (skuId: string) =>
    `https://epicgames.com/store/product/${skuId}`,
  [Distributors.GOG]: (skuId: string) =>
    `https://gog.com/game/${skuId}`,
  [Distributors.ORIGIN]: (skuId: string) =>
    `https://origin.com/search?searchString=${skuId}`,
  [Distributors.STEAM]: (skuId: string) =>
    `https://store.steampowered.com/app/${skuId}`,
  [Distributors.UPLAY]: (skuId: string) =>
    `https://store.ubi.com/search/?q=${skuId}`,
});

export const ExplicitContentFilterTypes = Object.freeze({
  DISABLED: 0,
  NON_FRIENDS: 1,
  FRIENDS_AND_NON_FRIENDS: 2,
});

export const GuildExplicitContentFilterTypes = Object.freeze({
  DISABLED: 0,
  MEMBERS_WITHOUT_ROLES: 1,
  ALL_MEMBERS: 2,
});

export const GuildFeatures = Tools.normalize({
  ANIMATED_ICON: null,
  BANNER: null,
  COMMERCE: null,
  DISCOVERABLE: null,
  FEATURABLE: null,
  INVITE_SPLASH: null,
  LURKABLE: null,
  MORE_EMOJI: null,
  NEWS: null,
  PARTNERED: null,
  VANITY_URL: null,
  VERIFIED: null,
  VIP_REGIONS: null,
});

export const GuildNotificationSettings = Object.freeze({
  ALL: 0,
  MENTIONS: 1,
});

export const ImageFormats = Object.freeze({
  GIF: 'gif',
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  WEBP: 'webp',
});

export const IMAGE_FORMATS: ReadonlyArray<string> = Object.freeze(Object.values(ImageFormats));

export const InviteTargetUserTypes = Object.freeze({
  STREAM: 1,
});

export const LobbyErrors = Object.freeze({
  NO_ERROR: 0,
  UNKNOWN_ERROR: 1,
  SERVICE_UNAVAILABLE: 2,
  NOT_FOUND: 3,
  INVALID_SECRET: 4,
  FULL: 5,
  LOBBY_LIMIT_REACHED: 6,
  ALREADY_CONNECTING: 7,
});

export const LobbyTypes = Object.freeze({
  PRIVATE: 1,
  PUBLIC: 2,
});

export const MessageCacheTypes = Object.freeze({
  CHANNEL: 'channel',
  GUILD: 'guild',
  USER: 'user',
});

export const MESSAGE_CACHE_TYPES: ReadonlyArray<string> = Object.freeze(Object.values(MessageCacheTypes));

export const MessageEmbedTypes = Object.freeze({
  APPLICATION_NEWS: 'application_news',
  ARTICLE: 'article',
  GIFV: 'gifv',
  IMAGE: 'image',
  LINK: 'link',
  RICH: 'rich',
  TWEET: 'tweet',
  VIDEO: 'video',
});

export const MessageFlags = Object.freeze({
  CROSSPOSTED: 1 << 0,
  IS_CROSSPOST: 1 << 1,
  SUPPRESS_EMBEDS: 1 << 2,
});

export const MessageTypes = Object.freeze({
  BASE: -1,
  DEFAULT: 0,
  RECIPIENT_ADD: 1,
  RECIPIENT_REMOVE: 2,
  CALL: 3,
  CHANNEL_NAME_CHANGE: 4,
  CHANNEL_ICON_CHANGE: 5,
  CHANNEL_PINNED_MESSAGE: 6,
  GUILD_MEMBER_JOIN: 7,
  GUILD_PREMIUM_SUBSCRIPTION: 8,
  GUILD_PREMIUM_SUBSCRIPTION_TIER_1: 9,
  GUILD_PREMIUM_SUBSCRIPTION_TIER_2: 10,
  GUILD_PREMIUM_SUBSCRIPTION_TIER_3: 11,
  CHANNEL_FOLLOW_ADD: 12,
});

export const MessageTypesDeletable = Object.freeze({
  [MessageTypes.BASE]: true,
  [MessageTypes.DEFAULT]: true,
  [MessageTypes.CHANNEL_PINNED_MESSAGE]: true,
  [MessageTypes.GUILD_MEMBER_JOIN]: true,
  [MessageTypes.GUILD_PREMIUM_SUBSCRIPTION]: true,
  [MessageTypes.GUILD_PREMIUM_SUBSCRIPTION_TIER_1]: true,
  [MessageTypes.GUILD_PREMIUM_SUBSCRIPTION_TIER_2]: true,
  [MessageTypes.GUILD_PREMIUM_SUBSCRIPTION_TIER_3]: true,
  [MessageTypes.CHANNEL_FOLLOW_ADD]: true,
});

export const MfaLevels = Object.freeze({
  NONE: 0,
  ELEVATED: 1,
});

export const OverwriteTypes = Object.freeze({
  MEMBER: 'member',
  ROLE: 'role',
});


export const Permissions = Object.freeze({
  NONE: 0,
  CREATE_INSTANT_INVITE: 1 << 0,
  KICK_MEMBERS: 1 << 1,
  BAN_MEMBERS: 1 << 2,
  ADMINISTRATOR: 1 << 3,
  MANAGE_CHANNELS: 1 << 4,
  MANAGE_GUILD: 1 << 5,
  ADD_REACTIONS: 1 << 6,
  VIEW_AUDIT_LOG: 1 << 7,
  PRIORITY_SPEAKER: 1 << 8,
  STREAM: 1 << 9,
  VIEW_CHANNEL: 1 << 10,
  SEND_MESSAGES: 1 << 11,
  SEND_TTS_MESSAGES: 1 << 12,
  MANAGE_MESSAGES: 1 << 13,
  EMBED_LINKS: 1 << 14,
  ATTACH_FILES: 1 << 15,
  READ_MESSAGE_HISTORY: 1 << 16,
  MENTION_EVERYONE: 1 << 17,
  USE_EXTERNAL_EMOJIS: 1 << 18,
  // unreleased feature 1 << 19
  CONNECT: 1 << 20,
  SPEAK: 1 << 21,
  MUTE_MEMBERS: 1 << 22,
  DEAFEN_MEMBERS: 1 << 23,
  MOVE_MEMBERS: 1 << 24,
  USE_VAD: 1 << 25,
  CHANGE_NICKNAME: 1 << 26,
  CHANGE_NICKNAMES: 1 << 27,
  MANAGE_ROLES: 1 << 28,
  MANAGE_WEBHOOKS: 1 << 29,
  MANAGE_EMOJIS: 1 << 30,
});

export const PERMISSIONS_ALL = Object.values(Permissions).reduce(
  (permissions: number, permission: number) => permissions | permission,
  Permissions.NONE,
);

export const PERMISSIONS_ALL_TEXT = [
  Permissions.ADD_REACTIONS,
  Permissions.SEND_MESSAGES,
  Permissions.SEND_TTS_MESSAGES,
  Permissions.MANAGE_MESSAGES,
  Permissions.EMBED_LINKS,
  Permissions.ATTACH_FILES,
  Permissions.READ_MESSAGE_HISTORY,
  Permissions.MENTION_EVERYONE,
  Permissions.USE_EXTERNAL_EMOJIS,
].reduce(
  (permissions: number, permission: number) => permissions | permission,
  Permissions.NONE,
);

export const PERMISSIONS_ALL_VOICE = [
  Permissions.PRIORITY_SPEAKER,
  Permissions.STREAM,
  Permissions.CONNECT,
  Permissions.SPEAK,
  Permissions.MUTE_MEMBERS,
  Permissions.DEAFEN_MEMBERS,
  Permissions.MOVE_MEMBERS,
  Permissions.USE_VAD,
].reduce(
  (permissions: number, permission: number) => permissions | permission,
  Permissions.NONE,
);

export const PERMISSIONS_DEFAULT = [
  Permissions.CREATE_INSTANT_INVITE,
  Permissions.CHANGE_NICKNAME,
  Permissions.VIEW_CHANNEL,

  Permissions.ADD_REACTIONS,
  Permissions.SEND_MESSAGES,
  Permissions.SEND_TTS_MESSAGES,
  Permissions.EMBED_LINKS,
  Permissions.ATTACH_FILES,
  Permissions.READ_MESSAGE_HISTORY,
  Permissions.MENTION_EVERYONE,
  Permissions.USE_EXTERNAL_EMOJIS,

  Permissions.STREAM,
  Permissions.CONNECT,
  Permissions.SPEAK,
  Permissions.USE_VAD,
].reduce(
  (permissions: number, permission: number) => permissions | permission,
  Permissions.NONE,
);

export const PERMISSIONS_LURKER = [
  Permissions.VIEW_CHANNEL,
  Permissions.READ_MESSAGE_HISTORY,
].reduce(
  (permissions: number, permission: number) => permissions | permission,
  Permissions.NONE,
);


export const PlatformTypes = Object.freeze({
  BATTLENET: 'battlenet',
  FACEBOOK: 'facebook',
  LEAGUE_OF_LEGENDS: 'leagueoflegends',
  REDDIT: 'reddit',
  SKYPE: 'skype',
  SPOTIFY: 'spotify',
  STEAM: 'steam',
  TWITCH: 'twitch',
  TWITTER: 'twitter',
  YUOTUBE: 'youtube',
  XBOX: 'xbox',
});

export const PremiumGuildTiers = Object.freeze({
  NONE: 0,
  TIER_1: 1,
  TIER_2: 2,
  TIER_3: 3,
});

export const PremiumGuildTierNames = Object.freeze({
  [PremiumGuildTiers.NONE]: '',
  [PremiumGuildTiers.TIER_1]: 'Level 1',
  [PremiumGuildTiers.TIER_2]: 'Level 2',
  [PremiumGuildTiers.TIER_3]: 'Level 3',
});

export const PremiumGuildSubscriptionsRequired = Object.freeze({
  [PremiumGuildTiers.NONE]: 0,
  [PremiumGuildTiers.TIER_1]: 2,
  [PremiumGuildTiers.TIER_2]: 10,
  [PremiumGuildTiers.TIER_3]: 50,
});

export const PremiumGuildLimits = Object.freeze({
  [PremiumGuildTiers.NONE]: Object.freeze({
    attachment: MAX_ATTACHMENT_SIZE,
    bitrate: MAX_BITRATE,
    emoji: MAX_EMOJI_SLOTS,
  }),
  [PremiumGuildTiers.TIER_1]: Object.freeze({
    attachment: MAX_ATTACHMENT_SIZE,
    bitrate: 128000,
    emoji: 100,
  }),
  [PremiumGuildTiers.TIER_2]: Object.freeze({
    attachment: MAX_ATTACHMENT_SIZE_PREMIUM,
    bitrate: 256000,
    emoji: 150,
  }),
  [PremiumGuildTiers.TIER_3]: Object.freeze({
    attachment: MAX_ATTACHMENT_SIZE_PREMIUM * 2,
    bitrate: 384000,
    emoji: 250,
  }),
});

export const PremiumTypes = Object.freeze({
  NONE: 0,
  TIER_1: 1,
  TIER_2: 2,
});

export const RelationshipTypes = Object.freeze({
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
});

export const SpecialUrls = Tools.URIEncodeWrap({
  SPOTIFY_TRACK: (trackId: string): string =>
    `https://open.spotify.com/track/${trackId}`,
  YOUTUBE_VIDEO: (videoId: string): string =>
    `https://youtu.be/${videoId}`,
});

export const SPOILER_ATTACHMENT_PREFIX = 'SPOILER_';

export const SystemChannelFlags = Object.freeze({
  SUPPRESS_JOIN_NOTIFICATIONS: 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS: 1 << 0,
});

export const SystemMessages = Object.freeze({
  CallMissed: 'You missed a call from :user:.',
  CallStarted: ':user: started a call.',
  ChannelFollowAdd: ':user: has added **:webhookName:** to this channel',
  ChannelIconChange: ':user: changed the channel name: **:name:**',
  ChannelNameChange: ':user: changed the channel icon.',
  PinnedMessage: ':user: pinned a message to this channel.',
  RecipientAdd: ':user: added :user2: to the group.',
  RecipientRemove: ':user: removed :user2: from the group.',
  RecipientRemoveSelf: ':user: left the group.',
  GuildMemberJoin: [
    ":user: just joined the server - glhf!",
    ":user: just joined. Everyone, look busy!",
    ":user: just joined. Can I get a heal?",
    ":user: joined your party.",
    ":user: joined. You must construct additional pylons.",
    "Ermagherd. :user: is here.",
    "Welcome, :user:. Stay awhile and listen.",
    "Welcome, :user:. We were expecting you ( ͡° ͜ʖ ͡°)",
    "Welcome, :user:. We hope you brought pizza.",
    "Welcome :user:. Leave your weapons by the door.",
    "A wild :user: appeared.",
    "Swoooosh. :user: just landed.",
    "Brace yourselves. :user: just joined the server.",
    ":user: just joined. Hide your bananas.",
    ":user: just arrived. Seems OP - please nerf.",
    ":user: just slid into the server.",
    "A :user: has spawned in the server.",
    "Big :user: showed up!",
    "Where’s :user:? In the server!",
    ":user: hopped into the server. Kangaroo!!",
    ":user: just showed up. Hold my beer.",
    "Challenger approaching - :user: has appeared!",
    "It's a bird! It's a plane! Nevermind, it's just :user:.",
    "It's :user:! Praise the sun! \\\\[T]/",
    "Never gonna give :user: up. Never gonna let :user: down.",
    "Ha! :user: has joined! You activated my trap card!",
    "Cheers, love! :user:'s here!",
    "Hey! Listen! :user: has joined!",
    "We've been expecting you :user:",
    "It's dangerous to go alone, take :user:!",
    ":user: has joined the server! It's super effective!",
    "Cheers, love! :user: is here!",
    ":user: is here, as the prophecy foretold.",
    ":user: has arrived. Party's over.",
    "Ready player :user:",
    ":user: is here to kick butt and chew bubblegum. And :user: is all out of gum.",
    "Hello. Is it :user: you're looking for?",
    ":user: has joined. Stay a while and listen!",
    "Roses are red, violets are blue, :user: joined this server with you",
  ],
  GuildMemberSubscribed: ':user: just boosted the server!',
  GuildMemberSubscribedAchievedTier: ':user: just boosted the server! :guild: has achieved **:premiumTier:!**',
});

export const TeamMembershipStates = Object.freeze({
  BASE: 0,
  INVITED: 1,
  ACCEPTED: 2,
});

export const TeamPayoutAccountStatuses = Object.freeze({
  BASE: -2,
  UNSUBMITTED: -1,
  PENDING: 2,
  ACTION_REQUIRED: 3,
  ACTIVE: 4,
  BLOCKED: 5,
  SUSPENDED: 6,
});

export const TYPING_TIMEOUT = 10000;

export const UserFlags = Object.freeze({
  STAFF: 1 << 0,
  PARTNER: 1 << 1,
  HYPESQUAD: 1 << 2,
  BUG_HUNTER: 1 << 3,
  MFA_SMS: 1 << 4,
  PREMIUM_PROMO_DISMISSED: 1 << 5,
  HYPESQUAD_ONLINE_HOUSE_1: 1 << 6,
  HYPESQUAD_ONLINE_HOUSE_2: 1 << 7,
  HYPESQUAD_ONLINE_HOUSE_3: 1 << 8,
  PREMIUM_EARLY_SUPPORTER: 1 << 9,
  TEAM_USER: 1 << 10,
});

export const UserRequiredActions = Tools.normalize({
  AGREEMENTS: null,
  REQUIRE_CAPTCHA: null,
  REQUIRE_VERIFIED_EMAIL: null,
  REQUIRE_VERIFIED_PHONE: null,
});

export const VerificationLevels = Object.freeze({
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  VERY_HIGH: 4,
});

export const GuildWidgetStyles = Object.freeze({
  BANNER_1: 'banner1',
  BANNER_2: 'banner2',
  BANNER_3: 'banner3',
  BANNER_4: 'banner4',
  SHIELD: 'shield',
});


export const DiscordKeys = Object.freeze({
  ACCESS_TYPE: 'access_type',
  ACCOUNT: 'account',
  ACTION_TYPE: 'action_type',
  ACTIVITIES: 'activities',
  ACTIVITY: 'activity',
  AFK_CHANNEL_ID: 'afk_channel_id',
  AFK_TIMEOUT: 'afk_timeout',
  ALIASES: 'aliases',
  ALLOW: 'allow',
  ANIMATED: 'animated',
  APPLICATION: 'application',
  APPLICATION_ID: 'application_id',
  APPROXIMATE_MEMBER_COUNT: 'approximate_member_count',
  APPROXIMATE_PRESENCE_COUNT: 'approximate_presence_count',
  ASSETS: 'assets',
  ATTACHMENTS: 'attachments',
  AUTHOR: 'author',
  AVAILABLE: 'available',
  AVATAR: 'avatar',
  BANNER: 'banner',
  BITRATE: 'bitrate',
  BOT: 'bot',
  BOT_PUBLIC: 'bot_public',
  BOT_REQUIRE_CODE_GRANT: 'bot_require_code_grant',
  BOX_ART: 'box_art',
  CALL: 'call',
  CAROUSEL_ITEMS: 'carousel_items',
  CATEGORY: 'category',
  CHANGES: 'changes',
  CHANNEL: 'channel',
  CHANNELS: 'channels',
  CHANNEL_ID: 'channel_id',
  CLIENT_STATUS: 'client_status',
  CODE: 'code',
  COLOR: 'color',
  CONNECTED_ACCOUNTS: 'connected_accounts',
  CONTENT: 'content',
  COUNT: 'count',
  COVER_IMAGE: 'cover_image',
  CREATED_AT: 'created_at',
  CURRENCY: 'currency',
  CUSTOM: 'custom',
  DEAF: 'deaf',
  DEFAULT_MESSAGE_NOTIFICATIONS: 'default_message_notifications',
  DELETE_MEMBER_DAYS: 'delete_member_days',
  DENY: 'deny',
  DEPENDENT_SKU_ID: 'dependent_sku_id',
  DEPRECATED: 'deprecated',
  DESCRIPTION: 'description',
  DESKTOP: 'desktop',
  DETAILS: 'details',
  DEVELOPERS: 'developers',
  DISCRIMINATOR: 'discriminator',
  DISTRIBUTOR: 'distributor',
  EDITED_TIMESTAMP: 'edited_timestamp',
  EMAIL: 'email',
  EMBEDS: 'embeds',
  EMBED_CHANNEL_ID: 'embed_channel_id',
  EMBED_ENABLED: 'embed_enabled',
  EMOJI: 'emoji',
  EMOJIS: 'emojis',
  ENABLED: 'enabled',
  END: 'end',
  ENDED: 'ended',
  ENDED_TIMESTAMP: 'ended_timestamp',
  ENTITLEMENT_BRANCH_ID: 'entitlement_branch_id',
  EULA_ID: 'eula_id',
  EXECUTABLES: 'executables',
  EXPIRES_AT: 'expires_at',
  EXPIRE_BEHAVIOR: 'expire_behavior',
  EXPIRE_GRACE_PERIOD: 'expire_grace_period',
  EXPLICIT_CONTENT_FILTER: 'explicit_content_filter',
  FEATURES: 'features',
  FIELDS: 'fields',
  FLAGS: 'flags',
  FILENAME: 'filename',
  FOOTER: 'footer',
  FRIEND_SYNC: 'friend_sync',
  GAME: 'game',
  GAME_ID: 'game_id',
  GUILD: 'guild',
  GUILD_ID: 'guild_id',
  GUILD_IDS: 'guild_ids',
  HEADER_BACKGROUND: 'header_background',
  HEADER_LOGO_DARK_THEME: 'header_logo_dark_theme',
  HEADER_LOGO_LIGHT_THEME: 'header_logo_light_theme',
  HEIGHT: 'height',
  HERO_BACKGROUND: 'hero_background',
  HERO_VIDEO: 'hero_video',
  HOIST: 'hoist',
  HOISTED_ROLE: 'hoisted_role',
  ICON: 'icon',
  ICON_URL: 'icon_url',
  ID: 'id',
  IMAGE: 'image',
  INLINE: 'inline',
  INSTANCE: 'instance',
  INTEGRATIONS: 'integrations',
  INTERVAL: 'interval',
  INTERVAL_COUNT: 'interval_count',
  INVITER: 'inviter',
  JOIN: 'join',
  JOINED_AT: 'joined_at',
  KEY: 'key',
  LARGE: 'large',
  LARGE_IMAGE: 'large_image',
  LARGE_TEXT: 'large_text',
  LAST_MESSAGE_ID: 'last_message_id',
  LAST_MODIFIED: 'last_modified',
  LAST_PIN_TIMESTAMP: 'last_pin_timestamp',
  LAZY: 'lazy',
  LOCALE: 'locale',
  MANAGED: 'managed',
  MANIFEST_LABELS: 'manifest_labels',
  MATCH: 'match',
  MAX_AGE: 'max_age',
  MAX_MEMBERS: 'max_members',
  MAX_PRESENCES: 'max_presences',
  MAX_USES: 'max_uses',
  ME: 'me',
  MEMBER: 'member',
  MEMBERS: 'members',
  MEMBERSHIP_STATE: 'membership_state',
  MEMBERS_REMOVED: 'members_removed',
  MEMBER_COUNT: 'member_count',
  MENTIONABLE: 'mentionable',
  MENTIONS: 'mentions',
  MENTION_CHANNELS: 'mention_channels',
  MENTION_EVERYONE: 'mention_everyone',
  MENTION_ROLES: 'mention_roles',
  MESSAGE_ID: 'message_id',
  MESSAGE_REFERENCE: 'message_reference',
  METADATA: 'metadata',
  MFA_ENABLED: 'mfa_enabled',
  MFA_LEVEL: 'mfa_level',
  MIME_TYPE: 'mime_type',
  MOBILE: 'mobile',
  MUTE: 'mute',
  MUTUAL_GUILDS: 'mutual_guilds',
  NAME: 'name',
  NEW_VALUE: 'new_value',
  NICK: 'nick',
  NICKS: 'nicks',
  NONCE: 'nonce',
  NSFW: 'nsfw',
  OLD_VALUE: 'old_value',
  OPTIMAL: 'optimal',
  OPTIONS: 'options',
  OVERLAY: 'overlay',
  OVERLAY_COMPATIBILITY_HOOK: 'overlay_compatibility_hook',
  OWNER: 'owner',
  OWNER_ID: 'owner_id',
  OWNER_USER_ID: 'owner_user_id',
  PARENT_ID: 'parent_id',
  PARTICIPANTS: 'participants',
  PARTY: 'party',
  PARTY_ID: 'party_id',
  PAYOUT_ACCOUNT_STATUS: 'payout_account_status',
  PERMISSIONS: 'permissions',
  PERMISSION_OVERWRITES: 'permission_overwrites',
  PHONE: 'phone',
  PINNED: 'pinned',
  PLATFORM: 'platform',
  POSITION: 'position',
  PREFERRED_LOCALE: 'preferred_locale',
  PREMIUM: 'premium',
  PREMIUM_GUILD_SINCE: 'premium_guild_since',
  PREMIUM_SINCE: 'premium_since',
  PREMIUM_SUBSCRIPTION_COUNT: 'premium_subscription_count',
  PREMIUM_TIER: 'premium_tier',
  PREMIUM_TYPE: 'premium_type',
  PRESENCES: 'presences',
  PREVIEW_VIDEO: 'preview_video',
  PRICE: 'price',
  PRIMARY_SKU_ID: 'primary_sku_id',
  PROVIDER: 'provider',
  PROXY_ICON_URL: 'proxy_icon_url',
  PROXY_URL: 'proxy_url',
  PUBLISHERS: 'publishers',
  RATE_LIMIT_PER_USER: 'rate_limit_per_user',
  REACTIONS: 'reactions',
  REASON: 'reason',
  RECIPIENTS: 'recipients',
  REDEEMED: 'redeemed',
  REDIRECT_URIS: 'redirect_uris',
  REFERENCE_ID: 'reference_id',
  REGION: 'region',
  RELEASE_DATE: 'release_date',
  REQUIRE_COLONS: 'require_colons',
  REVOKED: 'revoked',
  RINGING: 'ringing',
  ROLES: 'roles',
  ROLE_ID: 'role_id',
  RPC_APPLICATION_STATE: 'rpc_application_state',
  RPC_ORIGINS: 'rpc_origins',
  SECRET: 'secret',
  SECRETS: 'secrets',
  SELF_DEAF: 'self_deaf',
  SELF_MUTE: 'self_mute',
  SELF_STREAM: 'self_stream',
  SELF_VIDEO: 'self_video',
  SESSION_ID: 'session_id',
  SHOW_ACTIVITY: 'show_activity',
  SHOW_AGE_GATE: 'show_age_gate',
  SIZE: 'size',
  SKU: 'sku',
  SKU_ID: 'sku_id',
  SLUG: 'slug',
  SMALL_IMAGE: 'small_image',
  SMALL_TEXT: 'small_text',
  SPECTATE: 'spectate',
  SPLASH: 'splash',
  START: 'start',
  STATE: 'state',
  STATUS: 'status',
  STORE_APPLICATION_STATE: 'store_application_state',
  STORE_LISTING: 'store_listing',
  SUBSCRIPTION_PLAN: 'subscription_plan',
  SUBSCRIPTION_PLAN_ID: 'subscription_plan_id',
  SUBTARGET: 'subtarget',
  SUMMARY: 'summary',
  SUPPRESS: 'suppress',
  SYNCED_AT: 'synced_at',
  SYNCING: 'syncing',
  SYNC_ID: 'sync_id',
  SYSTEM_CHANNEL_FLAGS: 'system_channel_flags',
  SYSTEM_CHANNEL_ID: 'system_channel_id',
  TAGLINE: 'tagline',
  TARGET: 'target',
  TARGET_ID: 'target_id',
  TARGET_USER: 'target_user',
  TARGET_USER_TYPE: 'target_user_type',
  TAX_INCLUSIVE: 'tax_inclusive',
  TEAM: 'team',
  TEAM_ID: 'team_id',
  TEMPORARY: 'temporary',
  TEXT: 'text',
  THIRD_PARTY_SKUS: 'third_party_skus',
  THUMBNAIL: 'thumbnail',
  TIMESTAMP: 'timestamp',
  TIMESTAMPS: 'timestamps',
  TITLE: 'title',
  TOKEN: 'token',
  TOPIC: 'topic',
  TTS: 'tts',
  TYPE: 'type',
  UNAVAILABLE: 'unavailable',
  URL: 'url',
  USER: 'user',
  USERNAME: 'username',
  USER_ID: 'user_id',
  USER_LIMIT: 'user_limit',
  USES: 'uses',
  VALUE: 'value',
  VANITY_URL_CODE: 'vanity_url_code',
  VERIFICATION_LEVEL: 'verification_level',
  VERIFIED: 'verified',
  VERIFY_KEY: 'verify_key',
  VIDEO: 'video',
  VIP: 'vip',
  VISIBILITY: 'visibility',
  VOICE_STATES: 'voice_states',
  WEB: 'web',
  WEBHOOK_ID: 'webhook_id',
  WIDGET_CHANNEL_ID: 'widget_channel_id',
  WIDGET_ENABLED: 'widget_enabled',
  WIDTH: 'width',
  YOUTUBE_TRAILER_VIDEO_ID: 'youtube_trailer_video_id',
});

export const DetritusKeys = Object.freeze({
  [DiscordKeys.ACCESS_TYPE]: 'accessType',
  [DiscordKeys.ACCOUNT]: 'account',
  [DiscordKeys.ACTION_TYPE]: 'actionType',
  [DiscordKeys.ACTIVITIES]: 'activities',
  [DiscordKeys.ACTIVITY]: 'activity',
  [DiscordKeys.AFK_CHANNEL_ID]: 'afkChannelId',
  [DiscordKeys.AFK_TIMEOUT]: 'afkTimeout',
  [DiscordKeys.ALIASES]: 'aliases',
  [DiscordKeys.ALLOW]: 'allow',
  [DiscordKeys.ANIMATED]: 'animated',
  [DiscordKeys.APPLICATION]: 'application',
  [DiscordKeys.APPLICATION_ID]: 'applicationId',
  [DiscordKeys.APPROXIMATE_MEMBER_COUNT]: 'approximateMemberCount',
  [DiscordKeys.APPROXIMATE_PRESENCE_COUNT]: 'approximatePresenceCount',
  [DiscordKeys.ASSETS]: 'assets',
  [DiscordKeys.ATTACHMENTS]: 'attachments',
  [DiscordKeys.AUTHOR]: 'author',
  [DiscordKeys.AVAILABLE]: 'available',
  [DiscordKeys.AVATAR]: 'avatar',
  [DiscordKeys.BANNER]: 'banner',
  [DiscordKeys.BITRATE]: 'bitrate',
  [DiscordKeys.BOT]: 'bot',
  [DiscordKeys.BOT_PUBLIC]: 'botPublic',
  [DiscordKeys.BOT_REQUIRE_CODE_GRANT]: 'botRequireCodeGrant',
  [DiscordKeys.BOX_ART]: 'boxArt',
  [DiscordKeys.CALL]: 'call',
  [DiscordKeys.CAROUSEL_ITEMS]: 'carouselItems',
  [DiscordKeys.CATEGORY]: 'category',
  [DiscordKeys.CHANGES]: 'changes',
  [DiscordKeys.CHANNEL]: 'channel',
  [DiscordKeys.CHANNELS]: 'channels',
  [DiscordKeys.CHANNEL_ID]: 'channelId',
  [DiscordKeys.CLIENT_STATUS]: 'clientStatus',
  [DiscordKeys.CODE]: 'code',
  [DiscordKeys.COLOR]: 'color',
  [DiscordKeys.CONNECTED_ACCOUNTS]: 'connectedAccounts',
  [DiscordKeys.CONTENT]: 'content',
  [DiscordKeys.COUNT]: 'count',
  [DiscordKeys.COVER_IMAGE]: 'coverImage',
  [DiscordKeys.CREATED_AT]: 'createdAt',
  [DiscordKeys.CURRENCY]: 'currency',
  [DiscordKeys.CUSTOM]: 'custom',
  [DiscordKeys.DEAF]: 'deaf',
  [DiscordKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: 'defaultMessageNotifications',
  [DiscordKeys.DELETE_MEMBER_DAYS]: 'deleteMemberDays',
  [DiscordKeys.DENY]: 'deny',
  [DiscordKeys.DEPENDENT_SKU_ID]: 'dependentSkuId',
  [DiscordKeys.DEPRECATED]: 'deprecated',
  [DiscordKeys.DESCRIPTION]: 'description',
  [DiscordKeys.DESKTOP]: 'desktop',
  [DiscordKeys.DETAILS]: 'details',
  [DiscordKeys.DEVELOPERS]: 'developers',
  [DiscordKeys.DISCRIMINATOR]: 'discriminator',
  [DiscordKeys.DISTRIBUTOR]: 'distributor',
  [DiscordKeys.EDITED_TIMESTAMP]: 'editedTimestamp',
  [DiscordKeys.EMAIL]: 'email',
  [DiscordKeys.EMBEDS]: 'embeds',
  [DiscordKeys.EMBED_CHANNEL_ID]: 'embedChannelId',
  [DiscordKeys.EMBED_ENABLED]: 'embedEnabled',
  [DiscordKeys.EMOJI]: 'emoji',
  [DiscordKeys.EMOJIS]: 'emojis',
  [DiscordKeys.ENABLED]: 'enabled',
  [DiscordKeys.END]: 'end',
  [DiscordKeys.ENDED]: 'ended',
  [DiscordKeys.ENDED_TIMESTAMP]: 'endedTimestamp',
  [DiscordKeys.ENTITLEMENT_BRANCH_ID]: 'entitlementBranchId',
  [DiscordKeys.EULA_ID]: 'eulaId',
  [DiscordKeys.EXECUTABLES]: 'executables',
  [DiscordKeys.EXPIRES_AT]: 'expiresAt',
  [DiscordKeys.EXPIRE_BEHAVIOR]: 'expireBehavior',
  [DiscordKeys.EXPIRE_GRACE_PERIOD]: 'expireGracePeriod',
  [DiscordKeys.EXPLICIT_CONTENT_FILTER]: 'explicitContentFilter',
  [DiscordKeys.FEATURES]: 'features',
  [DiscordKeys.FIELDS]: 'fields',
  [DiscordKeys.FLAGS]: 'flags',
  [DiscordKeys.FILENAME]: 'filename',
  [DiscordKeys.FOOTER]: 'footer',
  [DiscordKeys.FRIEND_SYNC]: 'friendSync',
  [DiscordKeys.GAME]: 'game',
  [DiscordKeys.GAME_ID]: 'gameId',
  [DiscordKeys.GUILD]: 'guild',
  [DiscordKeys.GUILD_ID]: 'guildId',
  [DiscordKeys.GUILD_IDS]: 'guildIds',
  [DiscordKeys.HEADER_BACKGROUND]: 'headerBackground',
  [DiscordKeys.HEADER_LOGO_DARK_THEME]: 'headerLogoDarkTheme',
  [DiscordKeys.HEADER_LOGO_LIGHT_THEME]: 'headerLogoLightTheme',
  [DiscordKeys.HEIGHT]: 'height',
  [DiscordKeys.HERO_BACKGROUND]: 'heroBackground',
  [DiscordKeys.HERO_VIDEO]: 'heroVideo',
  [DiscordKeys.HOIST]: 'hoist',
  [DiscordKeys.HOISTED_ROLE]: 'hoistedRole',
  [DiscordKeys.ICON]: 'icon',
  [DiscordKeys.ICON_URL]: 'iconUrl',
  [DiscordKeys.ID]: 'id',
  [DiscordKeys.IMAGE]: 'image',
  [DiscordKeys.INLINE]: 'inline',
  [DiscordKeys.INSTANCE]: 'instance',
  [DiscordKeys.INTEGRATIONS]: 'integrations',
  [DiscordKeys.INTERVAL]: 'interval',
  [DiscordKeys.INTERVAL_COUNT]: 'intervalCount',
  [DiscordKeys.INVITER]: 'inviter',
  [DiscordKeys.JOIN]: 'join',
  [DiscordKeys.JOINED_AT]: 'joinedAt',
  [DiscordKeys.KEY]: 'key',
  [DiscordKeys.LARGE]: 'large',
  [DiscordKeys.LARGE_IMAGE]: 'largeImage',
  [DiscordKeys.LARGE_TEXT]: 'largeText',
  [DiscordKeys.LAST_MESSAGE_ID]: 'lastMessageId',
  [DiscordKeys.LAST_MODIFIED]: 'lastModified',
  [DiscordKeys.LAST_PIN_TIMESTAMP]: 'lastPinTimestamp',
  [DiscordKeys.LAZY]: 'lazy',
  [DiscordKeys.LOCALE]: 'locale',
  [DiscordKeys.MANAGED]: 'managed',
  [DiscordKeys.MANIFEST_LABELS]: 'manifestLabels',
  [DiscordKeys.MATCH]: 'match',
  [DiscordKeys.MAX_AGE]: 'maxAge',
  [DiscordKeys.MAX_MEMBERS]: 'maxMembers',
  [DiscordKeys.MAX_PRESENCES]: 'maxPresences',
  [DiscordKeys.MAX_USES]: 'maxUses',
  [DiscordKeys.ME]: 'me',
  [DiscordKeys.MEMBER]: 'member',
  [DiscordKeys.MEMBERS]: 'members',
  [DiscordKeys.MEMBERSHIP_STATE]: 'membershipState',
  [DiscordKeys.MEMBERS_REMOVED]: 'membersRemoved',
  [DiscordKeys.MEMBER_COUNT]: 'memberCount',
  [DiscordKeys.MENTIONABLE]: 'mentionable',
  [DiscordKeys.MENTIONS]: 'mentions',
  [DiscordKeys.MENTION_CHANNELS]: 'mentionChannels',
  [DiscordKeys.MENTION_EVERYONE]: 'mentionEveryone',
  [DiscordKeys.MENTION_ROLES]: 'mentionRoles',
  [DiscordKeys.MESSAGE_ID]: 'messageId',
  [DiscordKeys.MESSAGE_REFERENCE]: 'messageReference',
  [DiscordKeys.METADATA]: 'metadata',
  [DiscordKeys.MFA_ENABLED]: 'mfaEnabled',
  [DiscordKeys.MFA_LEVEL]: 'mfaLevel',
  [DiscordKeys.MIME_TYPE]: 'mimeType',
  [DiscordKeys.MOBILE]: 'mobile',
  [DiscordKeys.MUTE]: 'mute',
  [DiscordKeys.MUTUAL_GUILDS]: 'mutualGuilds',
  [DiscordKeys.NAME]: 'name',
  [DiscordKeys.NEW_VALUE]: 'newValue',
  [DiscordKeys.NICK]: 'nick',
  [DiscordKeys.NICKS]: 'nicks',
  [DiscordKeys.NONCE]: 'nonce',
  [DiscordKeys.NSFW]: 'nsfw',
  [DiscordKeys.OLD_VALUE]: 'oldValue',
  [DiscordKeys.OPTIMAL]: 'optimal',
  [DiscordKeys.OPTIONS]: 'options',
  [DiscordKeys.OVERLAY]: 'overlay',
  [DiscordKeys.OVERLAY_COMPATIBILITY_HOOK]: 'overlayCompatibilityHook',
  [DiscordKeys.OWNER]: 'owner',
  [DiscordKeys.OWNER_ID]: 'ownerId',
  [DiscordKeys.OWNER_USER_ID]: 'ownerUserId',
  [DiscordKeys.PARENT_ID]: 'parentId',
  [DiscordKeys.PARTICIPANTS]: 'participants',
  [DiscordKeys.PARTY]: 'party',
  [DiscordKeys.PARTY_ID]: 'partyId',
  [DiscordKeys.PAYOUT_ACCOUNT_STATUS]: 'payoutAccountStatus',
  [DiscordKeys.PERMISSIONS]: 'permissions',
  [DiscordKeys.PERMISSION_OVERWRITES]: 'permissionOverwrites',
  [DiscordKeys.PHONE]: 'phone',
  [DiscordKeys.PINNED]: 'pinned',
  [DiscordKeys.PLATFORM]: 'platform',
  [DiscordKeys.POSITION]: 'position',
  [DiscordKeys.PREFERRED_LOCALE]: 'preferredLocale',
  [DiscordKeys.PREMIUM]: 'premium',
  [DiscordKeys.PREMIUM_GUILD_SINCE]: 'premiumGuildSince',
  [DiscordKeys.PREMIUM_SINCE]: 'premiumSince',
  [DiscordKeys.PREMIUM_SUBSCRIPTION_COUNT]: 'premiumSubscriptionCount',
  [DiscordKeys.PREMIUM_TIER]: 'premiumTier',
  [DiscordKeys.PREMIUM_TYPE]: 'premiumType',
  [DiscordKeys.PRESENCES]: 'presences',
  [DiscordKeys.PREVIEW_VIDEO]: 'previewVideo',
  [DiscordKeys.PRICE]: 'price',
  [DiscordKeys.PRIMARY_SKU_ID]: 'primarySkuId',
  [DiscordKeys.PROVIDER]: 'provider',
  [DiscordKeys.PROXY_ICON_URL]: 'proxyIconUrl',
  [DiscordKeys.PROXY_URL]: 'proxyUrl',
  [DiscordKeys.PUBLISHERS]: 'publishers',
  [DiscordKeys.RATE_LIMIT_PER_USER]: 'rateLimitPerUser',
  [DiscordKeys.REACTIONS]: 'reactions',
  [DiscordKeys.REASON]: 'reason',
  [DiscordKeys.RECIPIENTS]: 'recipients',
  [DiscordKeys.REDEEMED]: 'redeemed',
  [DiscordKeys.REDIRECT_URIS]: 'redirectUris',
  [DiscordKeys.REFERENCE_ID]: 'referenceId',
  [DiscordKeys.REGION]: 'region',
  [DiscordKeys.RELEASE_DATE]: 'releaseDate',
  [DiscordKeys.REQUIRE_COLONS]: 'requireColons',
  [DiscordKeys.REVOKED]: 'revoked',
  [DiscordKeys.RINGING]: 'ringing',
  [DiscordKeys.ROLES]: 'roles',
  [DiscordKeys.ROLE_ID]: 'roleId',
  [DiscordKeys.RPC_APPLICATION_STATE]: 'rpcApplicationState',
  [DiscordKeys.RPC_ORIGINS]: 'rpcOrigins',
  [DiscordKeys.SECRET]: 'secret',
  [DiscordKeys.SECRETS]: 'secrets',
  [DiscordKeys.SELF_DEAF]: 'selfDeaf',
  [DiscordKeys.SELF_MUTE]: 'selfMute',
  [DiscordKeys.SELF_STREAM]: 'selfStream',
  [DiscordKeys.SELF_VIDEO]: 'selfVideo',
  [DiscordKeys.SESSION_ID]: 'sessionId',
  [DiscordKeys.SHOW_ACTIVITY]: 'showActivity',
  [DiscordKeys.SHOW_AGE_GATE]: 'showAgeGate',
  [DiscordKeys.SIZE]: 'size',
  [DiscordKeys.SKU]: 'sku',
  [DiscordKeys.SKU_ID]: 'skuId',
  [DiscordKeys.SLUG]: 'slug',
  [DiscordKeys.SMALL_IMAGE]: 'smallImage',
  [DiscordKeys.SMALL_TEXT]: 'smallText',
  [DiscordKeys.SPECTATE]: 'spectate',
  [DiscordKeys.SPLASH]: 'splash',
  [DiscordKeys.START]: 'start',
  [DiscordKeys.STATE]: 'state',
  [DiscordKeys.STATUS]: 'status',
  [DiscordKeys.STORE_APPLICATION_STATE]: 'storeApplicationState',
  [DiscordKeys.STORE_LISTING]: 'storeListing',
  [DiscordKeys.SUBSCRIPTION_PLAN]: 'subscriptionPlan',
  [DiscordKeys.SUBSCRIPTION_PLAN_ID]: 'subscriptionPlanId',
  [DiscordKeys.SUBTARGET]: 'subtarget',
  [DiscordKeys.SUMMARY]: 'summary',
  [DiscordKeys.SUPPRESS]: 'suppress',
  [DiscordKeys.SYNCED_AT]: 'syncedAt',
  [DiscordKeys.SYNCING]: 'syncing',
  [DiscordKeys.SYNC_ID]: 'syncId',
  [DiscordKeys.SYSTEM_CHANNEL_FLAGS]: 'systemChannelFlags',
  [DiscordKeys.SYSTEM_CHANNEL_ID]: 'systemChannelId',
  [DiscordKeys.TAGLINE]: 'tagline',
  [DiscordKeys.TARGET]: 'target',
  [DiscordKeys.TARGET_ID]: 'targetId',
  [DiscordKeys.TARGET_USER]: 'targetUser',
  [DiscordKeys.TARGET_USER_TYPE]: 'targetUserType',
  [DiscordKeys.TAX_INCLUSIVE]: 'taxInclusive',
  [DiscordKeys.TEAM]: 'team',
  [DiscordKeys.TEAM_ID]: 'teamId',
  [DiscordKeys.TEMPORARY]: 'temporary',
  [DiscordKeys.TEXT]: 'text',
  [DiscordKeys.THIRD_PARTY_SKUS]: 'thirdPartySkus',
  [DiscordKeys.THUMBNAIL]: 'thumbnail',
  [DiscordKeys.TIMESTAMP]: 'timestamp',
  [DiscordKeys.TIMESTAMPS]: 'timestamps',
  [DiscordKeys.TITLE]: 'title',
  [DiscordKeys.TOKEN]: 'token',
  [DiscordKeys.TOPIC]: 'topic',
  [DiscordKeys.TTS]: 'tts',
  [DiscordKeys.TYPE]: 'type',
  [DiscordKeys.UNAVAILABLE]: 'unavailable',
  [DiscordKeys.URL]: 'url',
  [DiscordKeys.USER]: 'user',
  [DiscordKeys.USERNAME]: 'username',
  [DiscordKeys.USER_ID]: 'userId',
  [DiscordKeys.USER_LIMIT]: 'userLimit',
  [DiscordKeys.USES]: 'uses',
  [DiscordKeys.VALUE]: 'value',
  [DiscordKeys.VANITY_URL_CODE]: 'vanityUrlCode',
  [DiscordKeys.VERIFICATION_LEVEL]: 'verificationLevel',
  [DiscordKeys.VERIFIED]: 'verified',
  [DiscordKeys.VERIFY_KEY]: 'verifyKey',
  [DiscordKeys.VIDEO]: 'video',
  [DiscordKeys.VIP]: 'vip',
  [DiscordKeys.VISIBILITY]: 'visibility',
  [DiscordKeys.VOICE_STATES]: 'voiceStates',
  [DiscordKeys.WEB]: 'web',
  [DiscordKeys.WEBHOOK_ID]: 'webhookId',
  [DiscordKeys.WIDGET_CHANNEL_ID]: 'widgetChannelId',
  [DiscordKeys.WIDGET_ENABLED]: 'widgetEnabled',
  [DiscordKeys.WIDTH]: 'width',
  [DiscordKeys.YOUTUBE_TRAILER_VIDEO_ID]: 'youtubeTrailerVideoId',
});
