import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link className={"hover:underline"} href={"/room/create"}>Create a room</Link>
        </div>
    )
}
