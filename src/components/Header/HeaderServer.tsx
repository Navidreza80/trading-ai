"use server";

import Header from "./Header";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

export default async function HeaderServer() {

    const user = await currentUser();
    if(user) await syncUser();

    return <Header />
}