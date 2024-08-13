import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";

const SidebarButton = () => {
	return (
		<SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
			<SheetHeader>
				<SheetTitle className="text-left">Menu</SheetTitle>
			</SheetHeader>
			<div className="flex gap-4 py-5 border-b border-solid">
				<Avatar>
					<AvatarImage src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" />
				</Avatar>
				<div>
					<h1 className="font-bolt">João Batista</h1>
					<p className="text-xs">joaobatista.ds@gmail.com</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 py-5 border-b border-solid">
				<SheetClose asChild>
					<Button className="justify-start gap-2" variant="ghost" asChild>
						<Link href="/">
							<HomeIcon size={18} />
							Inicio
						</Link>
					</Button>
				</SheetClose>
				<Button className="justify-start gap-2" variant="ghost">
					<CalendarIcon size={18} />
					Agendamentos
				</Button>
			</div>

			<div className="flex flex-col gap-4 py-5 border-b border-solid">
				{quickSearchOptions.map((option) => (
					<Button
						key={option.title}
						className="justify-start gap-2"
						variant="ghost"
					>
						<Image
							alt={option.title}
							src={option.imageUrl}
							height={18}
							width={18}
						/>
						{option.title}
					</Button>
				))}
			</div>
			<div className="flex flex-col gap-4 py-5 ">
				<Button className="justify-start gap-2" variant="ghost">
					<LogOutIcon />
					Sair da conta
				</Button>
			</div>
		</SheetContent>
	);
};

export default SidebarButton;
