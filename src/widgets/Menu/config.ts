import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://app.bitdollars.io",
      },
      {
        label: "Liquidity",
        href: "https://app.bitdollars.io/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.guitarswap.exchange",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.guitarswap.exchange/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.guitarswap.exchange/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://info.guitarswap.exchange/voting",
      },
      {
        label: "Github",
        href: "https://github.com/guitarswap",
      },
      {
        label: "Docs",
        href: "https://docs.guitarswap.exchange",
      },
      {
        label: "Blog",
        href: "https://guitarswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: "FacebookIcon",
    href: "https://www.facebook.com/BitDollars.io/",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/BitDollarsDeFi",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/BitDollarsDeFi",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.com/channels/938121531157012541/938121531664506942",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/BitDollars/",
  },
  
  {
    label: "Linkedin",
    icon: "LinkedinIcon",
    href: "https://www.linkedin.com/company/bitdollars",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 56;
export const MENU_ENTRY_HEIGHTF = 38;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
