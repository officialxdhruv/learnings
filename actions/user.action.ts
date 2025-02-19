import { prisma } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
            posts: true,
          },
        },
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch {
    return null;
  }
};
