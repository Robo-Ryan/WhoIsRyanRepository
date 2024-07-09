import { StackProps } from "aws-cdk-lib";
import { FriendOverStaticConfig } from "./friend-over-static-config";

export interface FriendOverStackProps extends StackProps {
    readonly staticConfig: FriendOverStaticConfig;
}