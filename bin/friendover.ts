#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FriendoverStack } from '../lib/friendover-stack';

const app = new cdk.App();
new FriendoverStack(app, 'FriendoverStack', {
  staticConfig: {
    disambiguator: "prod"
  },
  env: {
    account: "958898816144",
    region: "us-east-1"
  }
});