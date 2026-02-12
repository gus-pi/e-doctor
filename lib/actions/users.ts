'use server';
import { prisma } from '../prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function syncUser() {
    try {
        const user = await currentUser();

        if (!user) return;

        const existingUser = await prisma.user.findUnique({ where: { clerkId: user.id } });

        if (existingUser) return existingUser;

        const dbUser = await prisma.user.create({
            data: {
                clerkId: user.id,
                firstName: user.firstName,
                lasttName: user.lastName,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        return dbUser;
    } catch (error) {
        console.log('Error in sync user server action');
    }
}
