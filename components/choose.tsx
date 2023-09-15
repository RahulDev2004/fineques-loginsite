"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Home, MSquare, LineChart, ChevronRight } from "lucide-react";
import { IChoice, choices } from "@/components/config/choice";
import { useRouter } from "next/navigation";

interface ChoiceCardProps {
    title: string,
    url: string,
    content: string,
    icon: JSX.Element,
}
export function ChoiceCard(props: ChoiceCardProps) {

    const router = useRouter();

    return (
        <Card onClick={() => router.push(props.url)} className="md:max-w-xs cursor-pointer group">
            <CardHeader className="flex gap-3 items-center flex-row">
                <span>{props.icon}</span>
                <span className="text-lg font-bold">{props.title}</span>
            </CardHeader>
            <CardContent className="text-slate-600 text-justify line-clamp-3">
                {props.content}
            </CardContent>
            <CardFooter className="flex justify-end">
                <div className="group-hover:translate-x-2 transition-transform">
                    <ChevronRight />
                </div>
            </CardFooter>
        </Card>
    )
}

export default function ChoiceList() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center">
            <ChoiceCard
                title={choices[0].title}
                url={choices[0].page}
                content="To view the general analytics of all the channels in the dashboard"
                icon={<Home size={30} />}
            />
            <ChoiceCard
                title={choices[1].title}
                url={choices[1].page}
                content="To view the content for advisor daily report in the dashboard"
                icon={<LineChart size={30} />}
                />
            <ChoiceCard
                title={choices[2].title}
                url={choices[2].page}
                content="To view the master report containing all the data"
                icon={<MSquare size={30} />}
            />
            </div>

        </div>
    )
}