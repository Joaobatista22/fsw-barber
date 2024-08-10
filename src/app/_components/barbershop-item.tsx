import type { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface BarbershopItemProps {
	barbershop: Barbershop;
}

const BarbershotItem = ({ barbershop }: BarbershopItemProps) => {
	return (
		<Card className="min-w-[167px] rounded-2xl">
			<CardContent className="p-0 px-1 pt-1">
				<div className="relative h-[159px] w-full">
					<Image
						fill
						className="object-cover rounded-2xl"
						src={barbershop.imageUrl}
						alt={barbershop.name}
					/>
					<Badge className="absolute left-2 top-2" variant="secondary">
						<StarIcon size={12} className="fill-primary text-primary mr-1" />
						<p className="text-xs font-semibold">5.0</p>
					</Badge>
				</div>{" "}
				<div className="py-3]">
					<h3 className="font-semibolt truncate"> {barbershop.name}</h3>
					<p className="text-sm text-gray-400 truncate pb-2">
						{barbershop.address}
					</p>
					<Button variant="secondary" className="mt-3 w-full">
						Reservar
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default BarbershotItem;
