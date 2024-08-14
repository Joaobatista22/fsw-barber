import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import SidebarButton from "./sidebar-sheet";

const Header = () => {
	return (
		<Card>
			<CardContent className="flex flex-row items-center justify-between p-5">
				<Link href="/">
					<Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
				</Link>

				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" variant="outline">
							<MenuIcon />
						</Button>
					</SheetTrigger>
					<SidebarButton />
				</Sheet>
			</CardContent>
		</Card>
	);
};

export default Header;
