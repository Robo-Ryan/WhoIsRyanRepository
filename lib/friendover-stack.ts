import { Construct } from 'constructs';
import { DdbConstruct } from './ddb-construct';
import { Stack, StackProps } from 'aws-cdk-lib';
import { FriendOverStackProps } from './friend-over-cdk-stack-props';

export class FriendoverStack extends Stack {
  constructor(scope: Construct, id: string, stackProps: FriendOverStackProps) {
    super(scope, id, stackProps);

    new DdbConstruct(this, 'Ddb', stackProps);
  }
}
