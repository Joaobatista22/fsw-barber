"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

interface CreateBookingParams {
	serviceId: string;
	date: Date;
}

export const createBooking = async (params: CreateBookingParams) => {
	const user = await getServerSession(authOptions);
	if (!user) {
		throw new Error("Usuário não autenticado");
	}
	if (!user.user || !("id" in user.user)) {
		throw new Error("ID do usuário não encontrado");
	}

	await db.booking.create({
		data: { ...params, userId: user.user.id as string },
	});
	revalidatePath("/barbershops/[id]");
	revalidatePath("/bookings");
};
