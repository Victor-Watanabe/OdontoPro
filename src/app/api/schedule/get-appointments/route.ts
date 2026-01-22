import prisma from "@/lib/prisma";
import { log } from "console";
import { NextResponse, type NextRequest } from "next/server";
import { number } from "zod";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const userId = searchParams.get("userId");
  const dateParams = searchParams.get("date");

  if (!userId || userId === "null" || !dateParams || dateParams === "null") {
    return NextResponse.json(
      {
        error: "Nenhum agendamento encontrado",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const [year, month, day] = dateParams.split("-").map(Number);
    const startDate = new Date(year, month - 1, day, 0, 0, 0);
    const endDate = new Date(year, month - 1, day, 23, 59, 59, 999);
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          error: "Nenhum agendamento encontrado",
        },
        {
          status: 400,
        },
      );
    }

    const appointments = await prisma.appointment.findMany({
      where: {
        userId: userId,
        AppointmentDate: { gte: startDate, lte: endDate },
      },
      include: {
        service: true,
      },
    });

    const blockedSlots = new Set<string>();

    for (const apt of appointments) {
      const requiredSlots = Math.ceil(apt.service.duration / 30);
      const startIndex = user.times.indexOf(apt.time);

      if (startIndex !== -1) {
        for (let i = 0; i < requiredSlots; i++) {
          const blockedSlot = user.times[startIndex + 1];
          if (blockedSlots) {
            blockedSlots.add(blockedSlot);
          }
        }
      }
    }

    const blockedtimes = Array.from(blockedSlots);

    console.log("blokedtimes: ", blockedtimes);

    return NextResponse.json(blockedtimes);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: "Nenhum agendamento encontrado",
      },
      {
        status: 400,
      },
    );
  }
}
