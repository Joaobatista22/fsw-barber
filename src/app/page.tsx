import { SearchIcon } from "lucide-react";
import Image from "next/image";
import BarbershopItem from "./_components/barbershop-item";
import BookingItems from "./_components/booking-item";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { quickSearchOptions } from "./_constants/search";
import { db } from "./_lib/prisma";

export default async function Home() {
	const barbershoops = await db.barbershop.findMany({});
	const popularBarbershop = await db.barbershop.findMany({
		orderBy: {
			name: "desc",
		},
	});

	return (
		<div>
			<Header />
			<div className="p-5">
				<h2 className="text-xl font-bold">Olá, João!</h2>
				<p>Segunda-feira, 05 de agosto</p>
				<div className="flex items-center gap-5 mt-6">
					<Input placeholder="Faça sua busca..." />{" "}
					<Button>
						<SearchIcon />
					</Button>
				</div>
				<div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]">
					{quickSearchOptions.map((option) => (
						<Button className="gap-2" variant="secondary" key={option.title}>
							<Image
								src={option.imageUrl}
								width={16}
								height={16}
								alt={option.title}
							/>
							{option.title}
						</Button>
					))}
				</div>

				<div className="relative h-[150px] w-full mt-5">
					<Image
						alt="banner"
						src="/img/banner.png"
						fill
						className="object-cover rounded-xl"
					/>
				</div>
				<h2 className="text-xs font-bold uppercase text-gray-400 mt-4 mb-3">
					Agendamentos
				</h2>
				<BookingItems />
				<h2 className="text-xs font-bold uppercase text-gray-400 mt-4 mb-3">
					Recomendados
				</h2>
				<div className="flex gap-4 overflow-auto">
					{barbershoops.map((barbershoop) => (
						<BarbershopItem key={barbershoop.id} barbershop={barbershoop} />
					))}
				</div>
				<h2 className="text-xs font-bold uppercase text-gray-400 mt-4 mb-3">
					Populares
				</h2>
				<div className="flex gap-4 overflow-auto">
					{popularBarbershop.map((barbershoop) => (
						<BarbershopItem key={barbershoop.id} barbershop={barbershoop} />
					))}
				</div>
			</div>
		</div>
	);
}
