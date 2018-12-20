import freesewing from "freesewing";
import Brian from "@freesewing/brian";
import pluginBundle from "@freesewing/plugin-bundle";
import config from "../config/config";
import { version } from "../package.json";
// Parts
import draftBack from "./back";
import draftFront from "./front";
import draftSleeve from "./sleeve";
import draftPocket from "./pocket";
import draftPocketFacing from "./pocketfacing";
import draftHoodSide from "./hoodside";
import draftHoodCenter from "./hoodcenter";
import draftWaistband from "./waistband";
import draftCuff from "./cuff";

// Constructor boilerplate
const Hugo = function(settings = false) {
  freesewing.Pattern.call(this, { version: version, ...config });
  this.with(pluginBundle);
  if (settings !== false) this.mergeSettings(settings);

  return this;
};

// Inheritance boilerplate
Hugo.prototype = Object.create(freesewing.Pattern.prototype);
Hugo.prototype.constructor = Hugo;

// Attach per-part draft methods to prototype
Hugo.prototype.draftBase = function (part) {
  return new Brian(this.settings).draftBase(part);
}
Hugo.prototype.draftFrontBase = function (part) {
  return new Brian(this.settings).draftFront(part);
}
Hugo.prototype.draftBackBase = function (part) {
  return new Brian(this.settings).draftBack(part);
}
Hugo.prototype.draftSleeveBase = function (part) {
  return new Brian(this.settings).draftSleeve(part);
}
Hugo.prototype.draftSleevecap = function (part) {
  return new Brian(this.settings).draftSleevecap(part);
}
Hugo.prototype.draftBack         = draftBack;
Hugo.prototype.draftFront        = draftFront;
Hugo.prototype.draftSleeve       = draftSleeve;
Hugo.prototype.draftPocket       = draftPocket;
Hugo.prototype.draftPocketFacing = draftPocketFacing;
Hugo.prototype.draftHoodSide     = draftHoodSide;
Hugo.prototype.draftHoodCenter   = draftHoodCenter;
Hugo.prototype.draftWaistband    = draftWaistband;
Hugo.prototype.draftCuff         = draftCuff;

export default Hugo;
