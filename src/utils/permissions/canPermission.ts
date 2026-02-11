"use server";

import { auth } from "@/lib/auth";
import { PlanDetailsInfo } from "./get-plans";
import prisma from "@/lib/prisma";
import { canCeateService } from "./canCreateService";

export type PLAN_PROP = "BASIC" | "PROFESSIONAL" | "TRIAL" | "EXPIRED";

type TypeCheck = "service";

export interface ResultPermissionProp {
  hasPermission: boolean;
  planId: string;
  expired: boolean;
  plan: null | PlanDetailsInfo;
}

interface CanPermissionProps {
  type: TypeCheck;
}

export async function canPermission({
  type,
}: CanPermissionProps): Promise<ResultPermissionProp> {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      hasPermission: false,
      planId: "EXPIRED",
      expired: true,
      plan: null,
    };
  }

  const subscription = await prisma.subscription.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });

  switch (type) {
    case "service":
      const permission = await canCeateService(subscription, session);

      return permission;

    default:
      return {
        hasPermission: false,
        planId: "EXPIRED",
        expired: true,
        plan: null,
      };
  }
}
