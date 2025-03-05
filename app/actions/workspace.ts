"use server";

import { CreateWorkspaceDataType } from "@/components/workspace/CreateWorkspaceForm";
import { userRequired } from "../data/user/is-user-authenticated";
import { workspaceSchema } from "@/lib/schema";
import { db } from "@/lib/db";
import { generateInviteCode } from "@/utils/generateInviteCode";

export const createNewWorkspace = async (data: CreateWorkspaceDataType) => {
  try {
    const { user } = await userRequired();
    const validatedData = workspaceSchema.parse(data);

    const res = await db.workspace.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        ownerId: user.id,
        inviteCode: generateInviteCode(),
        members: {
          create: {
            userId: user.id,
            accessLevel: "OWNER",
          },
        },
      },
    });
    return {data: res};

  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "Something went wrong",
    };
  }
};
