import { SearchIcon } from "lucide-react";
import { Badge } from "./_components/ui/badge";

import Image from "next/image";
import Header from "./_components/header";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Button } from "./_components/ui/button";
import { Card, CardContent } from "./_components/ui/card";
import { Input } from "./_components/ui/input";

export default function Home() {
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
				<div className="relative h-[150px] w-full mt-5">
					<Image
						alt="banner"
						src="/img/banner.png"
						fill
						className="object-cover rounded-xl"
					/>
				</div>
				<Card className="mt-6">
					<CardContent className="flex justify-between p-0">
						<div className="flex flex-col gap-2 py-5 pl-5 ">
							<Badge className="w-fit">Confirmado</Badge>
							<h3 className="font-semibold">Corte de Cabelo</h3>
							<div className="flex items-center gap-2">
								<Avatar className="h-6 w-6">
									<AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
								</Avatar>
								<p className="text-sm">Barbearia DevJohn</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid ">
							<p className="text-sm">Agosto</p>
							<p className="text-2xl">05</p>
							<p className="text-sm">14:30</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
