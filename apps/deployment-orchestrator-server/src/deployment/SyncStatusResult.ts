import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("SyncStatusResultObject")
class SyncStatusResult {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    deploymentId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    updatedAt?: Date;
}

export { SyncStatusResult as SyncStatusResult };