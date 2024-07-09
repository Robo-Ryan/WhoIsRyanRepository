import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { FriendOverStackProps } from "./friend-over-cdk-stack-props";

export class DdbConstruct extends Construct {
    public readonly user: Table;
    public readonly property: Table;
  
    constructor(scope: Construct, id: string, props: FriendOverStackProps) {
      super(scope, id);
  
      const { disambiguator } = props.staticConfig;
      
      this.user = new Table(this, 'User', {
        tableName: `${disambiguator}-user`,
        partitionKey: { name: "userId", type: AttributeType.STRING },
        billingMode: BillingMode.PAY_PER_REQUEST,
        pointInTimeRecovery: true,
      });
      
      this.property = new Table(this, 'Property', {
        tableName: `${disambiguator}-property`,
        partitionKey: { name: "propertyId", type: AttributeType.STRING },
        billingMode: BillingMode.PAY_PER_REQUEST,
        pointInTimeRecovery: true,
      });
    }
  }