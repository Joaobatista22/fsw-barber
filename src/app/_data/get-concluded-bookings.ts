"use server";

import { getServerSession } from "next-auth";
import type { User } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";

export const getConcludedBookings = async () => {
	const session = await getServerSession(authOptions);
	if (!session?.user) return [];
	return db.booking.findMany({
		where: {
			userId: (session.user as User).id,
			date: {
				lt: new Date(),
			},
		},
		include: {
			service: {
				include: {
					barbershop: true,
				},
			},
		},
		orderBy: {
			date: "asc",
		},
	});
};
