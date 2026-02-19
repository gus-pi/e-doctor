import Vapi from '@vapi-ai/web';

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);

// const originalEmit = (vapi as any).emit?.bind(vapi);
// if (originalEmit) {
//     (vapi as any).emit = (event: string, ...args: any[]) => {
//         console.log('VAPI EMITTED:', event, args);
//         return originalEmit(event, ...args);
//     };
// }
