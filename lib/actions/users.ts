'use server';
import { prisma } from '../prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function syncUser() {
    try {
        const user = await currentUser();

        if (!user) return;

        const email = user.emailAddresses[0]?.emailAddress;
        if (!email) return;

        const dbUser = await prisma.user.upsert({
            where: { clerkId: user.id },
            update: {
                firstName: user.firstName,
                lastName: user.lastName,
                email,
            },
            create: {
                clerkId: user.id,
                firstName: user.firstName,

                lastName: user.lastName,
                email,
            },
        });

        return dbUser;
    } catch (error) {
        console.error('Error in sync user server action', error);
    }
}
