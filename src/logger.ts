import { Signale } from "signale"

export const logger = new Signale({
  config: {
    displayDate: true,
    displayTimestamp: true,
    displayBadge: false,
    underlineLabel: false,
  }
});
