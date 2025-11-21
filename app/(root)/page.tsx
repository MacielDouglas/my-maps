import prisma from "@/lib/prisma";
import { Header } from "./components";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="w-screen h-screen">
      <Header />
      {users.map((user) => (
        <div key={user.id}>
          <p className="font-title">{user.name}</p>
          <p className="font-text">{user.email}</p>
          <p className="font-subtitle ">{user.email}</p>
        </div>
      ))}
    </main>
  );
}
