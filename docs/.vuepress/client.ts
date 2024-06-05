import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  BiGithub,
  BiTiktok,
  CoGit,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  LaYoutube,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  SiGitee
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  LaYoutube,
  BiTiktok,
  BiGithub,
  SiGitee
);

export default defineClientConfig({});
