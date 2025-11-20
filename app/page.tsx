import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
