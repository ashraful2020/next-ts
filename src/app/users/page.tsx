import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Users|Ashraful",
    description: "this is ashraful"
}
type User = {

    "id": string,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }

    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }

}
const Users = async () => {
    const userData: Promise<User[]> = getAllUsers();
    const users = await userData
    return (
        <div>
            <section>
                {users.map(user => <div>
                    <Link href="/">
                        {user.name}
                    </Link>
                </div>)}
            </section>
        </div>
    );
};

export default Users;