import { EnvironmentProd } from '@ts/common';

class EnvironmentImpl extends EnvironmentProd {}

export const environment = Object.freeze(new EnvironmentImpl());
