import { Icon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Header = () => {
	return (
		<Card>
			<CardContent className="p-5 flex flex-row items-center justify-between">
				<Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
				<Button variant="outline" size="icon">
					<MenuIcon />
				</Button>
			</CardContent>
		</Card>
	);
};

export default Header;
